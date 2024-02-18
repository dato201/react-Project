import { useTranslation } from 'react-i18next';
import './atoms/styles/_global.css';

const App = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
    <button>{t('hello world')}</button>
    </>
  )
}

export default App
