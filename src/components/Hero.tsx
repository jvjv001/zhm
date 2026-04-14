import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          掌握Python数据分析技能
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          专为商务数据分析与应用专业学生设计的在线教育平台，提供完整的课程体系、互动式学习模块和成就激励系统。
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-8 py-3 bg-white text-blue-600 rounded-md font-medium hover:bg-gray-100 transition-colors">
            开始学习
          </button>
          <button className="px-8 py-3 border border-white text-white rounded-md font-medium hover:bg-white hover:text-blue-600 transition-colors">
            了解更多
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;