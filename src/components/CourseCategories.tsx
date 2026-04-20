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
      title: 'Python数据分析',
      description: '掌握Python编程，学习NumPy、Pandas等数据分析库',
      icon: (
        <svg className="h-12 w-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      color: 'border-blue-500',
      link: '/courses/python-data-analysis'
    },
    {
      title: 'Excel商务统计',
      description: '学习Excel函数、图表和数据透视表，提升办公效率',
      icon: (
        <svg className="h-12 w-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
      color: 'border-green-500',
      link: '/courses/excel-business-statistics'
    },
    {
      title: 'SQL数据库',
      description: '学习SQL查询和数据库操作，为数据分析打下基础',
      icon: (
        <svg className="h-12 w-12 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
        </svg>
      ),
      color: 'border-purple-500',
      link: '/courses/sql'
    },
    {
      title: '数据可视化',
      description: '学习Matplotlib、Plotly等工具，创建美观图表',
      icon: (
        <svg className="h-12 w-12 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      color: 'border-orange-500',
      link: '/courses/data-visualization'
    },
    {
      title: '商务实战',
      description: '通过真实商业案例，综合应用所学知识',
      icon: (
        <svg className="h-12 w-12 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      color: 'border-red-500',
      link: '/courses/business-practice'
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">课程体系</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
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