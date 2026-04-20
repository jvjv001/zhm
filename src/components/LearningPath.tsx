import React from 'react';
import { Link } from 'react-router-dom';

interface PathStepProps {
  title: string;
  description: string;
  number: string;
  color: string;
  link: string;
}

const PathStep: React.FC<PathStepProps> = ({ title, description, number, color, link }) => {
  return (
    <Link to={link} className={`flex flex-col items-center p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow ${color}`}>
      <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-4">
        <span className="text-2xl font-bold text-blue-600">{number}</span>
      </div>
      <h3 className="text-xl font-semibold mb-2 text-center">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </Link>
  );
};

const LearningPath: React.FC = () => {
  const pathSteps = [
    {
      title: 'Python编程基础',
      description: '掌握核心语法、流程控制、数据结构和函数基础',
      number: '1',
      color: 'bg-blue-50 border border-blue-200',
      link: '/courses/python-basics'
    },
    {
      title: 'Python核心进阶',
      description: '学习文件操作、模块与包、面向对象编程和异常处理',
      number: '2',
      color: 'bg-green-50 border border-green-200',
      link: '/courses/python-advanced'
    },
    {
      title: '高级特性与工程实践',
      description: '掌握函数式编程、迭代器、生成器、装饰器和并发编程',
      number: '3',
      color: 'bg-purple-50 border border-purple-200',
      link: '/courses/python-expert'
    },
    {
      title: '专项技能与应用',
      description: '学习数据处理、可视化、文本处理、Web开发和自动化',
      number: '4',
      color: 'bg-orange-50 border border-orange-200',
      link: '/courses/python-applications'
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">学习路径</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pathSteps.map((step, index) => (
            <PathStep
              key={index}
              title={step.title}
              description={step.description}
              number={step.number}
              color={step.color}
              link={step.link}
            />
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            按照学习路径循序渐进，掌握Python数据分析的完整技能体系
          </p>
          <Link to="/courses" className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
            查看完整课程体系
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LearningPath;