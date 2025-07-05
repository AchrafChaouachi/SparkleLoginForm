
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { User, Key, UserPlus, ArrowLeft } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    if (isSignup && password !== confirmPassword) {
      toast({
        title: "Password mismatch",
        description: "Please make sure your passwords match.",
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }

    // Simulate login/signup process
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: isSignup ? "Welcome aboard! 🎉" : "Welcome back! ✨",
        description: isSignup 
          ? "Account created successfully! This is just a demo form."
          : "Login successful! This is just a demo form.",
        duration: 4000,
      });
    }, 1500);
  };

  const toggleMode = () => {
    setIsSignup(!isSignup);
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setFullName('');
  };

  return (
    <div className="slide-up glass-card p-8 w-full max-w-md mx-4 rounded-2xl relative overflow-hidden">
      {/* Sparkle decorations */}
      <div className="absolute top-4 right-4 w-2 h-2 bg-yellow-300 rounded-full sparkle-element opacity-70"></div>
      <div className="absolute top-8 right-12 w-1 h-1 bg-pink-300 rounded-full sparkle-element opacity-60" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute top-12 right-6 w-1.5 h-1.5 bg-blue-300 rounded-full sparkle-element opacity-50" style={{ animationDelay: '1s' }}></div>
      
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-4 float-element">
          {isSignup ? <UserPlus className="w-8 h-8 text-white" /> : <User className="w-8 h-8 text-white" />}
        </div>
        <h1 className="text-3xl font-bold text-white mb-2">
          {isSignup ? 'Create Account' : 'Welcome Back'}
        </h1>
        <p className="text-white/80">
          {isSignup ? 'Join us today' : 'Sign in to your account'}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {isSignup && (
          <div className="input-float-label">
            <Input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder=" "
              required
              className="bg-white/10 border-white/20 text-white placeholder-transparent focus:border-white/40 focus:ring-2 focus:ring-purple-500/50 transition-all duration-300 glow-on-hover"
            />
            <label>Full Name</label>
          </div>
        )}

        <div className="input-float-label">
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder=" "
            required
            className="bg-white/10 border-white/20 text-white placeholder-transparent focus:border-white/40 focus:ring-2 focus:ring-purple-500/50 transition-all duration-300 glow-on-hover"
          />
          <label>Email Address</label>
        </div>

        <div className="input-float-label">
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder=" "
            required
            className="bg-white/10 border-white/20 text-white placeholder-transparent focus:border-white/40 focus:ring-2 focus:ring-purple-500/50 transition-all duration-300 glow-on-hover"
          />
          <label>Password</label>
        </div>

        {isSignup && (
          <div className="input-float-label">
            <Input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder=" "
              required
              className="bg-white/10 border-white/20 text-white placeholder-transparent focus:border-white/40 focus:ring-2 focus:ring-purple-500/50 transition-all duration-300 glow-on-hover"
            />
            <label>Confirm Password</label>
          </div>
        )}

        {!isSignup && (
          <div className="flex items-center justify-between text-sm text-white/80">
            <label className="flex items-center space-x-2 cursor-pointer hover:text-white transition-colors">
              <input type="checkbox" className="rounded bg-white/10 border-white/20 text-purple-500 focus:ring-purple-500/50" />
              <span>Remember me</span>
            </label>
            <a href="#" className="hover:text-white transition-colors hover:underline">
              Forgot password?
            </a>
          </div>
        )}

        <Button
          type="submit"
          disabled={isLoading}
          className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 glow-on-hover disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <div className="flex items-center justify-center space-x-2">
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              <span>{isSignup ? 'Creating account...' : 'Signing in...'}</span>
            </div>
          ) : (
            <div className="flex items-center justify-center space-x-2">
              {isSignup ? <UserPlus className="w-4 h-4" /> : <Key className="w-4 h-4" />}
              <span>{isSignup ? 'Create Account' : 'Sign In'}</span>
            </div>
          )}
        </Button>
      </form>

      <div className="mt-8 text-center">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/20"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-transparent text-white/60">Or continue with</span>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3">
          <Button
            type="button"
            variant="outline"
            className="bg-white/5 border-white/20 text-white hover:bg-white/10 transition-all duration-300"
          >
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
              <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Google
          </Button>
          <Button
            type="button"
            variant="outline"
            className="bg-white/5 border-white/20 text-white hover:bg-white/10 transition-all duration-300"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            GitHub
          </Button>
        </div>
      </div>

      <p className="mt-8 text-center text-white/60 text-sm">
        {isSignup ? 'Already have an account?' : "Don't have an account?"}{' '}
        <button 
          onClick={toggleMode}
          className="text-white hover:underline font-medium transition-colors flex items-center justify-center gap-1 mx-auto mt-2"
        >
          {isSignup && <ArrowLeft className="w-4 h-4" />}
          {isSignup ? 'Back to Sign In' : 'Sign up for free'}
        </button>
      </p>
    </div>
  );
};

export default LoginForm;
