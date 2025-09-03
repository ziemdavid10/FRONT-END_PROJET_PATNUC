import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';


const HeroSection = () => {
  const navigate = useNavigate();
  const handleMinistereClick = () => {
    navigate('/connexion');
  };
  return (
    <div className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 min-h-[600px]">
      {/* Background overlay with image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/1181346/pexels-photo-1181346.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`
        }}
      ></div>
      
      {/* Navigation dots */}
      <div className="absolute top-6 left-6 flex space-x-2 z-20">
        <div className="w-3 h-3 bg-white rounded-full"></div>
        <div className="w-3 h-3 bg-white bg-opacity-50 rounded-full"></div>
        <div className="w-3 h-3 bg-white bg-opacity-50 rounded-full"></div>
        <div className="w-3 h-3 bg-white bg-opacity-50 rounded-full"></div>
      </div>
      
      <div className="relative z-10 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Simplifiez vos démarches administratives, en toute sécurité.
              </h1>
              <p className="text-xl mb-8 text-blue-100 leading-relaxed">
                Accédez à tous vos services administratifs en ligne et suivez vos demandes en temps réel et gagnez du temps.
              </p>
            </div>
            
            {/* Ministry cards */}
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 cursor-pointer" onClick={handleMinistereClick}>
                <div className="flex items-center space-x-4" >
                  <div className="w-16 h-16 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="w-10 h-10 bg-white rounded flex items-center justify-center">
                      <div className="w-6 h-6 bg-green-500 rounded"></div>
                    </div>
                  </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 text-lg mb-1">
                      Ministère de l'Agriculture et du Développement Rural
                    </h3>
                    <p className="text-sm text-gray-600">Vos démarches en ligne</p>
                    </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 cursor-pointer" onClick={handleMinistereClick}>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="w-10 h-10 bg-white rounded flex items-center justify-center">
                      <div className="w-6 h-6 bg-blue-500 rounded"></div>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 text-lg mb-1">
                      Ministère de l'Elevage, des Pêches et des Industries Animales
                    </h3>
                    <p className="text-sm text-gray-600">Vos démarches en ligne</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;