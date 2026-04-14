import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Login from '../components/Login';

const LoginPage: React.FC = () => {
  const handleLoginSuccess = () => {
    // 登录成功后跳转到首页
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-center">登录到DataLearn</h1>
          <Login onSuccess={handleLoginSuccess} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LoginPage;