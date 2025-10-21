
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-neutral-light/10 [mask-image:linear-gradient(to_bottom,white_5%,transparent_80%)]"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-[150%] sm:w-[100%] sm:h-[100%] rounded-full bg-brand-blue/10 blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-6 text-center animate-fade-in-up">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tighter mb-6">
          Unlock Your Potential.
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">From Your Fingertip.</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-neutral-text mb-10">
          The Aura Ring delivers personalized health insights 24/7, empowering you to live a healthier, more informed life.
        </p>
        <div className="flex justify-center gap-4">
          <a href="#pricing" className="bg-brand-blue hover:bg-brand-blue-light text-white font-bold py-3 px-8 rounded-full transition-transform transform hover:scale-105">
            Order Now
          </a>
          <a href="#features" className="bg-neutral-medium hover:bg-neutral-light text-white font-bold py-3 px-8 rounded-full transition-colors">
            Learn More
          </a>
        </div>
        <div className="mt-16 lg:mt-24">
            <img 
                src="https://picsum.photos/id/17/1200/600" 
                alt="Aura Ring on a finger" 
                className="mx-auto rounded-2xl shadow-2xl shadow-brand-blue/20 max-w-4xl w-full" 
            />
        </div>
      </div>
    </section>
  );
};

export default Hero;
