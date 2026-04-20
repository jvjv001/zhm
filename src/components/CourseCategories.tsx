import React from 'react';

import { Link } from 'react-router-dom';

interface CategoryProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  link: string;
}

const Category: React.FC<CategoryProps> = ({ title, description, icon, color, link }) => {
  return (
    <Link to={link} className={`block bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 ${color}`}>
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </Link>
  );
};

const CourseCategories: React.FC = () => {
  const categories = [
    {
      title: 'Python编程基础',
      description: '掌握Python核心语法、流程控制、数据结构和函数基础',
      icon: (
        <svg className="h-12 w-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      color: 'border-blue-500',
      link: '/courses/python-basics'
    },
    {
      title: 'Python核心进阶',
      description: '学习文件操作、模块与包、面向对象编程和异常处理',
      icon: (
        <svg className="h-12 w-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      color: 'border-green-500',
      link: '/courses/python-advanced'
    },
    {
      title: '高级特性与工程实践',
      description: '掌握函数式编程、迭代器、生成器、装饰器和并发编程',
      icon: (
        <svg className="h-12 w-12 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      color: 'border-purple-500',
      link: '/courses/python-expert'
    },
    {
      title: '专项技能与应用',
      description: '学习数据处理、可视化、文本处理、Web开发和自动化',
      icon: (
        <svg className="h-12 w-12 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      color: 'border-orange-500',
      link: '/courses/python-applications'
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">课程分类</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Category
              key={index}
              title={category.title}
              description={category.description}
              icon={category.icon}
              color={category.color}
              link={category.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseCategories;