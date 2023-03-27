import React, {useState} from 'react';
import Button from '@material/react-button';
import {Cell, Grid, Row} from '@material/react-layout-grid';
import {media, useMedia} from 'components/Media';

import '../../../index.scss';
import {menuTheme, mobileMenuContainer} from './Menu.style';

const Menu = ({data, handleNavigation, activeButton}) => {
  const isMobile = useMedia(media.device.mobile);
  const [menuSelected, setMenuSelected] = useState(false);

  const isMenuSelected = (to) => {
    if (window.location.hash && window.location.hash.substring(0) === to) {
      setMenuSelected(true);
    }
    setMenuSelected(false);
  };
  console.log(window.location.hash.substring(0));
  const menuMobile = data.menu.primary.map((item, i) => (
    <Row key={i}>
      <Cell columns={1}>
        <Button onClick={() => (handleNavigation(item.to), isMenuSelected(item.to))}>
          {item.name}
        </Button>
      </Cell>
    </Row>
  ));

  const menuDesktop = data.menu.primary.map((item, i) => (
    <Cell columns={3} key={i}>
      <Button
        className={console.log(menuSelected) ? activeButton : ''}
        onClick={() => (handleNavigation(item.to), isMenuSelected(item.to))}>
        {item.name}
      </Button>
    </Cell>
  ));
  const menu = isMobile ? (
    <div className={mobileMenuContainer}>{menuMobile}</div>
  ) : (
    <Grid>
      <Row>{menuDesktop}</Row>
    </Grid>
  );
  return <div className={menuTheme}>{menu}</div>;
};
export default Menu;
