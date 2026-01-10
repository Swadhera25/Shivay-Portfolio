import { motion } from 'framer-motion';
import { GraduationCap, Target, Heart, Code } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const highlights = [
    {
      icon: Code,
      title: 'Frontend Developer',
      description: 'Building end-to-end solutions with modern technologies',
    },
    {
      icon: GraduationCap,
      title: 'Continuous Learner',
      description: 'Always exploring new technologies and methodologies',
    },
    {
      icon: Target,
      title: 'Business Mindset',
      description: 'Understanding the intersection of tech and business value',
    },
    {
      icon: Heart,
      title: 'Passionate Creator',
      description: 'Love building products that make a difference',
    },
  ];

  return (
    <section
      id="about"
      className="relative py-24 md:py-32"
      ref={ref}
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium mb-2 tracking-wider uppercase text-sm">
            Get To Know Me
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl md:text-3xl font-display font-bold mb-6">
              Crafting Digital Experiences with Purpose
            </h3>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Hi, I'm Shivay Wadhera, a software developer with a strong interest in Python, 
                frontend development, and UI/UX design, along with a creative inclination toward 
                graphic designing. I enjoy building applications that are visually appealing, 
                easy to use, and technically reliable.
              </p>
              
              <p>
                I have hands-on experience working with Python and modern frontend technologies, 
                and I'm currently exploring advanced fields such as Data Engineering and AI-driven 
                solutions. I enjoy experimenting with data, understanding how systems scale, and 
                learning how intelligent applications are built using real-world data.
              </p>
              
              <p>
                What drives me is the combination of logic and creativity—writing clean code while 
                also focusing on user experience and design. I believe good software is not just 
                functional, but intuitive and meaningful. I'm a continuous learner who enjoys 
                improving through projects, experimentation, and real-world problem solving.
              </p>

              <p>
                I'm looking for opportunities where I can grow as a developer, contribute to 
                impactful projects, and deepen my understanding of Python, data, AI, and modern 
                UI/UX practices.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              {[
                { value: '15+', label: 'Projects Completed' },
                { value: '10+', label: 'Technologies' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-display font-bold gradient-text mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Highlight Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="glass-card p-6 rounded-xl hover:neon-glow transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-display font-bold mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
