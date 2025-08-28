import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, FileText, Shield, Bell, Search, User } from 'lucide-react';

const ProceduresSection = () => {
  const navigate = useNavigate();

  const handleProcedureClick = () => {
    navigate('/connexion');
  };

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left column - Procedures */}
          <div>
            <div className="bg-blue-600 text-white px-6 py-4 rounded-t-lg">
              <h2 className="text-xl font-semibold">Initier une procédure</h2>
            </div>
            
            <div className="bg-white rounded-b-lg shadow-lg p-8">
              <div className="mb-10">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                    <div className="w-8 h-8 bg-green-600 rounded"></div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Procédures du MINADER
                  </h3>
                </div>
                
                <div className="space-y-5">
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    </div>
                    <div>
                      <p 
                        className="text-gray-700 leading-relaxed hover:text-blue-600 cursor-pointer transition-colors"
                        onClick={handleProcedureClick}
                      >
                        Suivi des demandes de Certification des semences et plants
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    </div>
                    <div>
                      <p 
                        className="text-gray-700 leading-relaxed hover:text-blue-600 cursor-pointer transition-colors"
                        onClick={handleProcedureClick}
                      >
                        Procédure de soumission du dossier de Certification des appareils de traitements phytosanitaires
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    </div>
                    <div>
                      <p 
                        className="text-gray-700 leading-relaxed hover:text-blue-600 cursor-pointer transition-colors"
                        onClick={handleProcedureClick}
                      >
                        Procédure de soumission du dossier d'homologation (d'autorisation de mise sur le marché) des engrais et fertilisants
                      </p>
                    </div>
                  </div>
                </div>
                
                <button className="mt-6 text-blue-600 hover:text-blue-700 flex items-center space-x-2 font-medium transition-colors">
                  <span>Voir plus</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <div className="w-8 h-8 bg-blue-600 rounded"></div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Procédures du MINEPIA
                  </h3>
                </div>
                
                <div className="space-y-5">
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    </div>
                    <div>
                      <p 
                        className="text-gray-700 leading-relaxed hover:text-blue-600 cursor-pointer transition-colors"
                        onClick={handleProcedureClick}
                      >
                        Obtention du visa du passeport pour le bétail
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    </div>
                    <div>
                      <p 
                        className="text-gray-700 leading-relaxed hover:text-blue-600 cursor-pointer transition-colors"
                        onClick={handleProcedureClick}
                      >
                        Obtention du permis de pêche artisanale maritime et de pêche artisanale continentale
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    </div>
                    <div>
                      <p 
                        className="text-gray-700 leading-relaxed hover:text-blue-600 cursor-pointer transition-colors"
                        onClick={handleProcedureClick}
                      >
                        Création d'une exploitation de commercialisation des produits d'origine animale et halieutiques
                      </p>
                    </div>
                  </div>
                </div>
                
                <button className="mt-6 text-blue-600 hover:text-blue-700 flex items-center space-x-2 font-medium transition-colors">
                  <span>Voir plus</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
          
          {/* Right column - Platform features */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-8 leading-tight">
              Concrètement, comment la plateforme marche ?
            </h2>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Search className="w-7 h-7 text-pink-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-3 text-lg">
                    Redirigez vous vers le ministère concerné
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Vos informations sont protégées grâce à un système de connexion fiable.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-7 h-7 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-3 text-lg">
                    Créez un compte sécurisé
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Vos informations sont protégées grâce à un système de connexion fiable.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileText className="w-7 h-7 text-teal-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-3 text-lg">
                    Déposez et complétez votre démarche
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Formulaires clairs, pièces jointes faciles à télécharger.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Bell className="w-7 h-7 text-yellow-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-3 text-lg">
                    Suivez et recevez des notifications
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Soyez informé par mail ou SMS, jusqu'à validation finale.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProceduresSection;