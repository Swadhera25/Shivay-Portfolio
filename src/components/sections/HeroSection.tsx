import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profilePhoto from '@/assets/profile-photo.jpeg';

const HeroSection = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-30" />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Animated border */}
              <div className="absolute inset-0 rounded-full animate-border-spin">
                <div className="w-full h-full rounded-full bg-gradient-to-r from-primary via-accent to-primary" />
              </div>
              
              {/* Inner container */}
              <div className="absolute inset-2 rounded-full bg-background" />
              
              {/* Profile image */}
              <div className="absolute inset-4 rounded-full overflow-hidden">
                <img 
                  src={profilePhoto} 
                  alt="Shivay Wadhera" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
              
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full animate-glow-pulse" />
            </div>
            
            {/* Floating elements */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 -right-4 w-8 h-8 rounded-lg bg-primary/20 backdrop-blur-sm"
            />
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-4 -left-4 w-6 h-6 rounded-full bg-accent/20 backdrop-blur-sm"
            />
          </motion.div>

          {/* Content */}
          <div className="text-center lg:text-left max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <p className="text-primary font-medium mb-2 tracking-wider uppercase text-sm">
                Software Developer
              </p>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6"
            >
              Hi, I'm{' '}
              <span className="gradient-text">SHIVAY WADHERA</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed"
            >
               A developer passionate about Python, frontend development, and UI/UX design, with a creative edge in graphic designing. I’m currently exploring Data Engineering and AI-driven solutions, focusing on building clean, scalable, and user-centric applications.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
            >
              <Button
                onClick={scrollToProjects}
                className="group bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-6 text-lg font-medium neon-glow hover:neon-glow-strong transition-all"
              >
                View Projects
                <ArrowDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </Button>
              
              <Button
                onClick={scrollToContact}
                variant="outline"
                className="border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary px-6 py-6 text-lg font-medium transition-all"
              >
                Contact Me
                <Mail className="ml-2 w-5 h-5" />
              </Button>
               <a
    href="https://drive.google.com/file/d/1U6OB60W6PRZ46wuGZO3Rdy7vMsWN1zZ9/view?usp=sharing"
    target="_blank"
    rel="noopener noreferrer"
  >
              <Button
                variant="ghost"
                className="text-muted-foreground hover:text-foreground hover:bg-secondary px-6 py-6 text-lg font-medium transition-all"
              >
                <Download className="mr-2 w-5 h-5" />
                Resume
              </Button>
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex gap-4 justify-center lg:justify-start"
            >
              {[
                { icon: Github, href: 'https://github.com/Swadhera25', label: 'GitHub' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/shivaywadhera/', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:wadhera.shivay25@gmail.com', label: 'Email' },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card p-3 rounded-lg hover:neon-glow transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-muted-foreground"
          >
            <span className="text-sm">Scroll Down</span>
            <ArrowDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
