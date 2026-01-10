import { motion } from 'framer-motion';
import { ArrowUp, Heart, Code } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToTop();
            }}
            className="font-display text-2xl font-bold gradient-text"
            whileHover={{ scale: 1.05 }}
          >
            Shivay Wadhera
          </motion.a>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-muted-foreground text-sm flex items-center justify-center gap-2">
              <span>© {currentYear} Shivay Wadhera. All rights reserved.</span>
            </p>
            <p className="text-muted-foreground text-sm flex items-center justify-center gap-1 mt-1">
              Built with <Heart className="w-4 h-4 text-destructive fill-destructive" /> and{' '}
              <Code className="w-4 h-4 text-primary" /> technology
            </p>
          </div>

          {/* Back to Top */}
          <motion.button
            onClick={scrollToTop}
            className="glass-card p-3 rounded-full hover:neon-glow transition-all duration-300"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5 text-primary" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
