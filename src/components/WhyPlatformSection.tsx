import React from 'react';
import { Monitor } from 'lucide-react';

const WhyPlatformSection = () => {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-4 mb-8">
            <Monitor className="w-10 h-10 text-blue-600" />
            <h2 className="text-4xl font-bold text-blue-600">Pourquoi cette plateforme ?</h2>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            <div className="bg-teal-500 text-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-3">Accès simplifié</h3>
              <p className="text-teal-100 text-lg">
                Plus besoin de files d'attente interminables.
              </p>
            </div>
            
            <div className="pl-8 space-y-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-3 text-lg">Gain de temps</h4>
                <p className="text-gray-600">Fini le temps mort.</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800 mb-3 text-lg">Fiabilité & transparence</h4>
                <p className="text-gray-600">Suivi en temps réel de vos dossiers.</p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center">
            <img 
              src="https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=500&h=750&dpr=1"
              alt="Homme utilisant un tablet dans un champ"
              className="rounded-lg shadow-xl max-w-md w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyPlatformSection;