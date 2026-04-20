import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";

const LoginPage = lazy(() => import("@/pages/LoginPage"));
const RegisterPage = lazy(() => import("@/pages/RegisterPage"));
const CoursesPage = lazy(() => import("@/pages/CoursesPage"));
const CourseDetailPage = lazy(() => import("@/pages/CourseDetailPage"));
const LearningModulePage = lazy(() => import("@/pages/LearningModulePage"));
const ExercisePage = lazy(() => import("@/pages/ExercisePage"));
const QuizPage = lazy(() => import("@/pages/QuizPage"));
const DashboardPage = lazy(() => import("@/pages/DashboardPage"));
const InstructorDashboardPage = lazy(() => import("@/pages/InstructorDashboardPage"));

const Loading = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600"></div>
  </div>
);

export default function App() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/courses/:courseId" element={<CourseDetailPage />} />
          <Route path="/learn/:courseId/:moduleId/:lessonId" element={<LearningModulePage />} />
          <Route path="/exercise/:courseId/:moduleId/:exerciseId" element={<ExercisePage />} />
          <Route path="/quiz/:courseId/:moduleId/:quizId" element={<QuizPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/instructor" element={<InstructorDashboardPage />} />
          <Route path="/other" element={<div className="text-center text-xl">Other Page - Coming Soon</div>} />
        </Routes>
      </Suspense>
    </Router>
  );
}
