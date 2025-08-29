import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

const ResetLinkSentPage = () => {
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
        <div className="relative z-10 flex items-center justify-start h-full px-12 pb-20">
          <div className="text-white max-w-lg">
            <h2 className="text-4xl font-bold mb-6 leading-tight">
              Accédez à vos services administratifs en ligne, suivez vos demandes en temps réel et gagnez du temps.
            </h2>
          </div>
        </div>
        <div className="absolute bottom-12 left-12 flex space-x-3">
          <div className="w-4 h-4 bg-white rounded-full"></div>
          <div className="w-4 h-4 bg-white bg-opacity-50 rounded-full"></div>
          <div className="w-4 h-4 bg-white bg-opacity-50 rounded-full"></div>
        </div>
      </div>
      
      {/* Right side - Message */}
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
            <div className="flex items-center space-x-3">
              <h1 className="text-gray-800 text-sm font-semibold">Plateforme de téléprocédures</h1>
              <Link 
                to="/" 
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors group"
                title="Retour à l'accueil"
              >
                <Home className="w-4 h-4 text-gray-600 group-hover:text-gray-800" />
              </Link>
            </div>
          </div>
        </div>
        
        {/* Message container */}
        <div className="flex-1 flex flex-col items-center justify-center p-6">
          <div className="w-full max-w-sm">
            <h2 className="text-xl font-bold text-center text-gray-800 mb-4">Lien envoyé</h2>
            <p className="text-gray-600 mb-8 text-center">
              Un lien de réinitialisation de mot de passe a été envoyé à votre adresse e-mail.<br />
              Veuillez vérifier votre boîte de réception et suivre les instructions pour réinitialiser votre mot de passe.
            </p>
            <Link
              to="/connexion"
              className="block w-full bg-blue-600 text-white py-2.5 rounded-full font-semibold text-center hover:bg-blue-700 transition duration-200"
            >
              Retour à la connexion
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetLinkSentPage;