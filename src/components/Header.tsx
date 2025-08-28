import React from 'react';
import { ChevronDown, Menu } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      {/* Top institutional bar with ministry logos */}
      <div className="bg-gray-50 py-2 border-b">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center space-x-6">
            {/* République du Cameroun logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-red-600 rounded-full"></div>
              </div>
              <span className="text-xs text-gray-600">République du Cameroun</span>
            </div>
            
            {/* MINADER logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-600 rounded flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded"></div>
              </div>
              <span className="text-xs text-gray-600">MINADER</span>
            </div>
            
            {/* MINEPIA logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded"></div>
              </div>
              <span className="text-xs text-gray-600">MINEPIA</span>
            </div>
            
            {/* PATNDIG logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded"></div>
              </div>
              <span className="text-xs text-gray-600">PATNDIG</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <span>🇫🇷 Français</span>
            <ChevronDown className="h-4 w-4" />
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <span className="font-semibold text-blue-600 border-b-2 border-blue-600 pb-1">Accueil</span>
            <div className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 cursor-pointer">
              <span>Sites officiels</span>
              <ChevronDown className="h-4 w-4" />
            </div>
          </div>
          <Menu className="h-6 w-6 text-gray-600 md:hidden cursor-pointer" />
        </div>
      </nav>
    </header>
  );
};

export default Header;