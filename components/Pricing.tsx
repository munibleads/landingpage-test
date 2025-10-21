
import React from 'react';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-20 lg:py-32 bg-neutral-medium">
      <div className="container mx-auto px-6">
        <div className="max-w-md mx-auto bg-neutral-dark rounded-2xl border border-brand-blue/50 shadow-2xl shadow-brand-blue/20 p-8 lg:p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-2">Aura Ring</h2>
          <p className="text-neutral-text mb-6">One-time purchase. Lifetime insights.</p>
          <div className="my-8">
            <span className="text-5xl font-extrabold text-white">$299</span>
            <span className="text-neutral-text"> USD</span>
          </div>
          <ul className="text-left space-y-4 mb-10">
            <li className="flex items-center">
              <CheckIcon />
              The Aura Ring in your choice of color
            </li>
            <li className="flex items-center">
              <CheckIcon />
              Wireless USB-C Charger
            </li>
            <li className="flex items-center">
              <CheckIcon />
              Free Lifetime Access to the Aura App
            </li>
            <li className="flex items-center">
              <CheckIcon />
              2-Year Warranty
            </li>
          </ul>
          <a href="#" className="w-full block bg-brand-blue hover:bg-brand-blue-light text-white font-bold py-4 px-8 rounded-full text-lg transition-transform transform hover:scale-105">
            Buy Now
          </a>
          <p className="text-xs text-neutral-light mt-4">30-day money-back guarantee.</p>
        </div>
      </div>
    </section>
  );
};

const CheckIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-brand-blue flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
);


export default Pricing;
