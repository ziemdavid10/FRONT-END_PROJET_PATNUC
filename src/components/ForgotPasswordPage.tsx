import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, Mail, Building, MapPin } from 'lucide-react';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header with color bar */}
      <div className="w-full h-2 bg-gradient-to-r from-green-500 via-red-500 to-yellow-500"></div>
      
      <div className="flex min-h-[calc(100vh-8px)]">
        {/* Left side - Image (hidden on mobile) */}
        <div className="hidden lg:flex lg:w-1/2 relative">
          <img 
            src="https://images.pexels.com/photos/974314/pexels-photo-974314.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop"
            alt="Agricultural field"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-900 bg-opacity-60 flex items-end p-12">
            <div className="text-white">
              <h2 className="text-3xl font-bold mb-4">
                Accédez à vos services administratifs<br />
                en ligne, suivez vos demandes en<br />
                temps réel et gagnez du temps.
              </h2>
              <div className="flex space-x-2 mt-8">
                <div className="w-8 h-2 bg-white rounded-full"></div>
                <div className="w-2 h-2 bg-white bg-opacity-50 rounded-full"></div>
                <div className="w-2 h-2 bg-white bg-opacity-50 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Form */}
        <div className="w-full lg:w-1/2 flex flex-col">
          {/* Logo section */}
          <div className="px-6 py-4 lg:px-12 lg:py-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                  <Building className="w-6 h-6 text-white" />
                </div>
                <div className="w-12 h-12 bg-gray-600 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
              </div>
              <h1 className="text-xl font-bold text-gray-800">Plateforme de téléprocédures</h1>
            </div>

            {/* Form */}
            <div className="max-w-md mx-auto">
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
    </div>
  );
};

export default ForgotPasswordPage;