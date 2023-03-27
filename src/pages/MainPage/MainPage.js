import React from 'react';
import {IS_STAFF} from 'config/constants';
import {useTranslation} from 'react-i18next';
import {useTranslationResource} from 'utils/hooks/useTranslationResources';

const importer = (lng) => import(/* webpackChunkName: "i18n/[request]" */ `./translations/${lng}`);

import {contentContainer} from './MainPage.style';
const MainPage = () => {
  const {t: translate} = useTranslation();

  const number = 6;
  useTranslationResource({
    ns: 'main',
    importer,
  });

  return (
    <div className={contentContainer}>
      {IS_STAFF ? <div>MAIN PAGE for staff</div> : <div>MAIN PAGE for customer</div>}
      <p />
      Translation using variable:
      <p />
      {translate('main:hello guest', {number})}
    </div>
  );
};

export default MainPage;
