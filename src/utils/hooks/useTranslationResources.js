import {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';

export const useTranslationResource = ({ns = 'translations', importer}) => {
  const [loading, setLoading] = useState(false);
  const {i18n} = useTranslation();

  useEffect(() => {
    setLoading(true);
    importer(i18n.language)
      .then(({translations}) => translations)
      .then((translations) => {
        i18n.addResourceBundle(i18n.language, ns, translations);
        setLoading(false);
      })
      .catch(console.error);
  }, [i18n, i18n.language, importer, ns]);
  return {loading};
};
