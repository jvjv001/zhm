import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Python系统性学习平台
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          基于完整的Python学习大纲，为商务数据分析与应用专业学生提供从基础到进阶的系统化课程体系，包含互动式学习、练习和测评。
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-8 py-3 bg-white text-blue-600 rounded-md font-medium hover:bg-gray-100 transition-colors">
            开始学习
          </button>
          <button className="px-8 py-3 border border-white text-white rounded-md font-medium hover:bg-white hover:text-blue-600 transition-colors">
            了解课程体系
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;