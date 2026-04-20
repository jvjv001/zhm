export interface Lesson {
  id: string;
  title: string;
  type: 'video' | 'text';
  duration: string;
  content: string;
}

export interface Exercise {
  id: string;
  title: string;
  type: 'code' | 'choice';
  questions: ExerciseQuestion[];
}

export interface ExerciseQuestion {
  id: string;
  question: string;
  options?: string[];
  answer: string;
  explanation?: string;
}

export interface Quiz {
  id: string;
  title: string;
  questions: QuizQuestion[];
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  answer: string;
  explanation?: string;
}

export interface Module {
  id: string;
  title: string;
  lessons: Lesson[];
  exercises: Exercise[];
  quizzes: Quiz[];
}

export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  duration: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  students: number;
  rating: number;
  imageUrl: string;
  modules: Module[];
  category: string;
}

export const courses: Course[] = [
  {
    id: 'python-data-analysis',
    title: 'Python数据分析',
    description: '从零开始学习Python编程，掌握数据分析的核心技能，包括NumPy、Pandas等库的使用。',
    instructor: '张教授',
    duration: '40小时',
    level: 'beginner',
    students: 1200,
    rating: 4.8,
    imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Python%20Data%20Analysis%20Course%20Cover%20professional&image_size=square',
    category: 'programming',
    modules: [
      {
        id: 'python-basics',
        title: 'Python基础入门',
        lessons: [
          {
            id: 'python-lesson-1',
            title: 'Python简介与环境搭建',
            type: 'text',
            duration: '15分钟',
            content: 'Python是一种高级编程语言，被广泛应用于数据分析、人工智能等领域。本课程将带你入门Python编程。',
          },
          {
            id: 'python-lesson-2',
            title: '变量与数据类型',
            type: 'text',
            duration: '20分钟',
            content: 'Python有多种数据类型，包括整数、浮点数、字符串、布尔值等。学会使用变量存储数据是编程的第一步。',
          },
        ],
        exercises: [
          {
            id: 'python-exercise-1',
            title: '基础语法练习',
            type: 'choice',
            questions: [
              {
                id: 'q1',
                question: 'Python中用于输出的函数是？',
                options: ['echo()', 'print()', 'log()', 'console.log()'],
                answer: 'print()',
                explanation: 'print()函数是Python中最常用的输出函数。',
              },
              {
                id: 'q2',
                question: 'Python中注释使用什么符号？',
                options: ['//', '/*', '#', '--'],
                answer: '#',
                explanation: 'Python使用#符号来添加单行注释。',
              },
            ],
          },
        ],
        quizzes: [
          {
            id: 'python-quiz-1',
            title: 'Python基础测验',
            questions: [
              {
                id: 'quiz1',
                question: '以下哪个不是Python的数据类型？',
                options: ['int', 'string', 'float', 'char'],
                answer: 'char',
                explanation: 'Python中没有char类型，单字符也是字符串。',
              },
              {
                id: 'quiz2',
                question: 'Python中用于定义函数的关键字是？',
                options: ['function', 'def', 'func', 'fn'],
                answer: 'def',
                explanation: 'Python使用def关键字来定义函数。',
              },
              {
                id: 'quiz3',
                question: '以下哪个是正确的列表定义？',
                options: ['list = (1,2,3)', 'list = {1,2,3}', 'list = [1,2,3]', 'list = 1,2,3'],
                answer: 'list = [1,2,3]',
                explanation: 'Python使用方括号[]来定义列表。',
              },
            ],
          },
        ],
      },
      {
        id: 'numpy-pandas',
        title: 'NumPy与Pandas',
        lessons: [
          {
            id: 'numpy-lesson-1',
            title: 'NumPy简介',
            type: 'text',
            duration: '25分钟',
            content: 'NumPy是Python科学计算的核心库，提供了强大的数组操作功能。',
          },
        ],
        exercises: [
          {
            id: 'numpy-exercise-1',
            title: 'NumPy数组操作',
            type: 'choice',
            questions: [
              {
                id: 'np1',
                question: 'NumPy数组使用什么函数创建？',
                options: ['numpy.array()', 'numpy.list()', 'numpy.create()', 'numpy.make()'],
                answer: 'numpy.array()',
                explanation: 'numpy.array()是创建NumPy数组的主要函数。',
              },
            ],
          },
        ],
        quizzes: [
          {
            id: 'numpy-quiz-1',
            title: 'NumPy测验',
            questions: [
              {
                id: 'npq1',
                question: 'NumPy的主要数据结构是什么？',
                options: ['List', 'Array', 'DataFrame', 'Matrix'],
                answer: 'Array',
                explanation: 'NumPy的核心是多维数组对象ndarray。',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'excel-business-statistics',
    title: 'Excel商务统计',
    description: '学习使用Excel进行数据分析和统计，掌握常用的函数、图表和数据透视表等功能。',
    instructor: '李老师',
    duration: '30小时',
    level: 'beginner',
    students: 950,
    rating: 4.7,
    imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Excel%20Business%20Statistics%20Course%20Cover%20professional&image_size=square',
    category: 'excel',
    modules: [
      {
        id: 'excel-basics',
        title: 'Excel基础',
        lessons: [
          {
            id: 'excel-lesson-1',
            title: 'Excel界面与基本操作',
            type: 'text',
            duration: '20分钟',
            content: '熟悉Excel的界面布局，掌握单元格、工作表的基本操作。',
          },
        ],
        exercises: [
          {
            id: 'excel-exercise-1',
            title: 'Excel操作练习',
            type: 'choice',
            questions: [
              {
                id: 'e1',
                question: 'Excel中，公式通常以什么符号开始？',
                options: ['=', '+', '@', '#'],
                answer: '=',
                explanation: 'Excel公式以等号=开头。',
              },
            ],
          },
        ],
        quizzes: [
          {
            id: 'excel-quiz-1',
            title: 'Excel基础测验',
            questions: [
              {
                id: 'eq1',
                question: 'Excel中求和的函数是？',
                options: ['SUM', 'ADD', 'TOTAL', 'COUNT'],
                answer: 'SUM',
                explanation: 'SUM函数用于对单元格区域求和。',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'sql',
    title: 'SQL数据库',
    description: '学习SQL语言，掌握数据库查询、插入、更新、删除等操作，为数据分析打下基础。',
    instructor: '王博士',
    duration: '35小时',
    level: 'intermediate',
    students: 820,
    rating: 4.9,
    imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=SQL%20Database%20Course%20Cover%20professional&image_size=square',
    category: 'database',
    modules: [
      {
        id: 'sql-basics',
        title: 'SQL基础',
        lessons: [
          {
            id: 'sql-lesson-1',
            title: 'SQL简介',
            type: 'text',
            duration: '15分钟',
            content: 'SQL（Structured Query Language）是用于管理关系数据库的标准语言。',
          },
        ],
        exercises: [
          {
            id: 'sql-exercise-1',
            title: 'SQL查询练习',
            type: 'choice',
            questions: [
              {
                id: 's1',
                question: 'SQL中用于查询数据的语句是？',
                options: ['GET', 'SELECT', 'FETCH', 'QUERY'],
                answer: 'SELECT',
                explanation: 'SELECT是SQL中最常用的查询语句。',
              },
            ],
          },
        ],
        quizzes: [
          {
            id: 'sql-quiz-1',
            title: 'SQL基础测验',
            questions: [
              {
                id: 'sq1',
                question: 'SQL中用于筛选数据的子句是？',
                options: ['WHERE', 'IF', 'FILTER', 'CONDITION'],
                answer: 'WHERE',
                explanation: 'WHERE子句用于指定查询条件。',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'data-visualization',
    title: '数据可视化',
    description: '学习使用Matplotlib、Seaborn、Plotly等工具创建美观的数据可视化图表。',
    instructor: '刘教授',
    duration: '28小时',
    level: 'intermediate',
    students: 750,
    rating: 4.6,
    imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Data%20Visualization%20Course%20Cover%20professional%20charts&image_size=square',
    category: 'visualization',
    modules: [
      {
        id: 'viz-basics',
        title: '数据可视化基础',
        lessons: [
          {
            id: 'viz-lesson-1',
            title: '数据可视化简介',
            type: 'text',
            duration: '20分钟',
            content: '数据可视化是将数据转化为图表的艺术，帮助我们更好地理解数据。',
          },
        ],
        exercises: [
          {
            id: 'viz-exercise-1',
            title: '图表类型选择',
            type: 'choice',
            questions: [
              {
                id: 'v1',
                question: '适合展示趋势变化的图表是？',
                options: ['饼图', '折线图', '散点图', '雷达图'],
                answer: '折线图',
                explanation: '折线图非常适合展示数据随时间的变化趋势。',
              },
            ],
          },
        ],
        quizzes: [
          {
            id: 'viz-quiz-1',
            title: '可视化基础测验',
            questions: [
              {
                id: 'vq1',
                question: '以下哪个库是Python中最流行的数据可视化库？',
                options: ['NumPy', 'Pandas', 'Matplotlib', 'Scikit-learn'],
                answer: 'Matplotlib',
                explanation: 'Matplotlib是Python最基础且流行的数据可视化库。',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'business-practice',
    title: '商务实战',
    description: '通过真实的商业案例，综合应用所学知识，解决实际的商务数据分析问题。',
    instructor: '赵教授',
    duration: '45小时',
    level: 'advanced',
    students: 1050,
    rating: 4.9,
    imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Business%20Data%20Analysis%20Practice%20Course%20Cover%20professional&image_size=square',
    category: 'business',
    modules: [
      {
        id: 'business-case',
        title: '商业案例分析',
        lessons: [
          {
            id: 'business-lesson-1',
            title: '商业数据分析流程',
            type: 'text',
            duration: '25分钟',
            content: '了解商业数据分析的完整流程，从问题定义到最终报告。',
          },
        ],
        exercises: [
          {
            id: 'business-exercise-1',
            title: '案例分析练习',
            type: 'choice',
            questions: [
              {
                id: 'b1',
                question: '商业数据分析的第一步是什么？',
                options: ['数据收集', '问题定义', '数据清洗', '建模分析'],
                answer: '问题定义',
                explanation: '明确分析目标和问题是数据分析的第一步。',
              },
            ],
          },
        ],
        quizzes: [
          {
            id: 'business-quiz-1',
            title: '商务实战测验',
            questions: [
              {
                id: 'bq1',
                question: '以下哪项不是数据分析的主要步骤？',
                options: ['数据收集', '数据删除', '数据清洗', '数据可视化'],
                answer: '数据删除',
                explanation: '数据删除不是数据分析的主要步骤。',
              },
            ],
          },
        ],
      },
    ],
  },
];

export function getCourseById(courseId: string): Course | undefined {
  return courses.find((course) => course.id === courseId);
}

export function getModuleById(courseId: string, moduleId: string): Module | undefined {
  const course = getCourseById(courseId);
  return course?.modules.find((module) => module.id === moduleId);
}
