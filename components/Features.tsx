
import React from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="bg-neutral-medium p-6 rounded-xl border border-neutral-light/20 transform transition-transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-blue/20">
    <div className="mb-4 text-brand-blue">{icon}</div>
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-neutral-text">{description}</p>
  </div>
);

const Features: React.FC = () => {
  const features = [
    {
      icon: <SleepIcon />,
      title: "Advanced Sleep Analysis",
      description: "Track sleep stages, efficiency, and latency. Get a detailed breakdown of your night's rest to improve recovery.",
    },
    {
      icon: <HeartIcon />,
      title: "24/7 Heart Rate Monitoring",
      description: "Monitor your heart rate and HRV (Heart Rate Variability) to understand your cardiovascular health and stress levels.",
    },
    {
      icon: <ActivityIcon />,
      title: "Activity Tracking",
      description: "Measure daily activity, steps, calorie burn, and sedentary time. Stay motivated to reach your fitness goals.",
    },
    {
      icon: <ReadinessIcon />,
      title: "Readiness Score",
      description: "Wake up to a personalized readiness score that tells you if you should push hard or take it easy for the day.",
    },
    {
      icon: <TemperatureIcon />,
      title: "Body Temperature",
      description: "Track your body temperature trends to detect potential signs of illness and understand your body's cycles.",
    },
    {
      icon: <StressIcon />,
      title: "Stress Management",
      description: "Identify moments of stress and relaxation throughout your day with continuous electrodermal activity (EDA) sensing.",
    },
  ];

  return (
    <section id="features" className="py-20 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Your Health, Simplified.</h2>
          <p className="text-lg text-neutral-text">
            Aura Ring packs state-of-the-art technology into a comfortable, stylish design to give you a holistic view of your well-being.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};


// SVG Icons
const SleepIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
  </svg>
);
const HeartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);
const ActivityIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);
const ReadinessIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);
const TemperatureIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7.014A8.001 8.001 0 0117.657 18.657zM9 13a2 2 0 114 0v6a2 2 0 11-4 0v-6z" />
  </svg>
);
const StressIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.672 15.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);


export default Features;
