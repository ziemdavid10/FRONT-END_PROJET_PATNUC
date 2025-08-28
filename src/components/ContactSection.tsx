import React from 'react';
import { HelpCircle } from 'lucide-react';

const ContactSection = () => {
  return (
    <div className="bg-green-600 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8 leading-tight">
              Vous avez des questions, un souci sur une démarche particulière ?
            </h2>
            <button className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-all duration-300 shadow-lg hover:shadow-xl">
              Contacter l'assistance
            </button>
          </div>
          <div className="hidden lg:block ml-12">
            <HelpCircle className="w-32 h-32 text-green-300" strokeWidth={1} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;