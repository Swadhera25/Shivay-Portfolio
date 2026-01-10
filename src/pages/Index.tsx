import { ThemeProvider } from '@/contexts/ThemeContext';
import ThemeToggle from '@/components/ThemeToggle';
import Navbar from '@/components/Navbar';
import ParticleBackground from '@/components/ParticleBackground';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import QuotesSection from '@/components/sections/QuotesSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import GamesSection from '@/components/sections/GamesSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet';

const Index = () => {
  return (
    <ThemeProvider>
      <Helmet>
        <title>Shivay Wadhera | Software Developer Portfolio</title>
        <meta 
          name="description" 
          content="Shivay Wadhera - A passionate software developer with a business mindset. Specializing in Angular, ASP.NET Core, Azure AI, and full-stack development." 
        />
        <meta name="keywords" content="Shivay Wadhera, Software Developer, Full Stack Developer, Angular, ASP.NET Core, Azure, Portfolio" />
        <link rel="canonical" href="https://shivaywadhera.com" />
      </Helmet>
      
      <div className="relative min-h-screen overflow-x-hidden">
        <ParticleBackground />
        <Navbar />
        <ThemeToggle />
        
        <main>
          <HeroSection />
          <QuotesSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <GamesSection />
          <ContactSection />
        </main>
        
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
