import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface CourseProgress {
  id: string;
  title: string;
  progress: number;
  imageUrl: string;
}

interface Achievement {
  id: string;
  name: string;
  description: string;
  badgeUrl: string;
  earnedAt: string;
}

interface SkillMetric {
  name: string;
  level: number;
  maxLevel: number;
}

const DashboardPage: React.FC = () => {
  const [courseProgress, setCourseProgress] = useState<CourseProgress[]>([]);
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [skillMetrics, setSkillMetrics] = useState<SkillMetric[]>([]);
  const [loading, setLoading] = useState(true);

  // 模拟数据
  const mockCourseProgress: CourseProgress[] = [
    {
      id: '1',
      title: 'Python数据分析入门',
      progress: 75,
      imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Python%20data%20analysis%20course%20cover%20with%20code%20and%20charts&image_size=square'
    },
    {
      id: '2',
      title: '商务数据分析实战',
      progress: 45,
      imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Business%20data%20analysis%20course%20cover%20with%20business%20charts%20and%20graphs&image_size=square'
    },
    {
      id: '3',
      title: '数据可视化与仪表盘',
      progress: 20,
      imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Data%20visualization%20course%20cover%20with%20colorful%20charts%20and%20dashboards&image_size=square'
    }
  ];

  const mockAchievements: Achievement[] = [
    {
      id: '1',
      name: 'Python入门者',
      description: '完成Python基础课程',
      badgeUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Python%20beginner%20badge%20icon&image_size=square',
      earnedAt: '2026-04-01'
    },
    {
      id: '2',
      name: '数据分析师',
      description: '完成数据分析实战课程',
      badgeUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Data%20analyst%20badge%20icon&image_size=square',
      earnedAt: '2026-04-10'
    },
    {
      id: '3',
      name: '可视化专家',
      description: '完成数据可视化课程',
      badgeUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Data%20visualization%20expert%20badge%20icon&image_size=square',
      earnedAt: '2026-04-12'
    }
  ];

  const mockSkillMetrics: SkillMetric[] = [
    {
      name: 'Python编程',
      level: 8,
      maxLevel: 10
    },
    {
      name: '数据分析',
      level: 6,
      maxLevel: 10
    },
    {
      name: '数据可视化',
      level: 5,
      maxLevel: 10
    },
    {
      name: '机器学习',
      level: 3,
      maxLevel: 10
    }
  ];

  useEffect(() => {
    // 模拟API请求
    setTimeout(() => {
      setCourseProgress(mockCourseProgress);
      setAchievements(mockAchievements);
      setSkillMetrics(mockSkillMetrics);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-32 pb-16 flex justify-center items-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600"></div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">学习仪表盘</h1>

          {/* 学习概览 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">已完成课程</h3>
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '66%' }}></div>
              </div>
              <p className="mt-2 text-sm text-gray-600">66% 的课程已完成</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">获得徽章</h3>
                <span className="text-2xl font-bold text-yellow-600">3</span>
              </div>
              <div className="flex gap-2">
                {achievements.slice(0, 3).map((achievement) => (
                  <img key={achievement.id} src={achievement.badgeUrl} alt={achievement.name} className="w-10 h-10 rounded-full" />
                ))}
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">学习时间</h3>
                <span className="text-2xl font-bold text-green-600">12h</span>
              </div>
              <p className="text-sm text-gray-600">过去7天的学习时间</p>
              <div className="mt-4 flex justify-between text-sm text-gray-600">
                <span>本周</span>
                <span>上周: 8h</span>
              </div>
            </div>
          </div>

          {/* 课程进度 */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">课程进度</h2>
            <div className="space-y-6">
              {courseProgress.map((course) => (
                <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/4">
                      <img src={course.imageUrl} alt={course.title} className="w-full h-40 object-cover" />
                    </div>
                    <div className="md:w-3/4 p-6">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-semibold">{course.title}</h3>
                        <span className="text-blue-600 font-medium">{course.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                        <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${course.progress}%` }}></div>
                      </div>
                      <div className="flex justify-end">
                        <a href={`/courses/${course.id}`} className="text-blue-600 hover:underline text-sm">
                          继续学习
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 成就系统 */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">我的成就</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievements.map((achievement) => (
                <div key={achievement.id} className="bg-white rounded-lg shadow-md p-6 flex items-center gap-4">
                  <img src={achievement.badgeUrl} alt={achievement.name} className="w-16 h-16 rounded-full" />
                  <div>
                    <h3 className="font-semibold">{achievement.name}</h3>
                    <p className="text-gray-600 text-sm">{achievement.description}</p>
                    <p className="text-gray-500 text-xs mt-2">获得于: {achievement.earnedAt}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 技能指标 */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">技能发展</h2>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="space-y-6">
                {skillMetrics.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-gray-600">{skill.level}/{skill.maxLevel}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="bg-blue-600 h-2.5 rounded-full" 
                        style={{ width: `${(skill.level / skill.maxLevel) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 推荐课程 */}
          <div>
            <h2 className="text-2xl font-bold mb-6">推荐课程</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-40 bg-gray-200">
                  <img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Machine%20learning%20course%20cover%20with%20AI%20concepts%20and%20code&image_size=square" alt="机器学习基础" className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold mb-2">机器学习基础</h3>
                  <p className="text-gray-600 text-sm mb-4">了解机器学习基础概念和Python实现方法</p>
                  <a href="/courses/4" className="text-blue-600 hover:underline text-sm">查看详情</a>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-40 bg-gray-200">
                  <img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Deep%20learning%20course%20cover%20with%20neural%20networks&image_size=square" alt="深度学习入门" className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold mb-2">深度学习入门</h3>
                  <p className="text-gray-600 text-sm mb-4">学习深度学习基础和神经网络原理</p>
                  <a href="/courses/5" className="text-blue-600 hover:underline text-sm">查看详情</a>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-40 bg-gray-200">
                  <img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Big%20data%20analytics%20course%20cover%20with%20large%20datasets&image_size=square" alt="大数据分析" className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold mb-2">大数据分析</h3>
                  <p className="text-gray-600 text-sm mb-4">学习处理和分析大规模数据集的方法</p>
                  <a href="/courses/6" className="text-blue-600 hover:underline text-sm">查看详情</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DashboardPage;