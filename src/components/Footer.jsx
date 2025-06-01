import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-800 dark:bg-gray-950 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p>{t('footer.text')}</p>
      </div>
    </footer>
  );
}

export default Footer;