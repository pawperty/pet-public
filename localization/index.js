import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import RNLanguageDetector from '@os-team/i18next-react-native-language-detector';

i18next
  .use(RNLanguageDetector) // Add the language detector
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    supportedLngs: ['en', 'de', 'es', 'fr'],
    ns: [],
    defaultNS: undefined,
    compatibilityJSON: 'v3',
    resources: {
      en: {
        common: require('./locales/en/common.json'),
        feature: require('./locales/en/feature.json'),
        form: require('./locales/en/form.json'),
        model: require('./locales/en/model.json'),
        data: require('./locales/en/data.json'),
      },
      de: {
        common: require('./locales/de/common.json'),
        feature: require('./locales/de/feature.json'),
        form: require('./locales/de/form.json'),
        model: require('./locales/de/model.json'),
        data: require('./locales/de/data.json'),
      },
      fr: {
        common: require('./locales/fr/common.json'),
      },
    },

    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;
