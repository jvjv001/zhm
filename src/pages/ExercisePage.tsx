import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface Exercise {
  id: string;
  title: string;
  description: string;
  difficulty: string;
  testCases: TestCase[];
  hints: string[];
}

interface TestCase {
  input: string;
  expectedOutput: string;
}

const ExercisePage: React.FC = () => {
  const { courseId, moduleId, exerciseId } = useParams<{ courseId: string; moduleId: string; exerciseId: string }>();
  const [exercise, setExercise] = useState<Exercise | null>(null);
  const [loading, setLoading] = useState(true);
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');
  const [pyodide, setPyodide] = useState<any>(null);
  const [executing, setExecuting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [showHints, setShowHints] = useState(false);

  // 模拟练习数据
  const mockExercises: Exercise[] = [
    {
      id: '1',
      title: 'Python基础练习',
      description: '编写一个函数，计算两个数的和。',
      difficulty: '简单',
      testCases: [
        { input: 'add(1, 2)', expectedOutput: '3' },
        { input: 'add(5, 7)', expectedOutput: '12' },
        { input: 'add(10, 20)', expectedOutput: '30' }
      ],
      hints: [
        '函数名应该是add',
        '函数应该接受两个参数',
        '函数应该返回两个参数的和'
      ]
    },
    {
      id: '2',
      title: '数据处理练习',
      description: '编写一个函数，计算列表中所有元素的平均值。',
      difficulty: '中等',
      testCases: [
        { input: 'average([1, 2, 3, 4, 5])', expectedOutput: '3.0' },
        { input: 'average([10, 20, 30])', expectedOutput: '20.0' },
        { input: 'average([2.5, 3.5, 4.5])', expectedOutput: '3.5' }
      ],
      hints: [
        '函数名应该是average',
        '函数应该接受一个列表参数',
        '使用sum()函数计算总和，使用len()函数计算元素个数'
      ]
    }
  ];

  useEffect(() => {
    // 模拟API请求
    setTimeout(() => {
      const foundExercise = mockExercises.find(e => e.id === exerciseId);
      setExercise(foundExercise || null);
      setLoading(false);
    }, 1000);

    // 加载Pyodide
    const loadPyodide = async () => {
      try {
        const pyodide = await (window as any).loadPyodide({
          indexURL: "https://cdn.jsdelivr.net/pyodide/v0.25.1/full/"
        });
        setPyodide(pyodide);
      } catch (error) {
        console.error("Failed to load Pyodide:", error);
      }
    };

    if (!(window as any).loadPyodide) {
      // 加载Pyodide脚本
      const script = document.createElement('script');
      script.src = "https://cdn.jsdelivr.net/pyodide/v0.25.1/full/pyodide.js";
      script.onload = loadPyodide;
      document.body.appendChild(script);
    } else {
      loadPyodide();
    }

    return () => {
      // 清理
    };
  }, [exerciseId]);

  const handleRunCode = async () => {
    if (!pyodide) {
      setOutput('Pyodide is still loading...');
      return;
    }

    setExecuting(true);
    setOutput('');

    try {
      // 重定向stdout到输出
      pyodide.setStdout({ write: (text: string) => setOutput(prev => prev + text) });
      
      // 执行代码
      await pyodide.runPython(code);
    } catch (error: any) {
      setOutput(`Error: ${error.message}`);
    } finally {
      setExecuting(false);
    }
  };

  const handleSubmit = async () => {
    if (!pyodide || !exercise) {
      return;
    }

    setExecuting(true);
    let totalScore = 0;
    let output = '';

    try {
      // 执行每个测试用例
      for (const testCase of exercise.testCases) {
        // 重定向stdout到变量
        let testOutput = '';
        pyodide.setStdout({ write: (text: string) => testOutput += text });
        
        // 执行测试
        await pyodide.runPython(`${code}\nprint(${testCase.input})`);
        
        // 检查结果
        const actualOutput = testOutput.trim();
        const expectedOutput = testCase.expectedOutput.trim();
        
        if (actualOutput === expectedOutput) {
          totalScore += 1;
          output += `测试用例 ${exercise.testCases.indexOf(testCase) + 1}: 通过 ✅\n`;
        } else {
          output += `测试用例 ${exercise.testCases.indexOf(testCase) + 1}: 失败 ❌\n`;
          output += `  输入: ${testCase.input}\n`;
          output += `  期望输出: ${expectedOutput}\n`;
          output += `  实际输出: ${actualOutput}\n`;
        }
      }

      setScore(totalScore);
      setOutput(output);
      setSubmitted(true);
    } catch (error: any) {
      setOutput(`Error: ${error.message}`);
    } finally {
      setExecuting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-32 pb-16 flex justify-center items-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600"></div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!exercise) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-32 pb-16 flex justify-center items-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">练习不存在</h1>
            <a href="/courses" className="text-blue-600 hover:underline">返回课程列表</a>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16 pb-16">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          {/* 练习导航 */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <a href="/courses" className="text-blue-600 hover:underline">课程</a>
              <span>/</span>
              <a href={`/courses/${courseId}`} className="text-blue-600 hover:underline">Python数据分析入门</a>
              <span>/</span>
              <span className="text-gray-600">{exercise.title}</span>
            </div>
            <div className="flex justify-between items-center">
              <h1 className="text-3xl font-bold">{exercise.title}</h1>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${exercise.difficulty === '简单' ? 'bg-green-100 text-green-800' : exercise.difficulty === '中等' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}`}>
                {exercise.difficulty}
              </span>
            </div>
          </div>

          {/* 练习描述 */}
          <div className="mb-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">练习描述</h2>
              <p className="text-gray-600">{exercise.description}</p>
            </div>
          </div>

          {/* 代码编辑器 */}
          <div className="mb-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-gray-100 px-4 py-2 flex justify-between items-center">
                <h3 className="font-semibold">代码编辑器</h3>
                <div className="flex gap-2">
                  <button
                    onClick={handleRunCode}
                    className={`px-4 py-1 rounded-md font-medium transition-colors ${executing 
                      ? 'bg-gray-500 text-white' 
                      : 'bg-gray-600 text-white hover:bg-gray-700'}`}
                    disabled={executing}
                  >
                    运行代码
                  </button>
                  <button
                    onClick={handleSubmit}
                    className={`px-4 py-1 rounded-md font-medium transition-colors ${executing 
                      ? 'bg-gray-500 text-white' 
                      : 'bg-blue-600 text-white hover:bg-blue-700'}`}
                    disabled={executing}
                  >
                    提交答案
                  </button>
                </div>
              </div>
              <div className="p-4">
                <textarea
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className="w-full h-64 p-4 border border-gray-300 rounded-md font-mono text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="在此输入Python代码..."
                />
              </div>
            </div>
          </div>

          {/* 代码执行结果 */}
          <div className="mb-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-gray-100 px-4 py-2">
                <h3 className="font-semibold">执行结果</h3>
              </div>
              <div className="p-4">
                <div className="bg-gray-900 text-green-400 p-4 rounded-md font-mono text-sm min-h-32">
                  {output || '运行代码查看结果...'}
                </div>
                {submitted && (
                  <div className="mt-4 p-3 bg-blue-100 text-blue-800 rounded-md">
                    <p className="font-medium">得分: {score}/{exercise.testCases.length}</p>
                    {score === exercise.testCases.length && (
                      <p className="mt-1 text-green-700">恭喜你完成了这个练习！</p>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* 提示 */}
          <div className="mb-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-gray-100 px-4 py-2 flex justify-between items-center">
                <h3 className="font-semibold">提示</h3>
                <button
                  onClick={() => setShowHints(!showHints)}
                  className="text-blue-600 hover:underline text-sm"
                >
                  {showHints ? '隐藏提示' : '显示提示'}
                </button>
              </div>
              {showHints && (
                <div className="p-4">
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    {exercise.hints.map((hint, index) => (
                      <li key={index}>{hint}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* 导航按钮 */}
          <div className="flex justify-between">
            <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors">
              上一个练习
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
              下一个练习
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ExercisePage;