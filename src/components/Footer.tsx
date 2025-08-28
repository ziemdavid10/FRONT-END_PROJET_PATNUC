import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* République du Cameroun */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 bg-red-600 rounded-full"></div>
              </div>
              <h3 className="font-semibold text-lg">République du Cameroun</h3>
            </div>
          </div>
          
          {/* MINADER */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 bg-white rounded"></div>
              </div>
              <h3 className="font-semibold text-lg">MINADER</h3>
            </div>
            <div className="space-y-3 text-sm text-blue-200">
              <p className="hover:text-white cursor-pointer transition-colors">
                Portail de l'information Agricole au Cameroun
              </p>
              <p className="hover:text-white cursor-pointer transition-colors">
                Certificat phytosanitaire
              </p>
              <p className="hover:text-white cursor-pointer transition-colors">
                Portail de la Direction du Contrôle Phytosanitaire
              </p>
              <p className="hover:text-white cursor-pointer transition-colors">
                Cellule informatique du MINADER
              </p>
              <p className="font-medium">+237 222 23 10 72</p>
              <p className="font-medium">infos@minader.cm</p>
            </div>
          </div>
          
          {/* MINEPIA */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 bg-white rounded"></div>
              </div>
              <h3 className="font-semibold text-lg">MINEPIA</h3>
            </div>
            <div className="space-y-3 text-sm text-blue-200">
              <p className="hover:text-white cursor-pointer transition-colors">
                Productions et Industries Animales
              </p>
              <p className="hover:text-white cursor-pointer transition-colors">
                Services Vétérinaires
              </p>
              <p className="hover:text-white cursor-pointer transition-colors">
                Pêche et Aquaculture et Industries
              </p>
              <p className="hover:text-white cursor-pointer transition-colors">
                Portail de l'information de l'Elevage et d'Etudes
              </p>
              <p className="hover:text-white cursor-pointer transition-colors">
                Division des Ressources Zoégénétiques
              </p>
              <p className="font-medium">Infos@minepia.gov.cm</p>
            </div>
          </div>
          
          {/* PATNDIG */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 bg-white rounded"></div>
              </div>
              <h3 className="font-semibold text-lg">PATNDIG</h3>
            </div>
            <div className="space-y-3 text-sm text-blue-200">
              <p className="hover:text-white cursor-pointer transition-colors">
                Cameroun
              </p>
              <p className="hover:text-white cursor-pointer transition-colors">
                Nous contacter
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-blue-800 mt-12 pt-8">
          <div className="flex items-center justify-center space-x-8">
            <div className="w-16 h-16 bg-green-500 rounded-lg flex items-center justify-center hover:bg-green-400 transition-colors cursor-pointer">
              <div className="w-10 h-10 bg-white rounded"></div>
            </div>
            <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-500 transition-colors cursor-pointer">
              <div className="w-10 h-10 bg-white rounded"></div>
            </div>
            <div className="w-16 h-16 bg-orange-500 rounded-lg flex items-center justify-center hover:bg-orange-400 transition-colors cursor-pointer">
              <div className="w-10 h-10 bg-white rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;