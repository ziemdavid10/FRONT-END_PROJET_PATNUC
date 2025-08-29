import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, Lock, Eye, EyeOff, Mail, Phone, ChevronDown, Building, MapPin, Home } from 'lucide-react';

const LoginPage = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  
  // États du formulaire d’inscription
  const [formData, setFormData] = useState({
    userType: 'Personne physique',
    companyName: '',
    activityDomain: 'Domaine 1',
    location: '',
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });
  
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isUserTypeDropdownOpen, setIsUserTypeDropdownOpen] = useState(false);
  const [isDomainDropdownOpen, setIsDomainDropdownOpen] = useState(false);

  const userTypes = ['Personne physique', 'Personne morale'];
  const activityDomains = ['Domaine 1', 'Domaine 2'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSignup) {
      console.log('Signup attempt:', formData);
    } else {
      console.log('Login attempt:', { email, password });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleUserTypeChange = (type: string) => {
    setFormData(prev => ({ 
      ...prev, 
      userType: type,
      companyName: type === 'Personne physique' ? '' : prev.companyName,
      activityDomain: type === 'Personne physique' ? 'Domaine 1' : prev.activityDomain,
      location: type === 'Personne physique' ? '' : prev.location
    }));
    setIsUserTypeDropdownOpen(false);
  };

  const handleDomainChange = (domain: string) => {
    setFormData(prev => ({ ...prev, activityDomain: domain }));
    setIsDomainDropdownOpen(false);
  };

  const isCompanyFieldsEnabled = formData.userType === 'Personne morale';

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
      
      {/* Right side - Login/Signup form */}
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
        <div className={`flex-1 p-4 ${isSignup ? 'overflow-y-auto' : 'flex items-center justify-center'}`}>
          {!isSignup ? (
            // Login Form
            <div className="w-full max-w-sm">
              <h2 className="text-xl font-bold text-gray-800 mb-6 text-center">Connexion</h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Votre email*"
                    className="w-full pl-10 pr-4 py-2.5 border-2 border-blue-500 rounded-full focus:outline-none focus:border-blue-600 transition-colors"
                    required
                  />
                </div>
                
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Entrer votre mot de passe*"
                    className="w-full pl-10 pr-12 py-2.5 border-2 border-gray-300 rounded-full focus:outline-none focus:border-blue-600 transition-colors"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                    )}
                  </button>
                </div>
                
                <div className="text-right">
                  <Link to="/mot-de-passe-oublie" className="text-blue-600 hover:underline">
                    Mot de passe oublié ?
                  </Link>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2.5 rounded-full font-semibold hover:bg-blue-700 transition-colors"
                >
                  Se connecter
                </button>
                
                <div className="text-center text-sm text-gray-600">
                  Vous n'avez pas de compte ?{' '}
                  <button 
                    type="button"
                    onClick={() => setIsSignup(true)}
                    className="text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Inscrivez-vous maintenant
                  </button>
                </div>
              </form>
            </div>
          ) : (
            // Signup Form
            <div className="w-full max-w-sm mx-auto">
              <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">S'inscrire</h2>
              
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="relative">
                  <div 
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-full bg-gray-50 flex items-center justify-between cursor-pointer"
                    onClick={() => setIsUserTypeDropdownOpen(!isUserTypeDropdownOpen)}
                  >
                    <div className="flex items-center">
                      <User className="w-5 h-5 text-gray-400 mr-3" />
                      <span className="text-gray-700">{formData.userType}</span>
                    </div>
                    <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${isUserTypeDropdownOpen ? 'rotate-180' : ''}`} />
                  </div>
                  
                  {isUserTypeDropdownOpen && (
                    <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                      {userTypes.map((type) => (
                        <div
                          key={type}
                          className="px-4 py-3 hover:bg-gray-50 cursor-pointer"
                          onClick={() => handleUserTypeChange(type)}
                        >
                          {type}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="space-y-3">
                  <div className="relative">
                    <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="companyName"
                      placeholder="Nom de l'entreprise"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      disabled={!isCompanyFieldsEnabled}
                      className={`w-full pl-12 pr-4 py-2.5 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        !isCompanyFieldsEnabled ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-white'
                      }`}
                    />
                  </div>

                  <div className="relative">
                    <div 
                      className={`w-full px-4 py-2.5 border border-gray-300 rounded-full flex items-center justify-between cursor-pointer ${
                        !isCompanyFieldsEnabled ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-white'
                      }`}
                      onClick={() => isCompanyFieldsEnabled && setIsDomainDropdownOpen(!isDomainDropdownOpen)}
                    >
                      <div className="flex items-center">
                        <Building className="w-5 h-5 text-gray-400 mr-3" />
                        <span className={isCompanyFieldsEnabled ? 'text-gray-700' : 'text-gray-400'}>
                          {isCompanyFieldsEnabled ? formData.activityDomain : 'Domaine d\'activité'}
                        </span>
                      </div>
                      <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${isDomainDropdownOpen ? 'rotate-180' : ''}`} />
                    </div>
                    
                    {isDomainDropdownOpen && isCompanyFieldsEnabled && (
                      <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                        {activityDomains.map((domain) => (
                          <div
                            key={domain}
                            className="px-4 py-3 hover:bg-gray-50 cursor-pointer"
                            onClick={() => handleDomainChange(domain)}
                          >
                            {domain}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="location"
                      placeholder="Localisation ou siège"
                      value={formData.location}
                      onChange={handleInputChange}
                      disabled={!isCompanyFieldsEnabled}
                      className={`w-full pl-12 pr-4 py-2.5 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        !isCompanyFieldsEnabled ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-white'
                      }`}
                    />
                  </div>
                </div>

                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Nom complet*"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 py-2.5 border-2 border-blue-500 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>

                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email*"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 py-2.5 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>

                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Numéro de téléphone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 py-2.5 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Entrer votre mot de passe*"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-12 py-2.5 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>

                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    placeholder="Confirmer mot de passe*"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-12 py-2.5 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2.5 rounded-full font-semibold hover:bg-blue-700 transition duration-200"
                >
                  Suivant
                </button>

                <div className="text-center">
                  <span className="text-gray-600">Vous avez déjà un compte ? </span>
                  <button 
                    type="button"
                    onClick={() => setIsSignup(false)}
                    className="text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Connectez-vous
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;