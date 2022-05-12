import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { english, ukrainian } from './data/dictionary';

const fallbackLng = ['en'];
const availableLanguages = ['en', 'ua'];

const resources = {
    en: {
        translation: {...english}
    },
    ua: {
        translation: {...ukrainian}
    }
};

i18n
    //.use(LanguageDetector) // detect user language
    .use(initReactI18next) // pass the i18n instance to react-i18next.
    .init({
        resources,
        lng: "ua",
        fallbackLng, // fallback language is english.

        detection: {
            checkWhitelist: true, // options for language detection
        },

        debug: false,

        whitelist: availableLanguages,
    });

export default i18n;