import { useRef } from 'react';
import { useTranslation } from 'react-i18next';


function Contact() {
  const { t } = useTranslation();
  const form = useRef();
  return (
     <section id="contact" className="bg-gradient-to-r from-slate-500 to-slate-800 dark:bg-slate-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-8 fade-in">{t('contact.title')}</h2>
        <p className="text-lg mb-6 fade-in">{t('contact.subtitle')}</p>        
        <div className="flex justify-center space-x-4 mt-6">
          <a href="mailto:narong.skml@gmail.com" className="bg-white text-indigo-600 dark:bg-gray-800 dark:text-indigo-400 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 dark:hover:bg-gray-700 fade-in">
            {t('contact.email')}
          </a>
          <a href="https://www.linkedin.com/in/narong-sungkhamalai/" className="bg-white text-indigo-600 dark:bg-gray-800 dark:text-indigo-400 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 dark:hover:bg-gray-700 fade-in">
            {t('contact.linkedin')}
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;