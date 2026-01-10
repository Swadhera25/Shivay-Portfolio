import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';
type AccentColor = 'cyan' | 'purple' | 'blue';

interface ThemeContextType {
  theme: Theme;
  accentColor: AccentColor;
  toggleTheme: () => void;
  setAccentColor: (color: AccentColor) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const stored = localStorage.getItem('portfolio-theme');
    return (stored as Theme) || 'dark';
  });

  const [accentColor, setAccentColorState] = useState<AccentColor>(() => {
    const stored = localStorage.getItem('portfolio-accent');
    return (stored as AccentColor) || 'cyan';
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('accent-cyan', 'accent-purple', 'accent-blue');
    root.classList.add(`accent-${accentColor}`);
    localStorage.setItem('portfolio-accent', accentColor);
  }, [accentColor]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const setAccentColor = (color: AccentColor) => {
    setAccentColorState(color);
  };

  return (
    <ThemeContext.Provider value={{ theme, accentColor, toggleTheme, setAccentColor }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
