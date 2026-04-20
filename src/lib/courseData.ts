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
            content: 'Python是一种高级编程语言，被广泛应用于数据分析、人工智能等领域。本课程将带你入门Python编程，包括安装Python环境、配置开发工具等。',
          },
          {
            id: 'python-lesson-2',
            title: '变量与数据类型',
            type: 'text',
            duration: '20分钟',
            content: 'Python有多种数据类型，包括整数、浮点数、字符串、布尔值等。学会使用变量存储数据是编程的第一步。',
          },
          {
            id: 'python-lesson-3',
            title: '控制流与循环',
            type: 'text',
            duration: '25分钟',
            content: '学习Python的条件语句和循环结构，包括if-else、for循环和while循环。',
          },
          {
            id: 'python-lesson-4',
            title: '函数与模块',
            type: 'text',
            duration: '30分钟',
            content: '掌握函数的定义和调用，以及如何使用模块组织代码。',
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
              {
                id: 'q3',
                question: 'Python中表示空值的关键字是？',
                options: ['null', 'nil', 'none', 'NaN'],
                answer: 'none',
                explanation: 'Python使用None表示空值。',
              },
            ],
          },
          {
            id: 'python-exercise-2',
            title: '控制流练习',
            type: 'choice',
            questions: [
              {
                id: 'q4',
                question: 'Python中用于多条件判断的关键字是？',
                options: ['if-elif-else', 'switch-case', 'select-case', 'if-case'],
                answer: 'if-elif-else',
                explanation: 'Python使用if-elif-else结构进行多条件判断。',
              },
              {
                id: 'q5',
                question: 'Python中用于遍历序列的循环是？',
                options: ['for', 'while', 'do-while', 'foreach'],
                answer: 'for',
                explanation: 'Python使用for循环遍历序列。',
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
              {
                id: 'quiz4',
                question: 'Python中用于导入模块的关键字是？',
                options: ['import', 'include', 'require', 'load'],
                answer: 'import',
                explanation: 'Python使用import关键字导入模块。',
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
            content: 'NumPy是Python科学计算的核心库，提供了强大的数组操作功能。学习NumPy的基本概念和使用方法。',
          },
          {
            id: 'numpy-lesson-2',
            title: 'NumPy数组操作',
            type: 'text',
            duration: '30分钟',
            content: '掌握NumPy数组的创建、索引、切片和基本运算。',
          },
          {
            id: 'pandas-lesson-1',
            title: 'Pandas简介',
            type: 'text',
            duration: '25分钟',
            content: 'Pandas是Python中用于数据分析的重要库，提供了DataFrame和Series等数据结构。',
          },
          {
            id: 'pandas-lesson-2',
            title: '数据处理与分析',
            type: 'text',
            duration: '35分钟',
            content: '学习使用Pandas进行数据读取、清洗、转换和分析。',
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
              {
                id: 'np2',
                question: 'NumPy中用于创建全零数组的函数是？',
                options: ['zeros()', 'empty()', 'ones()', 'full()'],
                answer: 'zeros()',
                explanation: 'zeros()函数用于创建全零数组。',
              },
            ],
          },
          {
            id: 'pandas-exercise-1',
            title: 'Pandas数据处理',
            type: 'choice',
            questions: [
              {
                id: 'pd1',
                question: 'Pandas中用于读取CSV文件的函数是？',
                options: ['read_csv()', 'load_csv()', 'import_csv()', 'fetch_csv()'],
                answer: 'read_csv()',
                explanation: 'read_csv()函数用于读取CSV文件。',
              },
              {
                id: 'pd2',
                question: 'Pandas中用于查看数据前几行的方法是？',
                options: ['head()', 'top()', 'first()', 'view()'],
                answer: 'head()',
                explanation: 'head()方法用于查看数据前几行。',
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
              {
                id: 'npq2',
                question: 'NumPy中用于数组形状的属性是？',
                options: ['shape', 'size', 'dim', 'length'],
                answer: 'shape',
                explanation: 'shape属性用于查看数组的形状。',
              },
            ],
          },
          {
            id: 'pandas-quiz-1',
            title: 'Pandas测验',
            questions: [
              {
                id: 'pdq1',
                question: 'Pandas中最常用的数据结构是？',
                options: ['Array', 'List', 'DataFrame', 'Series'],
                answer: 'DataFrame',
                explanation: 'DataFrame是Pandas中最常用的数据结构，类似于表格。',
              },
              {
                id: 'pdq2',
                question: 'Pandas中用于缺失值处理的方法是？',
                options: ['dropna()', 'remove_na()', 'delete_na()', 'clean_na()'],
                answer: 'dropna()',
                explanation: 'dropna()方法用于处理缺失值。',
              },
            ],
          },
        ],
      },
      {
        id: 'data-analysis',
        title: '数据分析实战',
        lessons: [
          {
            id: 'analysis-lesson-1',
            title: '数据分析流程',
            type: 'text',
            duration: '20分钟',
            content: '了解数据分析的完整流程，包括数据收集、清洗、分析和可视化。',
          },
          {
            id: 'analysis-lesson-2',
            title: '描述性统计分析',
            type: 'text',
            duration: '30分钟',
            content: '学习使用Python进行描述性统计分析，包括均值、中位数、标准差等。',
          },
          {
            id: 'analysis-lesson-3',
            title: '数据可视化基础',
            type: 'text',
            duration: '25分钟',
            content: '学习使用Matplotlib创建基本的图表，如折线图、柱状图和散点图。',
          },
          {
            id: 'analysis-lesson-4',
            title: 'Python爬虫实战',
            type: 'text',
            duration: '35分钟',
            content: '学习使用Python构建爬虫，收集网络数据并进行分析。',
          },
          {
            id: 'analysis-lesson-5',
            title: '数据脱敏技术',
            type: 'text',
            duration: '30分钟',
            content: '学习使用Python实现数据脱敏，保护敏感信息。',
          },
          {
            id: 'analysis-lesson-6',
            title: '线性关系可视化',
            type: 'text',
            duration: '30分钟',
            content: '学习使用Python可视化线性关系，分析变量之间的相关性。',
          },
        ],
        exercises: [
          {
            id: 'analysis-exercise-1',
            title: '数据分析练习',
            type: 'choice',
            questions: [
              {
                id: 'a1',
                question: '以下哪个不是描述性统计指标？',
                options: ['均值', '中位数', '标准差', '回归系数'],
                answer: '回归系数',
                explanation: '回归系数是推断性统计中的指标，不是描述性统计指标。',
              },
              {
                id: 'a2',
                question: '用于展示数据分布的图表是？',
                options: ['折线图', '柱状图', '箱线图', '散点图'],
                answer: '箱线图',
                explanation: '箱线图可以展示数据的分布情况，包括中位数、四分位数等。',
              },
            ],
          },
          {
            id: 'analysis-exercise-2',
            title: 'Python实战练习',
            type: 'choice',
            questions: [
              {
                id: 'a3',
                question: 'Python中用于网络爬虫的库是？',
                options: ['requests', 'numpy', 'pandas', 'matplotlib'],
                answer: 'requests',
                explanation: 'requests库用于发送HTTP请求，是爬虫的基础库。',
              },
              {
                id: 'a4',
                question: '以下哪个不是数据脱敏的方法？',
                options: ['替换', '加密', '删除', '复制'],
                answer: '复制',
                explanation: '复制不是数据脱敏的方法，其他选项都是常见的数据脱敏方法。',
              },
            ],
          },
        ],
        quizzes: [
          {
            id: 'analysis-quiz-1',
            title: '数据分析测验',
            questions: [
              {
                id: 'aq1',
                question: '数据分析的第一步是？',
                options: ['数据收集', '问题定义', '数据清洗', '数据分析'],
                answer: '问题定义',
                explanation: '明确分析目标和问题是数据分析的第一步。',
              },
              {
                id: 'aq2',
                question: '用于展示两个变量之间关系的图表是？',
                options: ['折线图', '柱状图', '散点图', '饼图'],
                answer: '散点图',
                explanation: '散点图可以展示两个变量之间的关系。',
              },
              {
                id: 'aq3',
                question: 'Python中用于解析HTML的库是？',
                options: ['beautifulsoup4', 'requests', 'numpy', 'pandas'],
                answer: 'beautifulsoup4',
                explanation: 'beautifulsoup4库用于解析HTML和XML文档。',
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
            content: '熟悉Excel的界面布局，掌握单元格、工作表的基本操作，包括选择、复制、粘贴等。',
          },
          {
            id: 'excel-lesson-2',
            title: 'Excel公式与函数',
            type: 'text',
            duration: '30分钟',
            content: '学习Excel的基本公式和常用函数，如SUM、AVERAGE、MAX、MIN等。',
          },
          {
            id: 'excel-lesson-3',
            title: '单元格格式设置',
            type: 'text',
            duration: '25分钟',
            content: '掌握Excel的单元格格式设置，包括数字格式、日期格式、对齐方式等。',
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
              {
                id: 'e2',
                question: 'Excel中用于计算平均值的函数是？',
                options: ['AVG', 'AVERAGE', 'MEAN', 'AVE'],
                answer: 'AVERAGE',
                explanation: 'AVERAGE函数用于计算平均值。',
              },
            ],
          },
          {
            id: 'excel-exercise-2',
            title: '公式应用练习',
            type: 'choice',
            questions: [
              {
                id: 'e3',
                question: 'Excel中用于计算最大值的函数是？',
                options: ['MAX', 'MAXIMUM', 'HIGH', 'TOP'],
                answer: 'MAX',
                explanation: 'MAX函数用于计算最大值。',
              },
              {
                id: 'e4',
                question: 'Excel中用于计数的函数是？',
                options: ['COUNT', 'NUM', 'TOTAL', 'SUM'],
                answer: 'COUNT',
                explanation: 'COUNT函数用于计数。',
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
              {
                id: 'eq2',
                question: 'Excel中用于查找的函数是？',
                options: ['FIND', 'SEARCH', 'LOOKUP', 'LOCATE'],
                answer: 'LOOKUP',
                explanation: 'LOOKUP函数用于查找数据。',
              },
              {
                id: 'eq3',
                question: 'Excel中用于条件判断的函数是？',
                options: ['IF', 'CONDITION', 'CASE', 'WHEN'],
                answer: 'IF',
                explanation: 'IF函数用于条件判断。',
              },
            ],
          },
        ],
      },
      {
        id: 'excel-advanced',
        title: 'Excel高级功能',
        lessons: [
          {
            id: 'excel-lesson-4',
            title: '数据透视表',
            type: 'text',
            duration: '35分钟',
            content: '学习使用数据透视表进行数据汇总和分析。',
          },
          {
            id: 'excel-lesson-5',
            title: '图表制作',
            type: 'text',
            duration: '30分钟',
            content: '掌握Excel的图表制作功能，包括柱状图、折线图、饼图等。',
          },
          {
            id: 'excel-lesson-6',
            title: '高级函数',
            type: 'text',
            duration: '40分钟',
            content: '学习Excel的高级函数，如VLOOKUP、INDEX、MATCH等。',
          },
        ],
        exercises: [
          {
            id: 'excel-exercise-3',
            title: '数据透视表练习',
            type: 'choice',
            questions: [
              {
                id: 'e5',
                question: '数据透视表的主要作用是？',
                options: ['数据录入', '数据汇总分析', '数据可视化', '数据存储'],
                answer: '数据汇总分析',
                explanation: '数据透视表主要用于数据汇总和分析。',
              },
              {
                id: 'e6',
                question: '创建数据透视表的快捷键是？',
                options: ['Alt+N+V', 'Ctrl+P', 'Alt+D+P', 'Ctrl+T'],
                answer: 'Alt+N+V',
                explanation: '在Excel中，创建数据透视表的快捷键是Alt+N+V。',
              },
            ],
          },
        ],
        quizzes: [
          {
            id: 'excel-quiz-2',
            title: 'Excel高级功能测验',
            questions: [
              {
                id: 'eq4',
                question: 'VLOOKUP函数的作用是？',
                options: ['垂直查找', '水平查找', '条件判断', '数据汇总'],
                answer: '垂直查找',
                explanation: 'VLOOKUP函数用于垂直查找数据。',
              },
              {
                id: 'eq5',
                question: 'Excel中用于制作图表的选项在哪个选项卡？',
                options: ['开始', '插入', '数据', '公式'],
                answer: '插入',
                explanation: '图表选项在插入选项卡中。',
              },
            ],
          },
        ],
      },
      {
        id: 'excel-statistics',
        title: 'Excel商务统计',
        lessons: [
          {
            id: 'excel-lesson-7',
            title: '描述性统计',
            type: 'text',
            duration: '30分钟',
            content: '学习使用Excel进行描述性统计分析，包括均值、中位数、标准差等。',
          },
          {
            id: 'excel-lesson-8',
            title: '相关与回归分析',
            type: 'text',
            duration: '40分钟',
            content: '学习使用Excel进行相关分析和线性回归分析。',
          },
          {
            id: 'excel-lesson-9',
            title: '假设检验',
            type: 'text',
            duration: '35分钟',
            content: '学习使用Excel进行假设检验，如t检验、方差分析等。',
          },
        ],
        exercises: [
          {
            id: 'excel-exercise-4',
            title: '统计分析练习',
            type: 'choice',
            questions: [
              {
                id: 'e7',
                question: 'Excel中用于计算标准差的函数是？',
                options: ['STD', 'STDEV', 'SD', 'DEV'],
                answer: 'STDEV',
                explanation: 'STDEV函数用于计算标准差。',
              },
              {
                id: 'e8',
                question: 'Excel中用于计算相关系数的函数是？',
                options: ['CORR', 'CORREL', 'RELATE', 'R'],
                answer: 'CORREL',
                explanation: 'CORREL函数用于计算相关系数。',
              },
            ],
          },
        ],
        quizzes: [
          {
            id: 'excel-quiz-3',
            title: 'Excel商务统计测验',
            questions: [
              {
                id: 'eq6',
                question: '描述性统计不包括以下哪项？',
                options: ['均值', '中位数', '标准差', '回归系数'],
                answer: '回归系数',
                explanation: '回归系数是推断性统计中的指标，不是描述性统计指标。',
              },
              {
                id: 'eq7',
                question: 'Excel中用于线性回归分析的工具在哪个选项卡？',
                options: ['数据', '分析', '工具', '统计'],
                answer: '数据',
                explanation: '线性回归分析工具在数据选项卡中。',
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
            content: 'SQL（Structured Query Language）是用于管理关系数据库的标准语言，学习SQL的基本概念和使用场景。',
          },
          {
            id: 'sql-lesson-2',
            title: 'SELECT语句',
            type: 'text',
            duration: '30分钟',
            content: '学习使用SELECT语句查询数据，包括基本查询、列选择、别名等。',
          },
          {
            id: 'sql-lesson-3',
            title: 'WHERE子句',
            type: 'text',
            duration: '25分钟',
            content: '学习使用WHERE子句筛选数据，包括比较运算符、逻辑运算符等。',
          },
          {
            id: 'sql-lesson-4',
            title: '排序与分组',
            type: 'text',
            duration: '30分钟',
            content: '学习使用ORDER BY排序数据，使用GROUP BY分组数据。',
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
              {
                id: 's2',
                question: 'SQL中用于选择所有列的符号是？',
                options: ['*', 'ALL', 'EVERY', 'TOTAL'],
                answer: '*',
                explanation: '*符号用于选择所有列。',
              },
            ],
          },
          {
            id: 'sql-exercise-2',
            title: 'WHERE子句练习',
            type: 'choice',
            questions: [
              {
                id: 's3',
                question: 'SQL中用于表示不等于的运算符是？',
                options: ['!=', '<>', 'NOT', 'NE'],
                answer: '<>',
                explanation: '<>运算符用于表示不等于。',
              },
              {
                id: 's4',
                question: 'SQL中用于逻辑与的运算符是？',
                options: ['AND', 'OR', 'NOT', 'XOR'],
                answer: 'AND',
                explanation: 'AND运算符用于逻辑与操作。',
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
              {
                id: 'sq2',
                question: 'SQL中用于排序的子句是？',
                options: ['ORDER', 'SORT', 'ORDER BY', 'SORT BY'],
                answer: 'ORDER BY',
                explanation: 'ORDER BY子句用于排序数据。',
              },
              {
                id: 'sq3',
                question: 'SQL中用于分组的子句是？',
                options: ['GROUP', 'GROUP BY', 'BY GROUP', 'AGGREGATE'],
                answer: 'GROUP BY',
                explanation: 'GROUP BY子句用于分组数据。',
              },
            ],
          },
        ],
      },
      {
        id: 'sql-advanced',
        title: 'SQL高级查询',
        lessons: [
          {
            id: 'sql-lesson-5',
            title: '连接查询',
            type: 'text',
            duration: '35分钟',
            content: '学习使用JOIN语句进行表连接，包括INNER JOIN、LEFT JOIN、RIGHT JOIN等。',
          },
          {
            id: 'sql-lesson-6',
            title: '子查询',
            type: 'text',
            duration: '30分钟',
            content: '学习使用子查询，包括标量子查询、列子查询、行子查询等。',
          },
          {
            id: 'sql-lesson-7',
            title: '聚合函数',
            type: 'text',
            duration: '25分钟',
            content: '学习使用聚合函数，如COUNT、SUM、AVG、MAX、MIN等。',
          },
        ],
        exercises: [
          {
            id: 'sql-exercise-3',
            title: '连接查询练习',
            type: 'choice',
            questions: [
              {
                id: 's5',
                question: 'SQL中最常用的连接类型是？',
                options: ['INNER JOIN', 'LEFT JOIN', 'RIGHT JOIN', 'FULL JOIN'],
                answer: 'INNER JOIN',
                explanation: 'INNER JOIN是最常用的连接类型，只返回两个表中匹配的行。',
              },
              {
                id: 's6',
                question: 'SQL中用于连接表的关键字是？',
                options: ['JOIN', 'CONNECT', 'LINK', 'UNITE'],
                answer: 'JOIN',
                explanation: 'JOIN关键字用于连接表。',
              },
            ],
          },
        ],
        quizzes: [
          {
            id: 'sql-quiz-2',
            title: 'SQL高级查询测验',
            questions: [
              {
                id: 'sq4',
                question: 'SQL中用于计算行数的聚合函数是？',
                options: ['SUM', 'AVG', 'COUNT', 'TOTAL'],
                answer: 'COUNT',
                explanation: 'COUNT函数用于计算行数。',
              },
              {
                id: 'sq5',
                question: 'SQL中用于从多个表中查询数据的操作是？',
                options: ['连接', '子查询', '联合', '聚合'],
                answer: '连接',
                explanation: '连接操作用于从多个表中查询数据。',
              },
            ],
          },
        ],
      },
      {
        id: 'sql-dml',
        title: 'SQL数据操作',
        lessons: [
          {
            id: 'sql-lesson-8',
            title: 'INSERT语句',
            type: 'text',
            duration: '20分钟',
            content: '学习使用INSERT语句向表中插入数据。',
          },
          {
            id: 'sql-lesson-9',
            title: 'UPDATE语句',
            type: 'text',
            duration: '25分钟',
            content: '学习使用UPDATE语句更新表中的数据。',
          },
          {
            id: 'sql-lesson-10',
            title: 'DELETE语句',
            type: 'text',
            duration: '20分钟',
            content: '学习使用DELETE语句删除表中的数据。',
          },
        ],
        exercises: [
          {
            id: 'sql-exercise-4',
            title: '数据操作练习',
            type: 'choice',
            questions: [
              {
                id: 's7',
                question: 'SQL中用于插入数据的语句是？',
                options: ['INSERT', 'ADD', 'CREATE', 'PUT'],
                answer: 'INSERT',
                explanation: 'INSERT语句用于向表中插入数据。',
              },
              {
                id: 's8',
                question: 'SQL中用于更新数据的语句是？',
                options: ['UPDATE', 'MODIFY', 'CHANGE', 'ALTER'],
                answer: 'UPDATE',
                explanation: 'UPDATE语句用于更新表中的数据。',
              },
            ],
          },
        ],
        quizzes: [
          {
            id: 'sql-quiz-3',
            title: 'SQL数据操作测验',
            questions: [
              {
                id: 'sq6',
                question: 'SQL中用于删除数据的语句是？',
                options: ['DELETE', 'REMOVE', 'DROP', 'ERASE'],
                answer: 'DELETE',
                explanation: 'DELETE语句用于删除表中的数据。',
              },
              {
                id: 'sq7',
                question: 'SQL中用于删除表的语句是？',
                options: ['DELETE TABLE', 'DROP TABLE', 'REMOVE TABLE', 'ERASE TABLE'],
                answer: 'DROP TABLE',
                explanation: 'DROP TABLE语句用于删除表。',
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
            content: '数据可视化是将数据转化为图表的艺术，帮助我们更好地理解数据，学习数据可视化的基本概念和重要性。',
          },
          {
            id: 'viz-lesson-2',
            title: 'Matplotlib基础',
            type: 'text',
            duration: '30分钟',
            content: '学习Matplotlib的基本使用方法，包括创建图表、设置标题、坐标轴等。',
          },
          {
            id: 'viz-lesson-3',
            title: '常见图表类型',
            type: 'text',
            duration: '35分钟',
            content: '学习常见的图表类型，如折线图、柱状图、饼图、散点图等，以及它们的适用场景。',
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
              {
                id: 'v2',
                question: '适合展示部分与整体关系的图表是？',
                options: ['折线图', '柱状图', '饼图', '散点图'],
                answer: '饼图',
                explanation: '饼图适合展示部分与整体的关系。',
              },
            ],
          },
          {
            id: 'viz-exercise-2',
            title: 'Matplotlib练习',
            type: 'choice',
            questions: [
              {
                id: 'v3',
                question: 'Matplotlib中用于创建图表的函数是？',
                options: ['plot()', 'chart()', 'graph()', 'figure()'],
                answer: 'plot()',
                explanation: 'plot()函数用于创建图表。',
              },
              {
                id: 'v4',
                question: 'Matplotlib中用于设置标题的函数是？',
                options: ['title()', 'set_title()', 'heading()', 'label()'],
                answer: 'title()',
                explanation: 'title()函数用于设置图表标题。',
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
              {
                id: 'vq2',
                question: '适合展示两个变量之间关系的图表是？',
                options: ['折线图', '柱状图', '散点图', '饼图'],
                answer: '散点图',
                explanation: '散点图适合展示两个变量之间的关系。',
              },
              {
                id: 'vq3',
                question: 'Matplotlib中用于创建子图的函数是？',
                options: ['subplot()', 'subfigure()', 'subchart()', 'subgraph()'],
                answer: 'subplot()',
                explanation: 'subplot()函数用于创建子图。',
              },
            ],
          },
        ],
      },
      {
        id: 'viz-advanced',
        title: '高级数据可视化',
        lessons: [
          {
            id: 'viz-lesson-4',
            title: 'Seaborn库',
            type: 'text',
            duration: '35分钟',
            content: '学习使用Seaborn库创建更美观的统计图表。',
          },
          {
            id: 'viz-lesson-5',
            title: 'Plotly库',
            type: 'text',
            duration: '30分钟',
            content: '学习使用Plotly库创建交互式数据可视化。',
          },
          {
            id: 'viz-lesson-6',
            title: '数据可视化最佳实践',
            type: 'text',
            duration: '25分钟',
            content: '学习数据可视化的最佳实践，包括颜色选择、标签设置、图表布局等。',
          },
        ],
        exercises: [
          {
            id: 'viz-exercise-3',
            title: 'Seaborn练习',
            type: 'choice',
            questions: [
              {
                id: 'v5',
                question: 'Seaborn是基于哪个库构建的？',
                options: ['NumPy', 'Pandas', 'Matplotlib', 'Scikit-learn'],
                answer: 'Matplotlib',
                explanation: 'Seaborn是基于Matplotlib构建的高级数据可视化库。',
              },
              {
                id: 'v6',
                question: 'Seaborn中用于创建热力图的函数是？',
                options: ['heatmap()', 'heat()', 'map()', 'heat_plot()'],
                answer: 'heatmap()',
                explanation: 'heatmap()函数用于创建热力图。',
              },
            ],
          },
        ],
        quizzes: [
          {
            id: 'viz-quiz-2',
            title: '高级数据可视化测验',
            questions: [
              {
                id: 'vq4',
                question: '以下哪个库可以创建交互式图表？',
                options: ['Matplotlib', 'Seaborn', 'Plotly', 'Pandas'],
                answer: 'Plotly',
                explanation: 'Plotly可以创建交互式图表。',
              },
              {
                id: 'vq5',
                question: '数据可视化的主要目的是？',
                options: ['美化数据', '存储数据', '分析数据', '展示数据'],
                answer: '展示数据',
                explanation: '数据可视化的主要目的是展示数据，帮助人们更好地理解数据。',
              },
            ],
          },
        ],
      },
      {
        id: 'viz-business',
        title: '商务数据可视化',
        lessons: [
          {
            id: 'viz-lesson-7',
            title: '商务图表类型',
            type: 'text',
            duration: '30分钟',
            content: '学习适合商务场景的图表类型，如销售趋势图、市场份额图、财务报表图等。',
          },
          {
            id: 'viz-lesson-8',
            title: '仪表板设计',
            type: 'text',
            duration: '35分钟',
            content: '学习设计有效的商务仪表板，包括布局设计、指标选择、交互设计等。',
          },
          {
            id: 'viz-lesson-9',
            title: '数据可视化案例',
            type: 'text',
            duration: '40分钟',
            content: '分析真实的商务数据可视化案例，学习最佳实践和常见问题。',
          },
        ],
        exercises: [
          {
            id: 'viz-exercise-4',
            title: '商务图表练习',
            type: 'choice',
            questions: [
              {
                id: 'v7',
                question: '适合展示销售趋势的图表是？',
                options: ['饼图', '折线图', '柱状图', '散点图'],
                answer: '折线图',
                explanation: '折线图适合展示销售趋势。',
              },
              {
                id: 'v8',
                question: '适合展示市场份额的图表是？',
                options: ['饼图', '折线图', '柱状图', '散点图'],
                answer: '饼图',
                explanation: '饼图适合展示市场份额。',
              },
            ],
          },
        ],
        quizzes: [
          {
            id: 'viz-quiz-3',
            title: '商务数据可视化测验',
            questions: [
              {
                id: 'vq6',
                question: '商务仪表板的核心是？',
                options: ['美观的设计', '丰富的色彩', '关键业务指标', '复杂的图表'],
                answer: '关键业务指标',
                explanation: '商务仪表板的核心是展示关键业务指标。',
              },
              {
                id: 'vq7',
                question: '数据可视化在商务决策中的作用是？',
                options: ['美化报告', '简化数据理解', '存储数据', '分析数据'],
                answer: '简化数据理解',
                explanation: '数据可视化可以简化数据理解，帮助做出更好的商务决策。',
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
            content: '了解商业数据分析的完整流程，从问题定义到最终报告，包括数据收集、清洗、分析、可视化和报告撰写。',
          },
          {
            id: 'business-lesson-2',
            title: '市场分析案例',
            type: 'text',
            duration: '35分钟',
            content: '学习如何分析市场数据，包括市场规模、市场份额、竞争对手分析等。',
          },
          {
            id: 'business-lesson-3',
            title: '销售分析案例',
            type: 'text',
            duration: '30分钟',
            content: '学习如何分析销售数据，包括销售趋势、产品表现、客户分析等。',
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
              {
                id: 'b2',
                question: '商业数据分析的最终目的是？',
                options: ['生成报告', '支持决策', '收集数据', '清洗数据'],
                answer: '支持决策',
                explanation: '商业数据分析的最终目的是支持企业决策。',
              },
            ],
          },
          {
            id: 'business-exercise-2',
            title: '市场分析练习',
            type: 'choice',
            questions: [
              {
                id: 'b3',
                question: '市场分析的核心指标不包括？',
                options: ['市场规模', '市场份额', '竞争对手分析', '员工满意度'],
                answer: '员工满意度',
                explanation: '员工满意度不是市场分析的核心指标。',
              },
              {
                id: 'b4',
                question: '用于分析市场趋势的图表是？',
                options: ['折线图', '饼图', '柱状图', '散点图'],
                answer: '折线图',
                explanation: '折线图适合分析市场趋势。',
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
              {
                id: 'bq2',
                question: '商业数据分析中最常用的工具是？',
                options: ['Python', 'Excel', 'SQL', '以上都是'],
                answer: '以上都是',
                explanation: 'Python、Excel和SQL都是商业数据分析中常用的工具。',
              },
              {
                id: 'bq3',
                question: '数据分析报告的核心是？',
                options: ['数据收集', '数据清洗', '分析结果', '报告格式'],
                answer: '分析结果',
                explanation: '数据分析报告的核心是分析结果和洞察。',
              },
            ],
          },
        ],
      },
      {
        id: 'business-strategy',
        title: '商业策略分析',
        lessons: [
          {
            id: 'business-lesson-4',
            title: 'SWOT分析',
            type: 'text',
            duration: '30分钟',
            content: '学习使用SWOT分析方法评估企业的优势、劣势、机会和威胁。',
          },
          {
            id: 'business-lesson-5',
            title: '波特五力模型',
            type: 'text',
            duration: '35分钟',
            content: '学习使用波特五力模型分析行业竞争环境。',
          },
          {
            id: 'business-lesson-6',
            title: '财务分析',
            type: 'text',
            duration: '40分钟',
            content: '学习如何分析财务数据，包括盈利能力、运营效率、偿债能力等。',
          },
        ],
        exercises: [
          {
            id: 'business-exercise-3',
            title: 'SWOT分析练习',
            type: 'choice',
            questions: [
              {
                id: 'b5',
                question: 'SWOT分析中的O代表什么？',
                options: ['优势', '劣势', '机会', '威胁'],
                answer: '机会',
                explanation: 'SWOT分析中的O代表机会(Opportunities)。',
              },
              {
                id: 'b6',
                question: 'SWOT分析的目的是？',
                options: ['评估企业状况', '预测市场趋势', '分析竞争对手', '制定营销策略'],
                answer: '评估企业状况',
                explanation: 'SWOT分析的目的是评估企业的优势、劣势、机会和威胁。',
              },
            ],
          },
        ],
        quizzes: [
          {
            id: 'business-quiz-2',
            title: '商业策略测验',
            questions: [
              {
                id: 'bq4',
                question: '波特五力模型不包括以下哪项？',
                options: ['供应商议价能力', '购买者议价能力', '潜在竞争者进入能力', '员工满意度'],
                answer: '员工满意度',
                explanation: '员工满意度不是波特五力模型的要素。',
              },
              {
                id: 'bq5',
                question: '财务分析的核心指标不包括？',
                options: ['毛利率', '净利润率', '市场份额', '资产回报率'],
                answer: '市场份额',
                explanation: '市场份额不是财务分析的核心指标，而是市场分析的指标。',
              },
            ],
          },
        ],
      },
      {
        id: 'business-project',
        title: '商务数据分析项目',
        lessons: [
          {
            id: 'business-lesson-7',
            title: '项目规划',
            type: 'text',
            duration: '25分钟',
            content: '学习如何规划一个商务数据分析项目，包括目标设定、数据收集计划、时间安排等。',
          },
          {
            id: 'business-lesson-8',
            title: '数据处理与分析',
            type: 'text',
            duration: '40分钟',
            content: '学习如何处理和分析商务数据，包括数据清洗、数据转换、数据分析等。',
          },
          {
            id: 'business-lesson-9',
            title: '报告撰写与展示',
            type: 'text',
            duration: '35分钟',
            content: '学习如何撰写数据分析报告和进行有效展示，包括报告结构、可视化选择、演讲技巧等。',
          },
        ],
        exercises: [
          {
            id: 'business-exercise-4',
            title: '项目规划练习',
            type: 'choice',
            questions: [
              {
                id: 'b7',
                question: '项目规划的第一步是？',
                options: ['数据收集', '目标设定', '数据分析', '报告撰写'],
                answer: '目标设定',
                explanation: '项目规划的第一步是设定明确的目标。',
              },
              {
                id: 'b8',
                question: '数据处理的核心步骤是？',
                options: ['数据收集', '数据清洗', '数据分析', '数据可视化'],
                answer: '数据清洗',
                explanation: '数据清洗是数据处理的核心步骤，确保数据质量。',
              },
            ],
          },
        ],
        quizzes: [
          {
            id: 'business-quiz-3',
            title: '商务数据分析项目测验',
            questions: [
              {
                id: 'bq6',
                question: '数据分析报告的结构通常不包括？',
                options: ['执行摘要', '数据收集方法', '分析结果', '员工名单'],
                answer: '员工名单',
                explanation: '员工名单不是数据分析报告的必要组成部分。',
              },
              {
                id: 'bq7',
                question: '有效数据可视化的关键是？',
                options: ['美观的设计', '复杂的图表', '清晰的信息传递', '丰富的色彩'],
                answer: '清晰的信息传递',
                explanation: '有效数据可视化的关键是清晰地传递信息。',
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
