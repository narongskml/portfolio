import { useTranslation } from 'react-i18next';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
import { LanguageContext } from '../context/LanguageContext';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { changeLanguage, getLocalizedPath } = useContext(LanguageContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
 
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLanguageChange = (lng) => {
    changeLanguage(lng);
    setIsMobileMenuOpen(false); // ปิดเมนูมือถือหลังเปลี่ยนภาษา
  };
  const navLinks = [
    { href: '/', label: t('navbar.home') },
    { href: '/about', label: t('navbar.about') },
    { href: '/portfolio', label: t('navbar.portfolio') },
    { href: '/skills', label: t('navbar.skills') },
    { href: '/contact', label: t('navbar.contact') },
  ];

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to={getLocalizedPath('/')} className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                {t('my.name')}
            </Link>
           
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={getLocalizedPath(link.href)}                
                className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400">
                {link.label}
              </Link>
            ))}
            <select
              onChange={(e) => handleLanguageChange(e.target.value)}
              className="border rounded p-1 bg-white dark:bg-gray-700 dark:text-white"
              value={i18n.language}
            >
              <option value="en">English</option>
              <option value="th">ไทย</option>
              <option value="zh">中文</option>
              <option value="ja">日本語</option>
            </select>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200"
              aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
          </div>
          {/* Mobile Hamburger Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-600 dark:text-gray-300 p-2"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800">
          <div className="flex flex-col space-y-4 px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={getLocalizedPath(link.href)}
                className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <select
              onChange={(e) => handleLanguageChange(e.target.value)}
              className="border rounded p-1 bg-white dark:bg-gray-700 dark:text-white"
              value={i18n.language}
            >
              <option value="en">English</option>
              <option value="th">ไทย</option>
              <option value="zh">中文</option>
              <option value="ja">日本語</option>
            </select>
            <button
              onClick={() => {
                toggleTheme();
                setIsMobileMenuOpen(false);
              }}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200 text-left"
              aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
            >
              {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;