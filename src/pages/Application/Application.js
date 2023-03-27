import React, {Suspense, useLayoutEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {shared} from 'sharedConstants';
import {Cell, Grid, Row} from '@material/react-layout-grid';
import {media, useMedia} from 'components/Media';
import Button from '@material/react-button';
import {useTranslation} from 'react-i18next';
import {useTranslationResource} from 'utils/hooks/useTranslationResources';

import Menu from './Menu/Menu';
import {appCheckConfig} from './actions';
import {applicationWrapper, mobileApplicationWrapper} from './Application.style';

const importer = (lng) => import(/* webpackChunkName: "i18n/[request]" */ `./translations/${lng}`);

export const handleNavigate = (navigate, to) => {
  const toElements = to?.split(':') || [];

  if (toElements.includes('http') || toElements.includes('https')) {
    window.open(to, '_blank');
  } else {
    navigate(to);
  }
};

const Application = ({children}) => {
  const {t: translate, i18n} = useTranslation();
  const [checked, setChecked] = useState(true);
  const isMobile = useMedia(media.device.mobile);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const config = useSelector((state) => state.application.config);

  useTranslationResource({
    ns: 'application',
    importer,
  });

  useLayoutEffect(() => {
    if (!config || !('urls' in config)) {
      dispatch(appCheckConfig());
    }
  });

  const handleContent = () => {
    if (checked) {
      setChecked(!checked);
    } else {
      setChecked(!checked);
    }
  };
  const handleNavigation = (to) => {
    handleNavigate(navigate, to);
    handleContent();
  };

  const headerData = {
    ...shared.header,
    menu: {
      ...shared.header.menu,
      primary: [
        ...shared.header.menu.primary.map(
          (menuItem) =>
            menuItem.showFor.includes(process.env.REACT_APP_CHANNEL_TYPE) && {
              name: translate(`application:${menuItem.name}`),
              to: menuItem.to,
            },
        ),
      ],
    },
  };
  const content = () => {
    if (isMobile) {
      return (
        <Grid>
          <Row>
            {checked ? (
              ''
            ) : (
              <Cell columns={3}>
                <Menu
                  data={headerData}
                  handleNavigation={handleNavigation}
                  rightSideMenuElements={<div />}
                />
              </Cell>
            )}

            <Cell columns={checked ? 8 : 5}>
              <div className={mobileApplicationWrapper}>
                <Button onClick={() => handleContent()}>|||</Button>
                <Suspense fallback={<div />}>{children}</Suspense>
              </div>
            </Cell>
            <Cell>
              <div />
            </Cell>
          </Row>
        </Grid>
      );
    } else {
      return (
        <>
          <Button onClick={() => i18n.changeLanguage('en')}>
            {translate(`application:English`)}
          </Button>
          <Button onClick={() => i18n.changeLanguage('pl')}>
            {translate(`application:Polish`)}
          </Button>
          <Menu
            data={headerData}
            handleNavigation={handleNavigation}
            rightSideMenuElements={<div />}
          />
          <div className={applicationWrapper}>
            <Suspense fallback={<div />}>{children}</Suspense>
          </div>
        </>
      );
    }
  };
  return <div data-testid="applicationContainer"> {content()}</div>;
};
export default Application;
