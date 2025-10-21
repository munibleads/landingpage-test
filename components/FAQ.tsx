
import React, { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-neutral-light/30">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left py-6"
      >
        <span className="text-lg font-medium text-white">{question}</span>
        <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`}>
          <PlusIcon />
        </span>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
          <p className="pb-6 text-neutral-text">{answer}</p>
        </div>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "What does the Aura Ring track?",
      answer: "The Aura Ring tracks key health signals including sleep stages (Deep, Light, REM), heart rate, heart rate variability (HRV), body temperature, respiratory rate, and daily activity levels (steps, calories, and sedentary time).",
    },
    {
      question: "Is the ring waterproof?",
      answer: "Yes, the Aura Ring is water-resistant up to 100 meters (328 feet). You can wear it while showering, swimming, and snorkeling. However, it is not recommended for scuba diving.",
    },
    {
      question: "How long does the battery last?",
      answer: "The Aura Ring has a battery life of up to 7 days on a full charge. A full charge takes approximately 60-90 minutes using the included wireless charger.",
    },
    {
      question: "What materials is the ring made of?",
      answer: "The ring is crafted from durable and lightweight titanium with a PVD coating for scratch resistance. The inner molding is a non-allergenic, seamless medical-grade polymer, ensuring maximum comfort.",
    },
    {
        question: "Does it work with both iOS and Android?",
        answer: "Absolutely. The Aura app is available for free on both the Apple App Store (for iOS) and the Google Play Store (for Android). It syncs with your ring via a low-energy Bluetooth connection.",
    },
  ];

  return (
    <section id="faq" className="py-20 lg:py-32">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

const PlusIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-neutral-text" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
    </svg>
);

export default FAQ;
