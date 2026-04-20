import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { getCourseById, getModuleById } from '../lib/courseData';
import { saveLearningProgress, unlockAchievement } from '../lib/storage';

const LearningModulePage: React.FC = () => {
  const { courseId, moduleId, lessonId } = useParams<{
    courseId: string;
    moduleId: string;
    lessonId: string;
  }>();

  const course = getCourseById(courseId || '');
  const module = getModuleById(courseId || '', moduleId || '');
  const lesson = module?.lessons.find(l => l.id === lessonId);

  const handleCompleteLesson = () => {
    if (course && module && lesson) {
      saveLearningProgress({
        courseId: course.id,
        moduleId: module.id,
        lessonId: lesson.id,
        completed: true,
        timestamp: Date.now()
      });

      unlockAchievement('first_lesson');
    }
  };

  if (!course || !module || !lesson) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-16">
          <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-center mb-8">内容不存在</h1>
            <p className="text-gray-600 text-center mb-8">
              抱歉，您访问的学习内容不存在。
            </p>
            <div className="text-center">
              <Link to={`/courses/${courseId}`} className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                返回课程
              </Link>
            </div>
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
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-6 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link to={`/courses/${courseId}`} className="text-blue-200 hover:text-white flex items-center mb-4">
              <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              返回课程
            </Link>
            <div className="text-sm opacity-75 mb-2">
              {course.title} &gt; {module.title}
            </div>
            <h1 className="text-3xl font-bold">{lesson.title}</h1>
          </div>
        </div>

        <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 text-blue-600 p-4 rounded-full mr-4">
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div>
                <h2 className="text-xl font-semibold">学习内容</h2>
                <p className="text-gray-500 text-sm">{lesson.duration}</p>
              </div>
            </div>

            <div className="prose max-w-none">
              <div className="text-gray-700 whitespace-pre-wrap leading-relaxed">
                {lesson.content}
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="text-gray-500 text-sm">
              恭喜完成本课程学习！
            </div>
            <button
              onClick={handleCompleteLesson}
              className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
            >
              标记为完成
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LearningModulePage;
