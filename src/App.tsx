import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProceduresSection from './components/ProceduresSection';
import NewEraSection from './components/NewEraSection';
import WhyPlatformSection from './components/WhyPlatformSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import LoginPage from './components/LoginPage';
import ForgotPasswordPage from './components/ForgotPasswordPage';
import VerifyCodePage from './components/VerifyCodePage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <HeroSection />
              <ProceduresSection />
              <NewEraSection />
              <WhyPlatformSection />
              <ContactSection />
              <Footer />
            </>
          } />
          <Route path="/connexion" element={<LoginPage />} />
          <Route path="/mot-de-passe-oublie" element={<ForgotPasswordPage />} />
          <Route path="/verification-code" element={<VerifyCodePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;