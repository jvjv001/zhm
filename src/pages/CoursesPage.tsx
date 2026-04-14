import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  rating: number;
  students: number;
  imageUrl: string;
  category: string;
  level: string;
  duration: string;
}

const CoursesPage: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // 模拟课程数据
  const mockCourses: Course[] = [
    {
      id: '1',
      title: 'Python数据分析入门',
      description: '从基础开始学习Python数据分析，掌握Pandas、NumPy等核心库',
      instructor: '张教授',
      rating: 4.8,
      students: 1200,
      imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Python%20data%20analysis%20course%20cover%20with%20code%20and%20charts&image_size=square',
      category: 'Python基础',
      level: '初级',
      duration: '8周'
    },
    {
      id: '2',
      title: '商务数据分析实战',
      description: '学习如何使用Python进行商务数据分析，包括市场分析、销售预测等',
      instructor: '李老师',
      rating: 4.9,
      students: 950,
      imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Business%20data%20analysis%20course%20cover%20with%20business%20charts%20and%20graphs&image_size=square',
      category: '商务分析',
      level: '中级',
      duration: '10周'
    },
    {
      id: '3',
      title: '数据可视化与仪表盘',
      description: '学习如何使用Matplotlib、Seaborn等库创建美观的数据可视化',
      instructor: '王博士',
      rating: 4.7,
      students: 820,
      imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Data%20visualization%20course%20cover%20with%20colorful%20charts%20and%20dashboards&image_size=square',
      category: '数据可视化',
      level: '中级',
      duration: '6周'
    },
    {
      id: '4',
      title: '机器学习基础',
      description: '了解机器学习基础概念和Python实现方法',
      instructor: '赵教授',
      rating: 4.6,
      students: 780,
      imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Machine%20learning%20course%20cover%20with%20AI%20concepts%20and%20code&image_size=square',
      category: '机器学习',
      level: '高级',
      duration: '12周'
    }
  ];

  useEffect(() => {
    // 模拟API请求
    setTimeout(() => {
      setCourses(mockCourses);
      setLoading(false);
    }, 1000);
  }, []);

  const categories = ['all', 'Python基础', '数据可视化', '机器学习', '商务分析'];

  const filteredCourses = selectedCategory === 'all' 
    ? courses 
    : courses.filter(course => course.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-center">课程列表</h1>
          
          {/* 分类筛选 */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-md transition-colors ${selectedCategory === category 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
              >
                {category === 'all' ? '全部' : category}
              </button>
            ))}
          </div>

          {/* 课程列表 */}
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map(course => (
                <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-48 bg-gray-200">
                    <img src={course.imageUrl} alt={course.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-blue-600">{course.category}</span>
                      <span className="text-sm font-medium text-gray-600">{course.level}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                    <p className="text-gray-600 mb-4">{course.description}</p>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <svg className="h-5 w-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="ml-1 text-gray-700">{course.rating}</span>
                        <span className="ml-2 text-gray-500 text-sm">({course.students} 学生)</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center">
                          <span className="text-gray-700 font-medium">{course.instructor.charAt(0)}</span>
                        </div>
                        <span className="ml-2 text-gray-700">{course.instructor}</span>
                      </div>
                      <span className="text-gray-500 text-sm">{course.duration}</span>
                    </div>
                    <div className="mt-6">
                      <a 
                        href={`/courses/${course.id}`} 
                        className="block w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-center"
                      >
                        查看详情
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CoursesPage;