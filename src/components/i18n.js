import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from '../translations/en.json';
import frTranslation from '../translations/fr.json';

i18n.use(initReactI18next).init({
    resources: {
        en: { translation: enTranslation },
        fr: { translation: frTranslation }
    },
    lng: 'en', // Langue par défaut
    fallbackLng: 'en', // Langue de secours si la langue préférée n'est pas disponible
    interpolation: {
        escapeValue: false
    }
});

export default i18n;