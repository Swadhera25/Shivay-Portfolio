import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';

const quotes = [
  "Consistency creates mastery.",
  "Build today what you'll thank yourself for tomorrow.",
  "Small progress is still progress.",
  "Learning never stops for builders.",
  "Code with purpose, grow with patience.",
  "Discipline outperforms motivation.",
  "Every project makes you better.",
  "Dream big, start small, act now.",
  "The best time to start was yesterday. The next best time is now.",
  "Embrace the struggle—it's shaping your success.",
  "Your code is a reflection of your growth.",
  "Fail fast, learn faster, build fastest.",
  "Curiosity is the fuel for innovation.",
  "Great things are built one commit at a time.",
];

const QuotesSection = () => {
  const [currentQuote, setCurrentQuote] = useState(() => 
    quotes[Math.floor(Math.random() * quotes.length)]
  );
  const [isAnimating, setIsAnimating] = useState(false);

  const getRandomQuote = () => {
    setIsAnimating(true);
    let newQuote = currentQuote;
    while (newQuote === currentQuote) {
      newQuote = quotes[Math.floor(Math.random() * quotes.length)];
    }
    setTimeout(() => {
      setCurrentQuote(newQuote);
      setIsAnimating(false);
    }, 150);
  };

  return (
    <section className="relative py-16 md:py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="glass-card p-8 md:p-12 rounded-2xl relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-4 left-4 text-primary/20">
              <Sparkles className="w-8 h-8" />
            </div>
            <div className="absolute bottom-4 right-4 text-primary/20">
              <Sparkles className="w-8 h-8" />
            </div>

            {/* Quote */}
            <div className="min-h-[80px] flex items-center justify-center mb-6">
              <AnimatePresence mode="wait">
                <motion.blockquote
                  key={currentQuote}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="text-xl md:text-2xl lg:text-3xl font-display font-bold gradient-text italic"
                >
                  "{currentQuote}"
                </motion.blockquote>
              </AnimatePresence>
            </div>

            {/* Button */}
            <Button
              onClick={getRandomQuote}
              disabled={isAnimating}
              variant="outline"
              className="group gap-2 hover:neon-glow transition-all duration-300"
            >
              <RefreshCw 
                className={`w-4 h-4 transition-transform duration-300 ${
                  isAnimating ? 'animate-spin' : 'group-hover:rotate-180'
                }`} 
              />
              Inspire Me
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default QuotesSection;
