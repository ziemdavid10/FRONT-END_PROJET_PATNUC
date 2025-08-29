import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { User, Mail, Building, MapPin } from 'lucide-react';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    navigate('/verification-code');
  };

  return (
    <div className="h-screen flex">
      {/* Left side - Image and content */}
      <div 
        className="flex-1 relative bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`
        }}
      >
        <div className="absolute inset-0 bg-blue-900 bg-opacity-70"></div>
        
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
      
      {/* Right side - Form */}
      <div className="w-full max-w-md bg-white flex flex-col overflow-hidden">
        {/* Header with color bar */}
        <div className="w-full h-2 bg-gradient-to-r from-green-500 via-red-500 to-yellow-500"></div>
        
        {/* Header with logos */}
        <div className="p-4 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                <div className="w-5 h-5 bg-red-600 rounded-full"></div>
              </div>
              <div className="w-8 h-8 bg-green-600 rounded flex items-center justify-center">
                <div className="w-5 h-5 bg-white rounded"></div>
              </div>
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                <div className="w-5 h-5 bg-white rounded"></div>
              </div>
              <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center">
                <div className="w-5 h-5 bg-white rounded"></div>
              </div>
            </div>
            <h1 className="text-gray-800 text-sm font-semibold">Plateforme de téléprocédures</h1>
          </div>
        </div>
        
        {/* Form container */}
        <div className="flex-1 flex items-center justify-center p-4">
          <div className="w-full max-w-sm">
            <h2 className="text-xl font-bold text-center text-gray-800 mb-6">Mot de passe oublié</h2>
              
            {!submitted ? (
              <>
                <p className="text-gray-600 mb-6 text-center">
                  Entrez votre adresse e-mail et nous vous enverrons un lien pour réinitialiser votre mot de passe.
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      placeholder="Adresse e-mail*"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      required
                      className="w-full pl-12 pr-4 py-2.5 border-2 border-blue-500 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2.5 rounded-full font-semibold hover:bg-blue-700 transition duration-200"
                  >
                    Envoyer le lien
                  </button>
                  
                  {/* Back to login link */}
                  <div className="text-center">
                    <Link to="/connexion" className="text-blue-600 hover:text-blue-700 font-medium">
                      Retour à la connexion
                    </Link>
                  </div>
                </form>
              </>
            ) : (
              <div className="text-center">
                <p className="text-green-600 mb-6">
                  Si un compte existe avec cet e-mail, un lien de réinitialisation a été envoyé.
                </p>
                <Link to="/connexion" className="text-blue-600 hover:text-blue-700 font-medium">
                  Retour à la connexion
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;