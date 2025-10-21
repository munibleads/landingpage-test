
import React from 'react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <RingIcon />,
      title: "Wear The Ring",
      description: "Comfortable, durable, and stylish. Wear it 24/7 on any finger to continuously collect your health data.",
    },
    {
      icon: <SyncIcon />,
      title: "Sync With The App",
      description: "Your data syncs seamlessly to the Aura app via Bluetooth, providing you with real-time updates.",
    },
    {
      icon: <ChartIcon />,
      title: "Get Actionable Insights",
      description: "Translate your data into easy-to-understand scores and trends to make informed decisions about your health.",
    },
  ];

  return (
    <section id="howitworks" className="py-20 lg:py-32 bg-neutral-medium">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Effortless Tracking in 3 Simple Steps</h2>
        </div>
        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-neutral-light/50 -translate-y-1/2 -z-0"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center bg-neutral-dark rounded-full border-2 border-brand-blue">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{`Step ${index + 1}: ${step.title}`}</h3>
                <p className="text-neutral-text">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// SVG Icons
const RingIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.5 17a3.5 3.5 0 110-7 3.5 3.5 0 010 7zm0 0l-1.5-1.5m1.5 1.5l1.5-1.5m-1.5-4.5a3.5 3.5 0 00-3.5 3.5h7a3.5 3.5 0 00-3.5-3.5z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 110-18 9 9 0 010 18z" />
  </svg>
);
const SyncIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2zM5 12h.01M19 12h.01M5 15h.01M19 15h.01M5 9h.01M19 9h.01" />
  </svg>
);
const ChartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
  </svg>
);

export default HowItWorks;
