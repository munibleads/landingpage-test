
import React, { useState, useEffect } from 'react';

const LogoIcon: React.FC = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);


const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-neutral-dark/80 backdrop-blur-sm border-b border-neutral-light/20' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-2">
          <LogoIcon />
          <span className="text-xl font-bold text-white">Aura Ring</span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-neutral-text hover:text-white transition-colors">Features</a>
          <a href="#howitworks" className="text-neutral-text hover:text-white transition-colors">How It Works</a>
          <a href="#pricing" className="text-neutral-text hover:text-white transition-colors">Pricing</a>
          <a href="#faq" className="text-neutral-text hover:text-white transition-colors">FAQ</a>
        </nav>
        <a href="#pricing" className="hidden md:inline-block bg-brand-blue hover:bg-brand-blue-light text-white font-semibold py-2 px-6 rounded-full transition-colors">
          Order Now
        </a>
      </div>
    </header>
  );
};

export default Header;
