import { useTranslation } from 'react-i18next';

function Portfolio() {
  const { t } = useTranslation();

  return (
    <section id="portfolio" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8 text-center fade-in">{t('portfolio.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {['project1', 'project2', 'project3'].map((project) => (
            <div key={project} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md fade-in">
              <h3 className="text-xl font-semibold mb-2">{t(`portfolio.${project}.title`)}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{t(`portfolio.${project}.description`)}</p>
              <a href={t(`portfolio.${project}.linkurl`)} className="text-indigo-600 dark:text-indigo-400 hover:underline">{t(`portfolio.${project}.link`)}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;