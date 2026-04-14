import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface Course {
  id: string;
  title: string;
  students: number;
  progress: number;
  lastUpdated: string;
}

interface Student {
  id: string;
  name: string;
  email: string;
  courses: number;
  progress: number;
}

const InstructorDashboardPage: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);

  // 模拟数据
  const mockCourses: Course[] = [
    {
      id: '1',
      title: 'Python数据分析入门',
      students: 120,
      progress: 75,
      lastUpdated: '2026-04-10'
    },
    {
      id: '2',
      title: '商务数据分析实战',
      students: 85,
      progress: 45,
      lastUpdated: '2026-04-08'
    },
    {
      id: '3',
      title: '数据可视化与仪表盘',
      students: 60,
      progress: 20,
      lastUpdated: '2026-04-05'
    }
  ];

  const mockStudents: Student[] = [
    {
      id: '1',
      name: '张三',
      email: 'zhangsan@example.com',
      courses: 2,
      progress: 85
    },
    {
      id: '2',
      name: '李四',
      email: 'lisi@example.com',
      courses: 3,
      progress: 65
    },
    {
      id: '3',
      name: '王五',
      email: 'wangwu@example.com',
      courses: 1,
      progress: 90
    },
    {
      id: '4',
      name: '赵六',
      email: 'zhaoliu@example.com',
      courses: 2,
      progress: 70
    }
  ];

  useEffect(() => {
    // 模拟API请求
    setTimeout(() => {
      setCourses(mockCourses);
      setStudents(mockStudents);
      setLoading(false);
    }, 1000);
  }, []);

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

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">教师仪表盘</h1>

          {/* 统计概览 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">我的课程</h3>
                <span className="text-2xl font-bold text-blue-600">{courses.length}</span>
              </div>
              <p className="text-sm text-gray-600">已创建的课程数量</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">学生总数</h3>
                <span className="text-2xl font-bold text-green-600">
                  {courses.reduce((total, course) => total + course.students, 0)}
                </span>
              </div>
              <p className="text-sm text-gray-600">所有课程的学生总数</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">平均完成率</h3>
                <span className="text-2xl font-bold text-yellow-600">
                  {Math.round(courses.reduce((total, course) => total + course.progress, 0) / courses.length)}%
                </span>
              </div>
              <p className="text-sm text-gray-600">所有课程的平均完成率</p>
            </div>
          </div>

          {/* 课程管理 */}
          <div className="mb-12">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">课程管理</h2>
              <a href="/instructor/courses/create" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                创建课程
              </a>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      课程名称
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      学生数
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      完成率
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      最后更新
                    </th>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      操作
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {courses.map((course) => (
                    <tr key={course.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-medium text-gray-900">{course.title}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-gray-900">{course.students}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-24 bg-gray-200 rounded-full h-2.5 mr-2">
                            <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${course.progress}%` }}></div>
                          </div>
                          <span className="text-gray-900">{course.progress}%</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {course.lastUpdated}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a href={`/instructor/courses/${course.id}/edit`} className="text-blue-600 hover:text-blue-900 mr-3">
                          编辑
                        </a>
                        <a href={`/instructor/courses/${course.id}/students`} className="text-green-600 hover:text-green-900">
                          学生
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 学生管理 */}
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">学生管理</h2>
              <a href="/instructor/students" className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors">
                查看全部
              </a>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      学生姓名
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      邮箱
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      课程数
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      平均进度
                    </th>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      操作
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {students.map((student) => (
                    <tr key={student.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-medium text-gray-900">{student.name}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-gray-900">{student.email}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-gray-900">{student.courses}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-24 bg-gray-200 rounded-full h-2.5 mr-2">
                            <div className="bg-green-600 h-2.5 rounded-full" style={{ width: `${student.progress}%` }}></div>
                          </div>
                          <span className="text-gray-900">{student.progress}%</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a href={`/instructor/students/${student.id}`} className="text-blue-600 hover:text-blue-900">
                          详情
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default InstructorDashboardPage;