import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface Lesson {
  id: string;
  title: string;
  content: string;
  codeExample: string;
  type: string;
}

const LearningModulePage: React.FC = () => {
  const { courseId, moduleId, lessonId } = useParams<{ courseId: string; moduleId: string; lessonId: string }>();
  const [lesson, setLesson] = useState<Lesson | null>(null);
  const [loading, setLoading] = useState(true);
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');
  const [pyodide, setPyodide] = useState<any>(null);
  const [executing, setExecuting] = useState(false);

  // 模拟课程数据
  const mockLessons: Lesson[] = [
    {
      id: '1',
      title: 'Python简介',
      content: 'Python是一种简单易学的编程语言，广泛应用于数据分析、人工智能、Web开发等领域。本课程将从基础开始，教授你如何使用Python进行数据分析。',
      codeExample: 'print("Hello, Data Analysis!")\n# 这是一个注释\nx = 10\ny = 20\nprint(f"x + y = {x + y}")',
      type: '视频'
    },
    {
      id: '2',
      title: '变量和数据类型',
      content: '在Python中，变量用于存储数据，不同类型的数据有不同的特性和用途。常见的数据类型包括整数、浮点数、字符串、布尔值等。',
      codeExample: '# 变量和数据类型\nname = "DataLearn"\nage = 1\npi = 3.14159\nis_student = True\n\nprint(f"Name: {name}")\nprint(f"Age: {age}")\nprint(f"Pi: {pi}")\nprint(f"Is student: {is_student}")',
      type: '视频'
    },
    {
      id: '3',
      title: '控制流和循环',
      content: '控制流语句用于根据条件执行不同的代码块，循环语句用于重复执行代码块。常见的控制流语句包括if-else语句，常见的循环语句包括for循环和while循环。',
      codeExample: '# 控制流和循环\n\n# if-else语句\nscore = 85\nif score >= 90:\n    print("优秀")\nelif score >= 80:\n    print("良好")\nelif score >= 60:\n    print("及格")\nelse:\n    print("不及格")\n\n# for循环\nprint("\nFor循环:")\nfor i in range(5):\n    print(f"i = {i}")\n\n# while循环\nprint("\nWhile循环:")\nj = 0\nwhile j < 5:\n    print(f"j = {j}")\n    j += 1',
      type: '视频'
    }
  ];

  useEffect(() => {
    // 模拟API请求
    setTimeout(() => {
      const foundLesson = mockLessons.find(l => l.id === lessonId);
      setLesson(foundLesson || null);
      if (foundLesson) {
        setCode(foundLesson.codeExample);
      }
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
  }, [lessonId]);

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

  if (!lesson) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-32 pb-16 flex justify-center items-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">课程内容不存在</h1>
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
          {/* 课程导航 */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <a href="/courses" className="text-blue-600 hover:underline">课程</a>
              <span>/</span>
              <a href={`/courses/${courseId}`} className="text-blue-600 hover:underline">Python数据分析入门</a>
              <span>/</span>
              <span className="text-gray-600">{lesson.title}</span>
            </div>
            <h1 className="text-3xl font-bold">{lesson.title}</h1>
          </div>

          {/* 课程内容 */}
          <div className="mb-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="prose max-w-none">
                <p>{lesson.content}</p>
              </div>
            </div>
          </div>

          {/* 代码编辑器 */}
          <div className="mb-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-gray-100 px-4 py-2 flex justify-between items-center">
                <h3 className="font-semibold">代码编辑器</h3>
                <button
                  onClick={handleRunCode}
                  className={`px-4 py-1 rounded-md font-medium transition-colors ${executing 
                    ? 'bg-gray-500 text-white' 
                    : 'bg-blue-600 text-white hover:bg-blue-700'}`}
                  disabled={executing}
                >
                  {executing ? '执行中...' : '运行代码'}
                </button>
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
              </div>
            </div>
          </div>

          {/* 代码示例 */}
          <div className="mb-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-gray-100 px-4 py-2">
                <h3 className="font-semibold">代码示例</h3>
              </div>
              <div className="p-4">
                <SyntaxHighlighter language="python" style={tomorrow}>
                  {lesson.codeExample}
                </SyntaxHighlighter>
              </div>
            </div>
          </div>

          {/* 导航按钮 */}
          <div className="flex justify-between">
            <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors">
              上一课
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
              下一课
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LearningModulePage;