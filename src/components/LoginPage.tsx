import React, { useState } from 'react';
import { User, Lock, Eye, EyeOff } from 'lucide-react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt:', { email, password });
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side - Image and content */}
      <div 
        className="flex-1 relative bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`
        }}
      >
        <div className="absolute inset-0 bg-blue-900 bg-opacity-70"></div>
        
        {/* Header with logos */}
        <div className="relative z-10 p-6">
          <div className="flex items-center space-x-6">
            {/* République du Cameroun logo */}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-red-600 rounded-full"></div>
              </div>
            </div>
            
            {/* MINADER logo */}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-green-600 rounded flex items-center justify-center">
                <div className="w-6 h-6 bg-white rounded"></div>
              </div>
            </div>
            
            {/* MINEPIA logo */}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center">
                <div className="w-6 h-6 bg-white rounded"></div>
              </div>
            </div>
            
            {/* PATNDIG logo */}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-orange-500 rounded flex items-center justify-center">
                <div className="w-6 h-6 bg-white rounded"></div>
              </div>
            </div>
          </div>
          
          <div className="absolute top-6 right-6">
            <h1 className="text-white text-xl font-semibold">Plateforme de téléprocédures</h1>
          </div>
        </div>
        
        {/* Main content */}
        <div className="relative z-10 flex items-center justify-start h-full px-12 pb-20">
          <div className="text-white max-w-lg">
            <h2 className="text-4xl font-bold mb-6 leading-tight">
              Accédez à vos services administratifs en ligne, suivez vos demandes en temps réel et gagnez du temps.
            </h2>
          </div>
        </div>
        
        {/* Navigation dots */}
        <div className="absolute bottom-12 left-12 flex space-x-3">
          <div className="w-4 h-4 bg-white rounded-full"></div>
          <div className="w-4 h-4 bg-white bg-opacity-50 rounded-full"></div>
          <div className="w-4 h-4 bg-white bg-opacity-50 rounded-full"></div>
        </div>
      </div>
      
      {/* Right side - Login form */}
      <div className="w-full max-w-md bg-white flex items-center justify-center p-8">
        <div className="w-full max-w-sm">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Connexion</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email field */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Votre email*"
                className="w-full pl-10 pr-4 py-3 border-2 border-blue-500 rounded-full focus:outline-none focus:border-blue-600 transition-colors"
                required
              />
            </div>
            
            {/* Password field */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Entrer votre mot de passe*"
                className="w-full pl-10 pr-12 py-3 border-2 border-gray-300 rounded-full focus:outline-none focus:border-blue-600 transition-colors"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                ) : (
                  <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                )}
              </button>
            </div>
            
            {/* Forgot password link */}
            <div className="text-right">
              <a href="#" className="text-blue-600 hover:text-blue-700 text-sm">
                Mot de passe oublié?
              </a>
            </div>
            
            {/* Submit button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
            >
              Se connecter
            </button>
            
            {/* Sign up link */}
            <div className="text-center text-sm text-gray-600">
              Vous n'avez pas de compte ?{' '}
              <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
                Inscrivez-vous maintenant
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;