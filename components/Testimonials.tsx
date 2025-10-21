
import React from 'react';

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  avatarUrl: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, name, role, avatarUrl }) => (
  <div className="bg-neutral-medium p-8 rounded-xl border border-neutral-light/20 flex flex-col h-full">
    <p className="text-neutral-text text-lg italic mb-6 flex-grow">"{quote}"</p>
    <div className="flex items-center">
      <img src={avatarUrl} alt={name} className="w-12 h-12 rounded-full mr-4" />
      <div>
        <p className="font-bold text-white">{name}</p>
        <p className="text-sm text-brand-blue-light">{role}</p>
      </div>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "The Aura Ring has completely changed how I approach my fitness. The readiness score is a game-changer for my training.",
      name: "Sarah L.",
      role: "Athlete & Fitness Coach",
      avatarUrl: "https://picsum.photos/seed/sarah/100/100",
    },
    {
      quote: "As someone who struggled with sleep for years, the detailed analysis helped me make small changes that had a huge impact. I've never felt more rested.",
      name: "Mark T.",
      role: "Software Engineer",
      avatarUrl: "https://picsum.photos/seed/mark/100/100",
    },
    {
      quote: "I love the sleek design. It doesn't scream 'fitness tracker'. It's a beautiful piece of jewelry that also happens to be incredibly smart.",
      name: "Jessica Y.",
      role: "UX Designer",
      avatarUrl: "https://picsum.photos/seed/jessica/100/100",
    },
  ];

  return (
    <section id="testimonials" className="py-20 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Loved by Users Worldwide</h2>
          <p className="text-lg text-neutral-text">
            Don't just take our word for it. Here's what our community is saying about the Aura Ring.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
