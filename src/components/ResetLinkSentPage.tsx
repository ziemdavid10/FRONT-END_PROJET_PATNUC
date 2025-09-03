import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ResetLinkSentPage = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!password || !confirmPassword) {
      setError('Veuillez remplir les deux champs.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Les mots de passe ne correspondent pas.');
      return;
    }
    setError('');
    setSuccess(true);
    // Ici tu peux ajouter la logique d'appel API pour enregistrer le nouveau mot de passe
    setTimeout(() => {
      navigate('/connexion');
    }, 2000);
  };

  return (
    <div className="h-screen flex">
      {/* Left side - Image and content */}
      <div 
        className="hidden md:flex flex-1 relative bg-cover bg-center"
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
      
      {/* Right side - Form */}
      <div className="w-full max-w-md bg-white flex flex-col overflow-hidden min-h-screen mx-auto">
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
        
        {/* Formulaire de réinitialisation */}
        <div className="flex-1 flex flex-col items-center justify-center p-6">
          <div className="w-full max-w-sm">
            <h2 className="text-xl font-bold text-center text-gray-800 mb-4">Réinitialiser votre mot de passe</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="password"
                placeholder="Entrer le nouveau mot de passe"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="w-full px-4 py-3 border-2 border-blue-500 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="password"
                placeholder="Confirmer le mot de passe"
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-3 border-2 border-blue-500 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {error && <div className="text-red-500 text-center text-sm">{error}</div>}
              {success && <div className="text-green-600 text-center text-sm">Mot de passe réinitialisé avec succès !</div>}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2.5 rounded-full font-semibold hover:bg-blue-700 transition duration-200"
              >
                Enregistrer le nouveau mot de passe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetLinkSentPage;