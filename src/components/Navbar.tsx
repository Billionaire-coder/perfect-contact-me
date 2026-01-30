import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../utils/ThemeContext';

const Navbar = () => {
  const { currentTheme, setCurrentTheme, theme } = useTheme();
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll position for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    let currTheme = (currentTheme === 'dark' ? 'light' : 'dark');
    window.localStorage.setItem('theme', currTheme);
    setCurrentTheme(currTheme);
  };

  return (
    <>
      <motion.nav
        className={`fixed w-full z-50 transition-all duration-300 ${scrolled || 'bg-transparent'
          } ${scrolled ? 'shadow-lg' : ''}`}
        animate={{
          backdropFilter: scrolled ? "blur(10px)" : "blur(0px)",
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Empty div to balance the flex layout since Logo is removed */}
            <div></div>

            {/* Theme Toggle */}
            <div className="flex items-center space-x-4">
              <motion.button
                onClick={toggleTheme}
                className={`${theme.text} hover:opacity-75 p-2 rounded-full relative overflow-hidden`}
                aria-label={`Switch to ${currentTheme === 'dark' ? 'light' : 'dark'} mode`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  initial={false}
                  animate={{ rotate: currentTheme === 'dark' ? 0 : 360 }}
                  transition={{ type: "spring", stiffness: 200, damping: 10 }}
                >
                  {currentTheme === 'dark' ? (
                    <Sun className="w-5 h-5" />
                  ) : (
                    <Moon className="w-5 h-5" />
                  )}
                </motion.div>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;