import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { User, Building, MapPin, Mail, Home } from 'lucide-react';

const VerifyCodePage = () => {
  const [code, setCode] = useState(['', '', '', '']);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const inputs = [useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null)];

  const handleChange = (index: number, value: string) => {
    if (!/^\d?$/.test(value)) return; // n'accepte que les chiffres
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    // Passe au champ suivant si un chiffre est saisi
    if (value && index < 3) {
      inputs[index + 1].current?.focus();
    }
    // Revient au champ précédent si effacé
    if (!value && index > 0) {
      inputs[index - 1].current?.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (code.some(c => c === '')) {
      setError('Veuillez saisir le code complet.');
      return;
    }
    setError('');
    // Redirection vers la page de confirmation après vérification
    navigate('/reset-link-sent');
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
        
        {/* Form container */}
        <div className="flex-1 flex items-center justify-center p-4">
          <div className="w-full max-w-sm">
            <h2 className="text-xl font-bold text-center text-gray-800 mb-4">Vérification du code</h2>
            <p className="text-gray-600 mb-6 text-center">
              Nous avons envoyé un code à votre adresse e-mail.<br />
              Veuillez saisir le code à 4 chiffres pour continuer.
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex justify-center space-x-3 mb-2">
                {code.map((value, idx) => (
                  <input
                    key={idx}
                    ref={inputs[idx]}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={value}
                    onChange={e => handleChange(idx, e.target.value)}
                    className="w-12 h-12 text-center text-2xl border-2 border-blue-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  />
                ))}
              </div>
              {error && <div className="text-red-500 text-center text-sm">{error}</div>}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2.5 rounded-full font-semibold hover:bg-blue-700 transition duration-200"
              >
                Vérifier le code
              </button>
              <div className="text-center">
                <Link to="/mot-de-passe-oublie" className="text-blue-600 hover:text-blue-700 font-medium">
                  Renvoyer le code
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyCodePage;