
import React from 'react';
import LoginForm from '@/components/LoginForm';
import ParticleBackground from '@/components/ParticleBackground';

const Index = () => {
  return (
    <div className="min-h-screen gradient-bg relative overflow-hidden">
      <ParticleBackground />
      
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/5 rounded-full blur-xl float-element"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl float-element" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-20 left-20 w-16 h-16 bg-pink-500/10 rounded-full blur-xl float-element" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-40 right-10 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl float-element" style={{ animationDelay: '1.5s' }}></div>
      
      {/* Main content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <LoginForm />
      </div>
      
      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
    </div>
  );
};

export default Index;
