import React from 'react';
import { Link } from 'react-router-dom';

interface CourseProps {
  title: string;
  description: string;
  instructor: string;
  rating: number;
  students: number;
  imageUrl: string;
  link: string;
}

const CourseCard: React.FC<CourseProps> = ({ title, description, instructor, rating, students, imageUrl, link }) => {
  return (
    <Link to={link} className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="h-48 bg-gray-200">
        <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <svg className="h-5 w-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="ml-1 text-gray-700">{rating}</span>
            <span className="ml-2 text-gray-500 text-sm">({students} 学生)</span>
          </div>
        </div>
        <div className="flex items-center">
          <div className="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center">
            <span className="text-gray-700 font-medium">{instructor.charAt(0)}</span>
          </div>
          <span className="ml-2 text-gray-700">{instructor}</span>
        </div>
      </div>
    </Link>
  );
};

const FeaturedCourses: React.FC = () => {
  const courses = [
    {
      title: 'Python编程基础',
      description: '掌握Python核心语法、流程控制、数据结构和函数基础',
      instructor: '张教授',
      rating: 4.8,
      students: 1200,
      imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Python%20programming%20basics%20course%20cover%20with%20code%20examples&image_size=square',
      link: '/courses/python-basics'
    },
    {
      title: 'Python核心进阶',
      description: '学习文件操作、模块与包、面向对象编程和异常处理',
      instructor: '李老师',
      rating: 4.9,
      students: 950,
      imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Python%20advanced%20programming%20course%20cover%20with%20object%20oriented%20concepts&image_size=square',
      link: '/courses/python-advanced'
    },
    {
      title: '数据处理与分析',
      description: '学习NumPy和Pandas库，掌握数据处理、清洗和分析技能',
      instructor: '王博士',
      rating: 4.7,
      students: 820,
      imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Data%20processing%20and%20analysis%20course%20cover%20with%20NumPy%20and%20Pandas&image_size=square',
      link: '/courses/data-analysis'
    },
    {
      title: '数据可视化',
      description: '学习Matplotlib和Pyecharts，创建美观、交互式的数据可视化',
      instructor: '刘教授',
      rating: 4.6,
      students: 750,
      imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Data%20visualization%20course%20cover%20with%20colorful%20charts%20and%20graphs&image_size=square',
      link: '/courses/data-visualization'
    },
    {
      title: '文本处理与正则表达式',
      description: '掌握字符串处理和正则表达式，用于文本分析和数据提取',
      instructor: '陈老师',
      rating: 4.5,
      students: 680,
      imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Text%20processing%20and%20regular%20expressions%20course%20cover&image_size=square',
      link: '/courses/text-processing'
    },
    {
      title: '商务数据分析实战',
      description: '学习如何使用Python进行商务数据分析和决策支持',
      instructor: '赵教授',
      rating: 4.9,
      students: 1050,
      imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Business%20data%20analysis%20course%20cover%20with%20business%20charts%20and%20reports&image_size=square',
      link: '/courses/business-analysis'
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">特色课程</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <CourseCard
              key={index}
              title={course.title}
              description={course.description}
              instructor={course.instructor}
              rating={course.rating}
              students={course.students}
              imageUrl={course.imageUrl}
              link={course.link}
            />
          ))}
        </div>
        <div className="mt-12 text-center">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
            查看全部课程
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;