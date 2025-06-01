import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

function Hero() {
  const { t } = useTranslation();
  return (
    <section id="home" className="bg-gradient-to-r from-slate-900 to-slate-700 dark:bg-gradient-to-r from-zinc-600 to-slate-700 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-4 fade-in"
        >
          {t('hero.title')}
        </motion.h2>
        <p className="text-lg mb-6 fade-in">{t('hero.subtitle')}</p>
        <a href="#portfolio" className="bg-white text-indigo-600 dark:bg-gray-800 dark:text-indigo-400 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 dark:hover:bg-gray-700 fade-in">
          {t('hero.cta')}
        </a>
      </div>
    </section>
  );
}

export default Hero;