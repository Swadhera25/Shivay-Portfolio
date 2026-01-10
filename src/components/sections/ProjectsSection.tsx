import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface Project {
  title: string;
  description: string;
  techStack: string[];
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: 'AyurVerse',
    description: 'An innovative platform exploring Ayurvedic wellness solutions with modern technology integration.',
    techStack: ['React', 'Node.js', 'MongoDB'],
    featured: true,
    githubUrl: 'https://github.com/Swadhera25/AyurVerse.git',
  },
  {
    title: 'Movie Recommendation System',
    description: 'An intelligent movie recommendation engine using machine learning algorithms to suggest personalized movie choices.',
    techStack: ['Python', 'Machine Learning', 'Data Science'],
    featured: true,
    githubUrl: 'https://github.com/Swadhera25/Movie-Recommendation-System.git',
  },
  {
    title: 'Electronic Health Record (EHR)',
    description: 'A comprehensive healthcare management system for patient records, appointments, and medical data. Currently in development.',
    techStack: ['React', 'Node.js', 'PostgreSQL'],
    githubUrl: 'https://github.com/kushalt03/EHR.git',
  },
  {
    title: '3D Rock Paper Scissors',
    description: 'An interactive 3D implementation of the classic Rock Paper Scissors game with immersive visuals.',
    techStack: ['JavaScript', '3D Graphics', 'Game Dev'],
    githubUrl: 'https://github.com/Swadhera25/Rock-Paper-Scissors-.git',
  },
];

const ProjectsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="projects"
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
            My Work
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className={`group glass-card rounded-xl overflow-hidden hover:neon-glow transition-all duration-300 ${
                project.featured ? 'md:col-span-1 lg:col-span-1' : ''
              }`}
            >
              {/* Project Image/Placeholder */}
              <div className="h-48 bg-gradient-to-br from-primary/20 via-accent/10 to-secondary flex items-center justify-center relative overflow-hidden">
                <div className="text-4xl font-display font-bold gradient-text opacity-50 group-hover:opacity-100 transition-opacity">
                  {project.title.split(' ').map(word => word[0]).join('')}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                
                {project.featured && (
                  <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium border border-primary/30">
                    Featured
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-display font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs rounded-md bg-secondary text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  {project.liveUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-primary/30 hover:bg-primary/10 hover:border-primary"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-primary/30 hover:bg-primary/10 hover:border-primary"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More on GitHub */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            size="lg"
            className="border-primary/30 hover:bg-primary/10 hover:border-primary"
            asChild
          >
            <a href="https://github.com/Swadhera25" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              View More Projects on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
