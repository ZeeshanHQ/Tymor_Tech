import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const testimonials = [
  {
    quote:
      "Tymor LFTC's holographic displays transformed our retail experience. Customers can now interact with products in 3D before purchasing, resulting in a 40% increase in sales.",
    name: "Sarah Chen",
    designation: "Retail Director at Luxe Fashion",
    src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&h=500&fit=crop&crop=face",
  },
  {
    quote:
      "The educational impact is incredible. Our students can explore historical artifacts and scientific models in life-size 3D, making learning truly immersive.",
    name: "Dr. James Wilson",
    designation: "Dean of Innovation at Stanford",
    src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&h=500&fit=crop&crop=face",
  },
  {
    quote:
      "Our entertainment venue has become the talk of the town. The Holobox technology creates experiences that visitors have never seen before.",
    name: "Maria Santos",
    designation: "CEO at Immersive Entertainment",
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&h=500&fit=crop&crop=face",
  },
  {
    quote:
      "The AI-powered hologram rendering is flawless. We use it for product launches and the visual impact on our audience is extraordinary.",
    name: "David Kim",
    designation: "Marketing Director at TechVision",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop&crop=face",
  },
  {
    quote:
      "Setup was seamless and the support team is exceptional. The ROI on our holographic installations exceeded all expectations.",
    name: "Emma Thompson",
    designation: "CTO at Future Spaces",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&h=500&fit=crop&crop=face",
  },
];

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};

const AnimatedTestimonials = ({
  testimonials,
  autoplay = true,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = React.useCallback(() => {
    setActive((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, [autoplay, handleNext]);

  const isActive = (index: number) => index === active;

  const getRotation = (index: number) => {
    const rotations = ['3deg', '-4deg', '5deg', '-3deg', '4deg'];
    return rotations[index % rotations.length];
  };

  return (
    <div className="mx-auto max-w-sm px-4 py-20 font-sans antialiased md:max-w-4xl md:px-8 lg:px-12">
      <div className="relative grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-20">
        <div className="flex items-center justify-center">
            <div className="relative h-80 w-full max-w-xs">
              <AnimatePresence>
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={testimonial.src}
                    initial={{ opacity: 0, scale: 0.9, y: 50, rotate: getRotation(index) }}
                    animate={{
                      opacity: isActive(index) ? 1 : 0.5,
                      scale: isActive(index) ? 1 : 0.9,
                      y: isActive(index) ? 0 : 20,
                      zIndex: isActive(index) ? testimonials.length : testimonials.length - Math.abs(index - active),
                      rotate: isActive(index) ? '0deg' : getRotation(index),
                    }}
                    exit={{ opacity: 0, scale: 0.9, y: -50 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="absolute inset-0 origin-bottom"
                    style={{ perspective: '1000px' }}
                  >
                    <img
                      src={testimonial.src}
                      alt={testimonial.name}
                      width={500}
                      height={500}
                      draggable={false}
                      className="h-full w-full rounded-3xl object-cover shadow-2xl"
                      onError={(e) => {
                        e.currentTarget.src = `https://placehold.co/500x500/e2e8f0/64748b?text=${testimonial.name.charAt(0)}`;
                        e.currentTarget.onerror = null;
                      }}
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
        </div>

        <div className="flex flex-col justify-center py-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="flex flex-col justify-between"
            >
                <div>
                    <h3 className="text-2xl font-bold text-foreground">
                        {testimonials[active].name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                        {testimonials[active].designation}
                    </p>
                    <motion.p className="mt-8 text-lg text-foreground/90">
                        "{testimonials[active].quote}"
                    </motion.p>
                </div>
            </motion.div>
          </AnimatePresence>
          <div className="flex gap-4 pt-12">
            <button
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className="group flex h-10 w-10 items-center justify-center rounded-full bg-muted transition-colors hover:bg-muted/80 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            >
              <ArrowLeft className="h-5 w-5 text-foreground transition-transform duration-300 group-hover:-translate-x-1" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next testimonial"
              className="group flex h-10 w-10 items-center justify-center rounded-full bg-muted transition-colors hover:bg-muted/80 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            >
              <ArrowRight className="h-5 w-5 text-foreground transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

function AnimatedTestimonialsDemo() {
  return <AnimatedTestimonials testimonials={testimonials} />;
}

export function Component() {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-background">
        <style>
            {`
                @keyframes animate-grid {
                    0% { background-position: 0% 50%; }
                    100% { background-position: 100% 50%; }
                }
                .animated-grid {
                    width: 200%;
                    height: 200%;
                    background-image: 
                        linear-gradient(to right, #1e293b 1px, transparent 1px), 
                        linear-gradient(to bottom, #1e293b 1px, transparent 1px);
                    background-size: 3rem 3rem;
                    animation: animate-grid 40s linear infinite alternate;
                }
            `}
        </style>
        <div className="animated-grid absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10" />
        
        <div className="z-10">
            <AnimatedTestimonialsDemo />
        </div>
    </div>
  );
}
