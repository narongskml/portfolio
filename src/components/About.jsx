import { useTranslation } from 'react-i18next';

function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8 text-center fade-in">{t('about.title')}</h2>
        <div className="flex flex-col md:flex-row items-center">
          <img src="/me_256.jpg" 
          srcSet="/me_150.jpg 480w, /me_384.jpg 800w"
          sizes="(max-width: 480px) 100vw,(max-width: 1024px) 50vw, 800px"
          alt="Profile" className="w-64 h-64 rounded-full mb-6 md:mb-0 md:mr-8 fade-in" />
          <p className="text-lg text-gray-600 dark:text-gray-300 fade-in" dangerouslySetInnerHTML={{ __html: t('about.description') }} />
        </div>
      </div>
    </section>
  );
}

export default About;