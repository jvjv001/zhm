import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Register from '../components/Register';

const RegisterPage: React.FC = () => {
  const handleRegisterSuccess = () => {
    // 注册成功后跳转到登录页
    window.location.href = '/login';
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-center">注册DataLearn账户</h1>
          <Register onSuccess={handleRegisterSuccess} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RegisterPage;