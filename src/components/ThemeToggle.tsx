import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

const ThemeToggle = () => {
  const { theme, accentColor, toggleTheme, setAccentColor } = useTheme();

  const accentColors = [
    { name: 'cyan', color: 'bg-cyan-400' },
    { name: 'purple', color: 'bg-purple-500' },
    { name: 'blue', color: 'bg-blue-500' },
  ] as const;

  return (
    <div className="fixed top-20 right-4 z-50 flex flex-col items-end gap-3">
      {/* Theme Toggle */}
      <motion.button
        onClick={toggleTheme}
        className="glass-card p-3 rounded-full neon-glow hover:neon-glow-strong transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Toggle theme"
      >
        <motion.div
          initial={false}
          animate={{ rotate: theme === 'dark' ? 0 : 180 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          {theme === 'dark' ? (
            <Moon className="w-5 h-5 text-primary" />
          ) : (
            <Sun className="w-5 h-5 text-primary" />
          )}
        </motion.div>
      </motion.button>

      {/* Accent Color Picker - Vertical */}
      <div className="glass-card p-2 flex flex-col gap-2">
        {accentColors.map((accent) => (
          <motion.button
            key={accent.name}
            onClick={() => setAccentColor(accent.name)}
            className={`w-5 h-5 rounded-full ${accent.color} transition-all duration-300 ${
              accentColor === accent.name ? 'ring-2 ring-foreground ring-offset-2 ring-offset-background scale-110' : ''
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            aria-label={`Set ${accent.name} accent color`}
          />
        ))}
      </div>
    </div>
  );
};

export default ThemeToggle;
