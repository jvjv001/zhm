import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface Course {
  id: string;
  title: string;
  description: string;
  modules: Module[];
  instructor: string;
  duration: string;
  level: string;
  students: number;
  rating: number;
  imageUrl: string;
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
  type: 'video' | 'exercise' | 'quiz';
}

const CourseDetailPage: React.FC = () => {
  const { courseId } = useParams<{ courseId: string }>();

  // 模拟课程数据
  const courses: Record<string, Course> = {
    'python-basics': {
      id: 'python-basics',
      title: 'Python编程基础',
      description: '掌握Python核心语法、流程控制、数据结构和函数基础，为数据分析打下坚实基础。',
      modules: [
        {
          id: 'module-1',
          title: '核心语法',
          lessons: [
            { id: 'lesson-1', title: '变量与数据类型', duration: '30分钟', type: 'video' },
            { id: 'lesson-2', title: '运算符', duration: '25分钟', type: 'video' },
            { id: 'lesson-3', title: '输入与输出', duration: '20分钟', type: 'video' },
            { id: 'lesson-4', title: '注释与代码风格', duration: '15分钟', type: 'video' },
            { id: 'lesson-5', title: '核心语法练习', duration: '45分钟', type: 'exercise' }
          ]
        },
        {
          id: 'module-2',
          title: '流程控制',
          lessons: [
            { id: 'lesson-6', title: '条件判断', duration: '30分钟', type: 'video' },
            { id: 'lesson-7', title: '循环结构', duration: '35分钟', type: 'video' },
            { id: 'lesson-8', title: '循环控制', duration: '20分钟', type: 'video' },
            { id: 'lesson-9', title: '流程控制练习', duration: '45分钟', type: 'exercise' }
          ]
        },
        {
          id: 'module-3',
          title: '基本数据结构',
          lessons: [
            { id: 'lesson-10', title: '列表', duration: '40分钟', type: 'video' },
            { id: 'lesson-11', title: '元组', duration: '25分钟', type: 'video' },
            { id: 'lesson-12', title: '字典', duration: '40分钟', type: 'video' },
            { id: 'lesson-13', title: '集合', duration: '30分钟', type: 'video' },
            { id: 'lesson-14', title: '数据结构练习', duration: '60分钟', type: 'exercise' }
          ]
        },
        {
          id: 'module-4',
          title: '函数',
          lessons: [
            { id: 'lesson-15', title: '函数定义与调用', duration: '30分钟', type: 'video' },
            { id: 'lesson-16', title: '参数传递', duration: '40分钟', type: 'video' },
            { id: 'lesson-17', title: '返回值', duration: '25分钟', type: 'video' },
            { id: 'lesson-18', title: '变量作用域', duration: '30分钟', type: 'video' },
            { id: 'lesson-19', title: 'Lambda 匿名函数', duration: '20分钟', type: 'video' },
            { id: 'lesson-20', title: '函数练习', duration: '60分钟', type: 'exercise' },
            { id: 'lesson-21', title: '模块测验', duration: '45分钟', type: 'quiz' }
          ]
        }
      ],
      instructor: '张教授',
      duration: '12小时',
      level: '初级',
      students: 1200,
      rating: 4.8,
      imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Python%20programming%20basics%20course%20cover%20with%20code%20examples&image_size=square'
    },
    'python-advanced': {
      id: 'python-advanced',
      title: 'Python核心进阶',
      description: '学习文件操作、模块与包、面向对象编程和异常处理，提升Python编程能力。',
      modules: [
        {
          id: 'module-1',
          title: '文件与系统操作',
          lessons: [
            { id: 'lesson-1', title: '文件读写', duration: '35分钟', type: 'video' },
            { id: 'lesson-2', title: '文件和目录管理', duration: '30分钟', type: 'video' },
            { id: 'lesson-3', title: 'pathlib库', duration: '25分钟', type: 'video' },
            { id: 'lesson-4', title: '文件操作练习', duration: '45分钟', type: 'exercise' }
          ]
        },
        {
          id: 'module-2',
          title: '模块与包',
          lessons: [
            { id: 'lesson-5', title: '模块的导入', duration: '30分钟', type: 'video' },
            { id: 'lesson-6', title: '包的结构', duration: '25分钟', type: 'video' },
            { id: 'lesson-7', title: '标准库常用模块', duration: '40分钟', type: 'video' },
            { id: 'lesson-8', title: '虚拟环境管理', duration: '30分钟', type: 'video' },
            { id: 'lesson-9', title: '模块与包练习', duration: '45分钟', type: 'exercise' }
          ]
        },
        {
          id: 'module-3',
          title: '面向对象编程',
          lessons: [
            { id: 'lesson-10', title: '类与对象', duration: '40分钟', type: 'video' },
            { id: 'lesson-11', title: '属性与方法', duration: '45分钟', type: 'video' },
            { id: 'lesson-12', title: '封装', duration: '30分钟', type: 'video' },
            { id: 'lesson-13', title: '继承', duration: '40分钟', type: 'video' },
            { id: 'lesson-14', title: '多态', duration: '30分钟', type: 'video' },
            { id: 'lesson-15', title: '特殊方法', duration: '35分钟', type: 'video' },
            { id: 'lesson-16', title: '面向对象编程练习', duration: '60分钟', type: 'exercise' }
          ]
        },
        {
          id: 'module-4',
          title: '错误与异常处理',
          lessons: [
            { id: 'lesson-17', title: '异常处理结构', duration: '30分钟', type: 'video' },
            { id: 'lesson-18', title: '捕获特定异常', duration: '25分钟', type: 'video' },
            { id: 'lesson-19', title: '自定义异常', duration: '20分钟', type: 'video' },
            { id: 'lesson-20', title: '异常处理练习', duration: '45分钟', type: 'exercise' },
            { id: 'lesson-21', title: '模块测验', duration: '45分钟', type: 'quiz' }
          ]
        }
      ],
      instructor: '李老师',
      duration: '14小时',
      level: '中级',
      students: 950,
      rating: 4.9,
      imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Python%20advanced%20programming%20course%20cover%20with%20object%20oriented%20concepts&image_size=square'
    },
    'python-expert': {
      id: 'python-expert',
      title: '高级特性与工程实践',
      description: '掌握函数式编程、迭代器、生成器、装饰器和并发编程，提升Python编程的高级技巧。',
      modules: [
        {
          id: 'module-1',
          title: '函数式编程工具',
          lessons: [
            { id: 'lesson-1', title: '高阶函数', duration: '35分钟', type: 'video' },
            { id: 'lesson-2', title: '迭代工具', duration: '30分钟', type: 'video' },
            { id: 'lesson-3', title: '函数式编程练习', duration: '45分钟', type: 'exercise' }
          ]
        },
        {
          id: 'module-2',
          title: '迭代器与生成器',
          lessons: [
            { id: 'lesson-4', title: '可迭代对象与迭代器', duration: '30分钟', type: 'video' },
            { id: 'lesson-5', title: '生成器函数', duration: '35分钟', type: 'video' },
            { id: 'lesson-6', title: 'yield from语句', duration: '25分钟', type: 'video' },
            { id: 'lesson-7', title: '迭代器与生成器练习', duration: '45分钟', type: 'exercise' }
          ]
        },
        {
          id: 'module-3',
          title: '装饰器与上下文管理器',
          lessons: [
            { id: 'lesson-8', title: '装饰器原理', duration: '40分钟', type: 'video' },
            { id: 'lesson-9', title: '带参数装饰器', duration: '35分钟', type: 'video' },
            { id: 'lesson-10', title: '上下文管理器', duration: '30分钟', type: 'video' },
            { id: 'lesson-11', title: '装饰器与上下文管理器练习', duration: '50分钟', type: 'exercise' }
          ]
        },
        {
          id: 'module-4',
          title: '并发编程',
          lessons: [
            { id: 'lesson-12', title: '多进程', duration: '40分钟', type: 'video' },
            { id: 'lesson-13', title: '进程池', duration: '35分钟', type: 'video' },
            { id: 'lesson-14', title: '多线程与锁机制', duration: '30分钟', type: 'video' },
            { id: 'lesson-15', title: '并发编程练习', duration: '50分钟', type: 'exercise' }
          ]
        },
        {
          id: 'module-5',
          title: '元编程与内省',
          lessons: [
            { id: 'lesson-16', title: '反射机制', duration: '30分钟', type: 'video' },
            { id: 'lesson-17', title: 'inspect模块', duration: '25分钟', type: 'video' },
            { id: 'lesson-18', title: '元类简介', duration: '35分钟', type: 'video' },
            { id: 'lesson-19', title: '元编程练习', duration: '45分钟', type: 'exercise' },
            { id: 'lesson-20', title: '模块测验', duration: '45分钟', type: 'quiz' }
          ]
        }
      ],
      instructor: '王博士',
      duration: '16小时',
      level: '高级',
      students: 680,
      rating: 4.7,
      imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Python%20expert%20programming%20course%20cover%20with%20advanced%20concepts&image_size=square'
    },
    'python-applications': {
      id: 'python-applications',
      title: '专项技能与应用',
      description: '学习数据处理、可视化、文本处理、Web开发和自动化，掌握Python在各个领域的应用。',
      modules: [
        {
          id: 'module-1',
          title: '数据处理与分析',
          lessons: [
            { id: 'lesson-1', title: 'NumPy基础', duration: '40分钟', type: 'video' },
            { id: 'lesson-2', title: 'Pandas基础', duration: '45分钟', type: 'video' },
            { id: 'lesson-3', title: '数据处理练习', duration: '60分钟', type: 'exercise' }
          ]
        },
        {
          id: 'module-2',
          title: '数据可视化',
          lessons: [
            { id: 'lesson-4', title: 'Matplotlib基础', duration: '40分钟', type: 'video' },
            { id: 'lesson-5', title: 'Pyecharts/Plotly', duration: '35分钟', type: 'video' },
            { id: 'lesson-6', title: '数据可视化练习', duration: '50分钟', type: 'exercise' }
          ]
        },
        {
          id: 'module-3',
          title: '文本处理与正则表达式',
          lessons: [
            { id: 'lesson-7', title: '字符串常用方法', duration: '40分钟', type: 'video' },
            { id: 'lesson-8', title: '正则表达式基础', duration: '45分钟', type: 'video' },
            { id: 'lesson-9', title: '正则表达式高级技巧', duration: '35分钟', type: 'video' },
            { id: 'lesson-10', title: '文本处理练习', duration: '50分钟', type: 'exercise' }
          ]
        },
        {
          id: 'module-4',
          title: 'Web开发与网络编程',
          lessons: [
            { id: 'lesson-11', title: 'Flask/Django基础', duration: '45分钟', type: 'video' },
            { id: 'lesson-12', title: 'requests库', duration: '30分钟', type: 'video' },
            { id: 'lesson-13', title: 'API设计与调用', duration: '35分钟', type: 'video' },
            { id: 'lesson-14', title: 'Web开发练习', duration: '60分钟', type: 'exercise' }
          ]
        },
        {
          id: 'module-5',
          title: '自动化与脚本',
          lessons: [
            { id: 'lesson-15', title: '办公自动化', duration: '40分钟', type: 'video' },
            { id: 'lesson-16', title: '文件批量操作', duration: '35分钟', type: 'video' },
            { id: 'lesson-17', title: 'GUI开发', duration: '40分钟', type: 'video' },
            { id: 'lesson-18', title: '自动化练习', duration: '50分钟', type: 'exercise' },
            { id: 'lesson-19', title: '模块测验', duration: '45分钟', type: 'quiz' }
          ]
        }
      ],
      instructor: '刘教授',
      duration: '18小时',
      level: '中级到高级',
      students: 820,
      rating: 4.6,
      imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Python%20applications%20course%20cover%20with%20data%20analysis%20and%20automation&image_size=square'
    },
    'data-analysis': {
      id: 'data-analysis',
      title: '数据处理与分析',
      description: '学习NumPy和Pandas库，掌握数据处理、清洗和分析技能，为商务数据分析打下基础。',
      modules: [
        {
          id: 'module-1',
          title: 'NumPy基础',
          lessons: [
            { id: 'lesson-1', title: '多维数组', duration: '35分钟', type: 'video' },
            { id: 'lesson-2', title: '向量化运算', duration: '40分钟', type: 'video' },
            { id: 'lesson-3', title: '广播机制', duration: '30分钟', type: 'video' },
            { id: 'lesson-4', title: '索引切片', duration: '35分钟', type: 'video' },
            { id: 'lesson-5', title: 'NumPy练习', duration: '45分钟', type: 'exercise' }
          ]
        },
        {
          id: 'module-2',
          title: 'Pandas基础',
          lessons: [
            { id: 'lesson-6', title: 'Series和DataFrame', duration: '40分钟', type: 'video' },
            { id: 'lesson-7', title: '数据读取与写入', duration: '35分钟', type: 'video' },
            { id: 'lesson-8', title: '数据清洗', duration: '45分钟', type: 'video' },
            { id: 'lesson-9', title: '数据分析', duration: '40分钟', type: 'video' },
            { id: 'lesson-10', title: '分组统计', duration: '35分钟', type: 'video' },
            { id: 'lesson-11', title: 'Pandas练习', duration: '60分钟', type: 'exercise' },
            { id: 'lesson-12', title: '模块测验', duration: '45分钟', type: 'quiz' }
          ]
        }
      ],
      instructor: '王博士',
      duration: '10小时',
      level: '中级',
      students: 820,
      rating: 4.7,
      imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Data%20processing%20and%20analysis%20course%20cover%20with%20NumPy%20and%20Pandas&image_size=square'
    },
    'data-visualization': {
      id: 'data-visualization',
      title: '数据可视化',
      description: '学习Matplotlib和Pyecharts，创建美观、交互式的数据可视化，提升数据展示能力。',
      modules: [
        {
          id: 'module-1',
          title: 'Matplotlib基础',
          lessons: [
            { id: 'lesson-1', title: '基础绘图', duration: '40分钟', type: 'video' },
            { id: 'lesson-2', title: '折线图', duration: '30分钟', type: 'video' },
            { id: 'lesson-3', title: '柱状图', duration: '30分钟', type: 'video' },
            { id: 'lesson-4', title: '散点图', duration: '30分钟', type: 'video' },
            { id: 'lesson-5', title: 'Matplotlib练习', duration: '45分钟', type: 'exercise' }
          ]
        },
        {
          id: 'module-2',
          title: '交互式图表',
          lessons: [
            { id: 'lesson-6', title: 'Pyecharts基础', duration: '40分钟', type: 'video' },
            { id: 'lesson-7', title: 'Plotly基础', duration: '40分钟', type: 'video' },
            { id: 'lesson-8', title: '交互式图表练习', duration: '50分钟', type: 'exercise' },
            { id: 'lesson-9', title: '模块测验', duration: '45分钟', type: 'quiz' }
          ]
        }
      ],
      instructor: '刘教授',
      duration: '8小时',
      level: '中级',
      students: 750,
      rating: 4.6,
      imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Data%20visualization%20course%20cover%20with%20colorful%20charts%20and%20graphs&image_size=square'
    },
    'text-processing': {
      id: 'text-processing',
      title: '文本处理与正则表达式',
      description: '掌握字符串处理和正则表达式，用于文本分析和数据提取，提升文本处理能力。',
      modules: [
        {
          id: 'module-1',
          title: '字符串常用方法',
          lessons: [
            { id: 'lesson-1', title: '字符串基础操作', duration: '40分钟', type: 'video' },
            { id: 'lesson-2', title: '字符串高级方法', duration: '45分钟', type: 'video' },
            { id: 'lesson-3', title: '字符串练习', duration: '45分钟', type: 'exercise' }
          ]
        },
        {
          id: 'module-2',
          title: '正则表达式',
          lessons: [
            { id: 'lesson-4', title: '正则表达式语法', duration: '45分钟', type: 'video' },
            { id: 'lesson-5', title: 're模块函数', duration: '40分钟', type: 'video' },
            { id: 'lesson-6', title: '分组与零宽断言', duration: '35分钟', type: 'video' },
            { id: 'lesson-7', title: '正则表达式练习', duration: '50分钟', type: 'exercise' },
            { id: 'lesson-8', title: '模块测验', duration: '45分钟', type: 'quiz' }
          ]
        }
      ],
      instructor: '陈老师',
      duration: '8小时',
      level: '中级',
      students: 680,
      rating: 4.5,
      imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Text%20processing%20and%20regular%20expressions%20course%20cover&image_size=square'
    },
    'business-analysis': {
      id: 'business-analysis',
      title: '商务数据分析实战',
      description: '学习如何使用Python进行商务数据分析和决策支持，提升商务分析能力。',
      modules: [
        {
          id: 'module-1',
          title: '商务数据分析基础',
          lessons: [
            { id: 'lesson-1', title: '商务数据类型', duration: '30分钟', type: 'video' },
            { id: 'lesson-2', title: '数据收集与预处理', duration: '40分钟', type: 'video' },
            { id: 'lesson-3', title: '商务数据练习', duration: '45分钟', type: 'exercise' }
          ]
        },
        {
          id: 'module-2',
          title: '市场分析',
          lessons: [
            { id: 'lesson-4', title: '市场数据收集', duration: '35分钟', type: 'video' },
            { id: 'lesson-5', title: '市场趋势分析', duration: '40分钟', type: 'video' },
            { id: 'lesson-6', title: '市场分析练习', duration: '50分钟', type: 'exercise' }
          ]
        },
        {
          id: 'module-3',
          title: '销售预测',
          lessons: [
            { id: 'lesson-7', title: '销售数据处理', duration: '35分钟', type: 'video' },
            { id: 'lesson-8', title: '销售预测模型', duration: '45分钟', type: 'video' },
            { id: 'lesson-9', title: '销售预测练习', duration: '50分钟', type: 'exercise' }
          ]
        },
        {
          id: 'module-4',
          title: '决策支持',
          lessons: [
            { id: 'lesson-10', title: '数据驱动决策', duration: '35分钟', type: 'video' },
            { id: 'lesson-11', title: '决策支持系统', duration: '40分钟', type: 'video' },
            { id: 'lesson-12', title: '决策支持练习', duration: '50分钟', type: 'exercise' },
            { id: 'lesson-13', title: '模块测验', duration: '45分钟', type: 'quiz' }
          ]
        }
      ],
      instructor: '赵教授',
      duration: '12小时',
      level: '中级',
      students: 1050,
      rating: 4.9,
      imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Business%20data%20analysis%20course%20cover%20with%20business%20charts%20and%20reports&image_size=square'
    }
  };

  const course = courses[courseId || ''];

  if (!course) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-16">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-center mb-8">课程不存在</h1>
            <p className="text-gray-600 text-center">抱歉，您访问的课程不存在。</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        {/* 课程头部 */}
        <section className="bg-gray-100 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <div className="h-64 bg-gray-200 rounded-lg overflow-hidden">
                  <img src={course.imageUrl} alt={course.title} className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="md:w-2/3">
                <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
                <p className="text-gray-600 mb-6">{course.description}</p>
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center">
                    <svg className="h-5 w-5 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="h-5 w-5 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                    <span>{course.level}</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="h-5 w-5 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span>{course.students} 学生</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="h-5 w-5 text-yellow-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span>{course.rating}</span>
                  </div>
                </div>
                <div className="flex items-center mb-6">
                  <div className="h-12 w-12 rounded-full bg-gray-300 flex items-center justify-center">
                    <span className="text-gray-700 font-medium">{course.instructor.charAt(0)}</span>
                  </div>
                  <div className="ml-4">
                    <p className="font-medium">{course.instructor}</p>
                    <p className="text-sm text-gray-500">课程讲师</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <button className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex-1">
                    开始学习
                  </button>
                  <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100 transition-colors">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 课程模块 */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-8">课程内容</h2>
            {course.modules.map((module) => (
              <div key={module.id} className="mb-8">
                <h3 className="text-xl font-semibold mb-4">{module.title}</h3>
                <div className="border rounded-lg overflow-hidden">
                  {module.lessons.map((lesson) => (
                    <div key={lesson.id} className="border-b last:border-b-0 p-4 flex items-center justify-between">
                      <div className="flex items-center">
                        {lesson.type === 'video' && (
                          <svg className="h-5 w-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        )}
                        {lesson.type === 'exercise' && (
                          <svg className="h-5 w-5 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        )}
                        {lesson.type === 'quiz' && (
                          <svg className="h-5 w-5 text-purple-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        )}
                        <span>{lesson.title}</span>
                      </div>
                      <span className="text-gray-500 text-sm">{lesson.duration}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CourseDetailPage;