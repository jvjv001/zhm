import React from 'react';
import { Link } from 'react-router-dom';
import { courses } from '../lib/courseData';

interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  instructor: string;
  rating: number;
  students: number;
  imageUrl: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ 
  id, title, description, instructor, rating, students, imageUrl 
}) => {
  return (
    <Link to={`/courses/${id}`} className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="h-48 bg-gray-200">
        <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <svg className="h-5 w-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8-2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="ml-1 text-gray-700">{rating}</span>
            <span className="ml-2 text-gray-500 text-sm">({students} 学生)</span>
          </div>
        </div>
        <div className="flex items-center">
          <div className="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center">
            <span className="text-gray-700 font-medium">{instructor.charAt(0)}</span>
          </div>
          <span className="ml-2 text-gray-700">{instructor}</span>
        </div>
      </div>
    </Link>
  );
};

const FeaturedCourses: React.FC = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">特色课程</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              id={course.id}
              title={course.title}
              description={course.description}
              instructor={course.instructor}
              rating={course.rating}
              students={course.students}
              imageUrl={course.imageUrl}
            />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link to="/courses" className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
            查看全部课程
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
