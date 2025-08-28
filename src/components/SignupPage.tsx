import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, Mail, Phone, Lock, Eye, EyeOff, ChevronDown, Building, MapPin } from 'lucide-react';

const SignupPage = () => {
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
  
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isUserTypeDropdownOpen, setIsUserTypeDropdownOpen] = useState(false);
  const [isDomainDropdownOpen, setIsDomainDropdownOpen] = useState(false);

  const userTypes = ['Personne physique', 'Personne morale'];
  const activityDomains = ['Domaine 1', 'Domaine 2'];

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
      // Reset company fields when switching to physical person
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const isCompanyFieldsEnabled = formData.userType === 'Personne morale';

  return (
    <div className="min-h-screen bg-white">
      {/* Header with color bar */}
      <div className="w-full h-2 bg-gradient-to-r from-green-500 via-red-500 to-yellow-500"></div>
      
      <div className="flex min-h-[calc(100vh-8px)]">
        {/* Left side - Image (hidden on mobile) */}
        <div className="hidden lg:flex lg:w-1/2 relative">
          <img 
            src="https://images.pexels.com/photos/974314/pexels-photo-974314.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop"
            alt="Agricultural field"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-900 bg-opacity-60 flex items-end p-12">
            <div className="text-white">
              <h2 className="text-3xl font-bold mb-4">
                Accédez à vos services administratifs<br />
                en ligne, suivez vos demandes en<br />
                temps réel et gagnez du temps.
              </h2>
              <div className="flex space-x-2 mt-8">
                <div className="w-8 h-2 bg-white rounded-full"></div>
                <div className="w-2 h-2 bg-white bg-opacity-50 rounded-full"></div>
                <div className="w-2 h-2 bg-white bg-opacity-50 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Form */}
        <div className="w-full lg:w-1/2 flex flex-col">
          {/* Logo section */}
          <div className="px-6 py-4 lg:px-12 lg:py-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                  <Building className="w-6 h-6 text-white" />
                </div>
                <div className="w-12 h-12 bg-gray-600 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
              </div>
              <h1 className="text-xl font-bold text-gray-800">Plateforme de téléprocédures</h1>
            </div>

            {/* Form */}
            <div className="max-w-md mx-auto">
              <h2 className="text-xl font-bold text-center text-gray-800 mb-6">S'inscrire</h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* User Type Dropdown */}
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

                {/* Company Fields - Only visible for Personne morale */}
                <div className="space-y-3">
                  {/* Company Name */}
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

                  {/* Activity Domain Dropdown */}
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

                  {/* Location */}
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

                {/* Full Name */}
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

                {/* Email */}
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

                {/* Phone */}
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

                {/* Password */}
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

                {/* Confirm Password */}
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

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2.5 rounded-full font-semibold hover:bg-blue-700 transition duration-200"
                >
                  Suivant
                </button>

                {/* Login Link */}
                <div className="text-center">
                  <span className="text-gray-600">Vous avez déjà un compte ? </span>
                  <Link to="/login" className="text-blue-600 hover:text-blue-700 font-medium">
                    Connectez-vous
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;