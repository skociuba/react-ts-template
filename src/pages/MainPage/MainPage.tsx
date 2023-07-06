import React from 'react';

import {useTranslationResource} from '../../utils/hooks/useTranslationResources';

const importer = (lng: string) =>
  import(/* webpackChunkName: "i18n/[request]" */ `./translations/${lng}`);
import {contentContainer} from './MainPage.style';
const MainPage = () => {
  useTranslationResource({
    ns: 'main',
    importer,
  });

  return <div className={contentContainer}>hello</div>;
};

export default MainPage;
