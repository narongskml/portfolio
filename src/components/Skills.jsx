import { useTranslation } from 'react-i18next';

function Skills() {
  const { t } = useTranslation();

  return (
      <section id="skills" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8 text-center fade-in">{t('skills.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {['skill1', 'skill2', 'skill3'].map((skill) => (
            <div key={skill} className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-md fade-in">
              <h3 className="text-xl font-semibold mb-2">{t(`skills.${skill}.title`)}</h3>
              <p className="text-gray-600 dark:text-gray-300">{t(`skills.${skill}.description`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;