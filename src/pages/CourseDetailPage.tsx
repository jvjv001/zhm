import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { getCourseById } from '../lib/courseData';
import { saveLearningProgress, getLearningProgress } from '../lib/storage';

const CourseDetailPage: React.FC = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const course = getCourseById(courseId || '');

  if (!course) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-16">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-center mb-8">课程不存在</h1>
            <p className="text-gray-600 text-center mb-8">
              抱歉，您访问的课程不存在。
            </p>
            <div className="text-center">
              <Link to="/courses" className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                查看所有课程
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleStartLearning = (moduleId: string, lessonId: string) => {
    saveLearningProgress({
      courseId: course.id,
      moduleId,
      lessonId,
      completed: true,
      timestamp: Date.now()
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        {/* 课程头部 */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="md:w-1/3">
                <div className="h-64 bg-white/10 rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src={course.imageUrl} 
                    alt={course.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="md:w-2/3">
                <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
                <p className="text-xl mb-6 opacity-90">{course.description}</p>
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center">
                    <svg className="h-5 w-5 text-white mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="h-5 w-5 text-white mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    <span className="capitalize">{course.level}</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="h-5 w-5 text-white mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span>{course.students} 学生</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="h-5 w-5 text-yellow-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8-2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span>{course.rating}</span>
                  </div>
                </div>
                <div className="flex items-center mb-6">
                  <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center">
                    <span className="text-white font-medium">{course.instructor.charAt(0)}</span>
                  </div>
                  <div className="ml-4">
                    <p className="font-medium">{course.instructor}</p>
                    <p className="text-sm opacity-75">课程讲师</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 课程模块 */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">课程内容</h2>
            <div className="space-y-6">
              {course.modules.map((module, moduleIndex) => (
                <div key={module.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                    <h3 className="text-xl font-semibold flex items-center">
                      <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm font-medium">
                        {moduleIndex + 1}
                      </span>
                      {module.title}
                    </h3>
                  </div>
                  <div className="divide-y divide-gray-200">
                    {/* 学习内容 */}
                    {module.lessons.length > 0 && (
                      <div className="px-6 py-4">
                        <div className="flex items-center mb-3">
                          <svg className="h-5 w-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                          </svg>
                          <h4 className="font-medium text-gray-700">学习内容</h4>
                        </div>
                        <div className="ml-7 space-y-3">
                          {module.lessons.map((lesson, lessonIndex) => (
                            <div key={lesson.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                              <div className="flex items-center">
                                <span className="w-6 h-6 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center text-xs font-medium mr-3">
                                  {lessonIndex + 1}
                                </span>
                                <span className="text-gray-700">{lesson.title}</span>
                                <span className="ml-4 text-xs text-gray-500">{lesson.duration}</span>
                              </div>
                              <Link
                                to={`/learn/${course.id}/${module.id}/${lesson.id}`}
                                onClick={() => handleStartLearning(module.id, lesson.id)}
                                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm"
                              >
                                开始学习
                              </Link>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {/* 练习 */}
                    {module.exercises.length > 0 && (
                      <div className="px-6 py-4 bg-green-50/50">
                        <div className="flex items-center mb-3">
                          <svg className="h-5 w-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <h4 className="font-medium text-gray-700">练习</h4>
                        </div>
                        <div className="ml-7 space-y-3">
                          {module.exercises.map((exercise) => (
                            <div key={exercise.id} className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm">
                              <div className="flex items-center">
                                <svg className="h-5 w-5 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span className="text-gray-700">{exercise.title}</span>
                              </div>
                              <Link
                                to={`/exercise/${course.id}/${module.id}/${exercise.id}`}
                                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors text-sm"
                              >
                                开始练习
                              </Link>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* 测验 */}
                    {module.quizzes.length > 0 && (
                      <div className="px-6 py-4 bg-purple-50/50">
                        <div className="flex items-center mb-3">
                          <svg className="h-5 w-5 text-purple-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h3m3 0h3m-6 3h3m0 3h3m0-3h3m-6-3h3m-3-3h3m0-3h3" />
                          </svg>
                          <h4 className="font-medium text-gray-700">测验</h4>
                        </div>
                        <div className="ml-7 space-y-3">
                          {module.quizzes.map((quiz) => (
                            <div key={quiz.id} className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm">
                              <div className="flex items-center">
                                <svg className="h-5 w-5 text-purple-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h3m3 0h3m-6 3h3m0 3h3m0-3h3m-6-3h3m-3-3h3m0-3h3" />
                                </svg>
                                <span className="text-gray-700">{quiz.title}</span>
                                <span className="ml-4 text-xs text-gray-500">{quiz.questions.length} 题</span>
                              </div>
                              <Link
                                to={`/quiz/${course.id}/${module.id}/${quiz.id}`}
                                className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors text-sm"
                              >
                                开始测验
                              </Link>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CourseDetailPage;
