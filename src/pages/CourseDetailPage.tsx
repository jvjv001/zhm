import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  instructorBio: string;
  rating: number;
  students: number;
  imageUrl: string;
  category: string;
  level: string;
  duration: string;
  prerequisites: string[];
  modules: Module[];
}

interface Module {
  id: string;
  title: string;
  lessons: Lesson[];
}

interface Lesson {
  id: string;
  title: string;
  duration: string;
  type: string;
}

const CourseDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState(true);
  const [enrolled, setEnrolled] = useState(false);

  // 模拟课程数据
  const mockCourses: Course[] = [
    {
      id: '1',
      title: 'Python数据分析入门',
      description: '本课程从基础开始，教授学生如何使用Python进行数据分析。通过实际案例和 hands-on 练习，学生将掌握Pandas、NumPy等核心库的使用，以及数据清洗、分析和可视化的基本技能。课程适合商务数据分析专业的学生，不需要 prior programming experience。',
      instructor: '张教授',
      instructorBio: '张教授拥有10年数据分析教学经验，曾在多家科技公司担任数据分析师，专注于Python数据分析和机器学习领域。',
      rating: 4.8,
      students: 1200,
      imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Python%20data%20analysis%20course%20cover%20with%20code%20and%20charts&image_size=landscape_16_9',
      category: 'Python基础',
      level: '初级',
      duration: '8周',
      prerequisites: ['基本计算机操作技能', '高中数学基础'],
      modules: [
        {
          id: '1',
          title: 'Python基础',
          lessons: [
            { id: '1', title: 'Python简介', duration: '45分钟', type: '视频' },
            { id: '2', title: '变量和数据类型', duration: '60分钟', type: '视频' },
            { id: '3', title: '控制流和循环', duration: '60分钟', type: '视频' },
            { id: '4', title: '函数和模块', duration: '45分钟', type: '视频' },
            { id: '5', title: 'Python基础练习', duration: '90分钟', type: '练习' }
          ]
        },
        {
          id: '2',
          title: '数据处理基础',
          lessons: [
            { id: '1', title: 'NumPy库简介', duration: '60分钟', type: '视频' },
            { id: '2', title: 'Pandas库简介', duration: '60分钟', type: '视频' },
            { id: '3', title: '数据清洗', duration: '90分钟', type: '视频' },
            { id: '4', title: '数据处理练习', duration: '120分钟', type: '练习' }
          ]
        },
        {
          id: '3',
          title: '数据可视化',
          lessons: [
            { id: '1', title: 'Matplotlib库简介', duration: '60分钟', type: '视频' },
            { id: '2', title: 'Seaborn库简介', duration: '60分钟', type: '视频' },
            { id: '3', title: '交互式可视化', duration: '45分钟', type: '视频' },
            { id: '4', title: '数据可视化练习', duration: '120分钟', type: '练习' }
          ]
        },
        {
          id: '4',
          title: '数据分析实战',
          lessons: [
            { id: '1', title: '销售数据分析', duration: '90分钟', type: '视频' },
            { id: '2', title: '市场趋势分析', duration: '90分钟', type: '视频' },
            { id: '3', title: '客户行为分析', duration: '90分钟', type: '视频' },
            { id: '4', title: '数据分析项目', duration: '180分钟', type: '项目' }
          ]
        }
      ]
    }
  ];

  useEffect(() => {
    // 模拟API请求
    setTimeout(() => {
      const foundCourse = mockCourses.find(c => c.id === id);
      setCourse(foundCourse || null);
      setLoading(false);
    }, 1000);
  }, [id]);

  const handleEnroll = () => {
    setEnrolled(true);
    // 这里可以添加实际的enroll逻辑
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

  if (!course) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-32 pb-16 flex justify-center items-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">课程不存在</h1>
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
        {/* 课程头部 */}
        <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-1/3">
                <div className="rounded-lg overflow-hidden shadow-md">
                  <img src={course.imageUrl} alt={course.title} className="w-full h-64 object-cover" />
                </div>
              </div>
              <div className="lg:w-2/3">
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">{course.category}</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-medium">{course.level}</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-medium">{course.duration}</span>
                </div>
                <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
                <p className="text-gray-600 mb-6">{course.description}</p>
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center">
                    <svg className="h-5 w-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="ml-1 text-gray-700 font-medium">{course.rating}</span>
                    <span className="ml-2 text-gray-500 text-sm">({course.students} 学生)</span>
                  </div>
                </div>
                <button
                  onClick={handleEnroll}
                  className={`px-8 py-3 rounded-md font-medium transition-colors ${enrolled 
                    ? 'bg-gray-500 text-white' 
                    : 'bg-blue-600 text-white hover:bg-blue-700'}`}
                  disabled={enrolled}
                >
                  {enrolled ? '已加入课程' : '加入课程'}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 课程内容 */}
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          {/* 讲师信息 */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">讲师信息</h2>
            <div className="flex items-center gap-4">
              <div className="h-20 w-20 rounded-full bg-gray-300 flex items-center justify-center">
                <span className="text-gray-700 font-medium text-xl">{course.instructor.charAt(0)}</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold">{course.instructor}</h3>
                <p className="text-gray-600">{course.instructorBio}</p>
              </div>
            </div>
          </div>

          {/* 课程大纲 */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">课程大纲</h2>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              {course.modules.map((module, index) => (
                <div key={module.id} className={`border-b ${index === course.modules.length - 1 ? 'border-b-0' : ''}`}>
                  <div className="p-4 bg-gray-50">
                    <h3 className="text-lg font-semibold">{index + 1}. {module.title}</h3>
                  </div>
                  <div className="p-4">
                    {module.lessons.map((lesson, lessonIndex) => (
                      <div key={lesson.id} className="flex items-center justify-between py-2 border-b last:border-b-0">
                        <div className="flex items-center">
                          <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-medium mr-3">
                            {lessonIndex + 1}
                          </span>
                          <div>
                            <h4 className="font-medium">{lesson.title}</h4>
                            <span className="text-gray-500 text-sm">{lesson.type} • {lesson.duration}</span>
                          </div>
                        </div>
                        {enrolled ? (
                          <a href={`/learn/${course.id}/${module.id}/${lesson.id}`} className="text-blue-600 hover:underline">
                            开始学习
                          </a>
                        ) : (
                          <span className="text-gray-400">加入课程后可访问</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/*  prerequisites */}
          <div>
            <h2 className="text-2xl font-bold mb-6">前置要求</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              {course.prerequisites.map((prerequisite, index) => (
                <li key={index}>{prerequisite}</li>
              ))}
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CourseDetailPage;