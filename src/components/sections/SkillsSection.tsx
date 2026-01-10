import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useState } from 'react';

interface Skill {
  name: string;
  logo: string;
  tooltip: string;
}

interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend Technologies',
    icon: '🖥️',
    skills: [
      { name: 'HTML5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', tooltip: 'Semantic markup & accessibility' },
      { name: 'CSS3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', tooltip: 'Modern layouts & animations' },
      { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', tooltip: 'ES6+ & DOM manipulation' },
      { name: 'Angular', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg', tooltip: 'Enterprise SPA framework' },
    ],
  },
  {
    title: 'Programming & Scripting',
    icon: '🧠',
    skills: [
      { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', tooltip: 'Scripting & automation' },
      { name: 'DSA', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/thealgorithms/thealgorithms-original.svg', tooltip: 'Data Structures & Algorithms' },
    ],
  },
  {
    title: 'Python Libraries & Frameworks',
    icon: '🐍',
    skills: [
      { name: 'NumPy', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg', tooltip: 'Numerical computing' },
      { name: 'Pandas', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg', tooltip: 'Data manipulation & analysis' },
      { name: 'Matplotlib', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg', tooltip: 'Data visualization' },
      { name: 'Scikit-learn', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg', tooltip: 'Machine learning toolkit' },
    ],
  },
  {
    title: 'Databases & Storage',
    icon: '🗄️',
    skills: [
      { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', tooltip: 'Advanced relational database' },
      { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', tooltip: 'Popular SQL database' },
    ],
  },
  {
    title: 'Version Control',
    icon: '🔧',
    skills: [
      { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', tooltip: 'Distributed version control' },
      { name: 'GitLab', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg', tooltip: 'CI/CD & collaboration' },
    ],
  },
  {
    title: 'UI/UX & Design',
    icon: '🎨',
    skills: [
      { name: 'Figma', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', tooltip: 'UI prototyping & design' },
      { name: 'Canva', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg', tooltip: 'Quick graphics & branding' },
    ],
  },
  {
    title: '3D & Creative',
    icon: '🧊',
    skills: [
      { name: 'Blender', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg', tooltip: '3D modeling & animation' },
    ],
  },
];

const SkillCard = ({ skill, index }: { skill: Skill; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group"
    >
      <motion.div
        whileHover={{ scale: 1.08, y: -5 }}
        className="glass-card p-4 rounded-xl flex flex-col items-center gap-3 cursor-pointer transition-all duration-300 hover:neon-glow relative overflow-hidden"
      >
        {/* Glow background effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        />
        
        {/* Progress ring indicator */}
        <div className="relative">
          <svg className="w-16 h-16 -rotate-90" viewBox="0 0 64 64">
            <circle
              cx="32"
              cy="32"
              r="28"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              className="text-secondary"
            />
            <motion.circle
              cx="32"
              cy="32"
              r="28"
              fill="none"
              stroke="url(#skillGradient)"
              strokeWidth="3"
              strokeLinecap="round"
              initial={{ strokeDasharray: "0 176" }}
              whileInView={{ strokeDasharray: "150 176" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: index * 0.1 }}
            />
            <defs>
              <linearGradient id="skillGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(var(--primary))" />
                <stop offset="100%" stopColor="hsl(var(--accent))" />
              </linearGradient>
            </defs>
          </svg>
          
          {/* Logo */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={isHovered ? { rotate: 360 } : { rotate: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <img
              src={skill.logo}
              alt={skill.name}
              className="w-9 h-9 object-contain drop-shadow-lg"
              loading="lazy"
            />
          </motion.div>
        </div>

        {/* Skill name */}
        <span className="text-sm font-medium text-foreground/90 relative z-10">
          {skill.name}
        </span>

        {/* Tooltip */}
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.8 }}
          animate={isHovered ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 10, scale: 0.8 }}
          className="absolute -bottom-12 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-foreground text-background text-xs rounded-lg whitespace-nowrap z-20 shadow-lg"
        >
          {skill.tooltip}
          <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-foreground rotate-45" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const SkillsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="skills"
      className="relative py-24 md:py-32 bg-secondary/30 overflow-hidden"
      ref={ref}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium mb-2 tracking-wider uppercase text-sm">
            Technical Expertise
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A curated collection of technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <motion.span 
                  className="text-3xl"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                >
                  {category.icon}
                </motion.span>
                <h3 className="text-xl md:text-2xl font-display font-bold text-foreground">
                  {category.title}
                </h3>
                <div className="flex-1 h-px bg-gradient-to-r from-primary/50 to-transparent" />
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillCard 
                    key={skill.name} 
                    skill={skill} 
                    index={categoryIndex * 4 + skillIndex} 
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills Pills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 glass-card p-8 rounded-2xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl">💡</span>
            <h3 className="text-xl md:text-2xl font-display font-bold">Soft Skills & Methodologies</h3>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {['Communication', 'Business Thinking', 'Problem Solving', 'Team Collaboration', 'Agile Methodology', 'Leadership', 'Critical Thinking', 'Time Management'].map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 text-foreground border border-primary/20 text-sm font-medium hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 transition-all cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
