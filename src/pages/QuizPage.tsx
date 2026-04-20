import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { getCourseById, getModuleById } from '../lib/courseData';
import { saveQuizScore, unlockAchievement, saveLearningProgress } from '../lib/storage';

const QuizPage: React.FC = () => {
  const { courseId, moduleId, quizId } = useParams<{
    courseId: string;
    moduleId: string;
    quizId: string;
  }>();

  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  const course = getCourseById(courseId || '');
  const module = getModuleById(courseId || '', moduleId || '');
  const quiz = module?.quizzes.find(q => q.id === quizId);

  const handleAnswerChange = (questionId: string, answer: string) => {
    setUserAnswers({
      ...userAnswers,
      [questionId]: answer
    });
  };

  const handleSubmit = () => {
    if (!quiz) return;

    let correctCount = 0;
    quiz.questions.forEach(question => {
      if (userAnswers[question.id] === question.answer) {
        correctCount++;
      }
    });

    setScore(correctCount);
    setShowResults(true);

    if (course && module) {
      saveQuizScore({
        courseId: course.id,
        moduleId: module.id,
        quizId: quiz.id,
        score: correctCount,
        totalQuestions: quiz.questions.length,
        timestamp: Date.now()
      });

      saveLearningProgress({
        courseId: course.id,
        moduleId: module.id,
        lessonId: quiz.id,
        completed: true,
        timestamp: Date.now()
      });

      unlockAchievement('first_quiz');

      if (correctCount === quiz.questions.length) {
        unlockAchievement('perfect_quiz');
      }

      if (courseId === 'python-data-analysis') {
        unlockAchievement('python_master');
      } else if (courseId === 'sql') {
        unlockAchievement('sql_expert');
      }
    }
  };

  if (!course || !module || !quiz) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-16">
          <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-center mb-8">测验不存在</h1>
            <p className="text-gray-600 text-center mb-8">
              抱歉，您访问的测验不存在。
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
        <div className="bg-gradient-to-r from-purple-600 to-violet-700 text-white py-6 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link to={`/courses/${courseId}`} className="text-purple-200 hover:text-white flex items-center mb-4">
              <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              返回课程
            </Link>
            <div className="text-sm opacity-75 mb-2">
              {course.title} &gt; {module.title}
            </div>
            <h1 className="text-3xl font-bold">{quiz.title}</h1>
          </div>
        </div>

        <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          {showResults ? (
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-center mb-8">
                <div className="w-24 h-24 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="h-12 w-12 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h3m3 0h3m-6 3h3m0 3h3m0-3h3m-6-3h3m-3-3h3m0-3h3" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold mb-2">测验完成！</h2>
                <p className="text-gray-600 mb-4">
                  您的得分：{score} / {quiz.questions.length}
                </p>
                <p className="text-lg font-semibold text-purple-600">
                  {score === quiz.questions.length ? '完美！全部正确！' : score >= quiz.questions.length * 0.8 ? '优秀！' : score >= quiz.questions.length * 0.6 ? '良好！继续加油！' : '需要加强练习！'}
                </p>
              </div>

              <div className="space-y-4 mb-8">
                {quiz.questions.map((question, index) => {
                  const isCorrect = userAnswers[question.id] === question.answer;
                  return (
                    <div key={question.id} className={`p-4 rounded-lg border ${isCorrect ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
                      <div className="flex items-start mb-2">
                        <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium mr-3 ${isCorrect ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
                          {index + 1}
                        </span>
                        <div>
                          <p className="font-medium">{question.question}</p>
                          <div className="mt-2 text-sm">
                            <p className="text-gray-600">
                              您的答案：{userAnswers[question.id] || '未作答'}
                            </p>
                            {!isCorrect && (
                              <p className="text-green-600 mt-1">
                                正确答案：{question.answer}
                              </p>
                            )}
                            {question.explanation && (
                              <p className="text-gray-500 mt-1">
                                {question.explanation}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex justify-center">
                <Link to={`/courses/${courseId}`} className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                  返回课程
                </Link>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="bg-purple-100 text-purple-600 p-4 rounded-full mr-4">
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h3m3 0h3m-6 3h3m0 3h3m0-3h3m-6-3h3m-3-3h3m0-3h3" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-xl font-semibold">测验题</h2>
                  <p className="text-gray-500 text-sm">共 {quiz.questions.length} 题</p>
                </div>
              </div>

              <div className="space-y-6 mb-8">
                {quiz.questions.map((question, index) => (
                  <div key={question.id} className="border border-gray-200 rounded-lg p-6">
                    <div className="flex items-start mb-4">
                      <span className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-medium mr-3">
                        {index + 1}
                      </span>
                      <h3 className="font-medium text-gray-800">{question.question}</h3>
                    </div>
                    
                    <div className="ml-11 space-y-3">
                      {question.options.map((option, optionIndex) => (
                        <label key={optionIndex} className="flex items-center cursor-pointer">
                          <input
                            type="radio"
                            name={`question-${question.id}`}
                            value={option}
                            checked={userAnswers[question.id] === option}
                            onChange={(e) => handleAnswerChange(question.id, e.target.value)}
                            className="w-4 h-4 text-purple-600 border-gray-300 focus:ring-purple-500"
                          />
                          <span className="ml-3 text-gray-700">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-end">
                <button
                  onClick={handleSubmit}
                  disabled={Object.keys(userAnswers).length < quiz.questions.length}
                  className="px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  提交答案
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default QuizPage;
