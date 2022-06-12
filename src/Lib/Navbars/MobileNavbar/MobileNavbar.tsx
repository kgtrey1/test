import { Grid } from '@mui/material';
import React from 'react';
import './MobileNavbar.scss';

interface IMobileNavbar {
  className?: string,
  style?: React.CSSProperties,
}

const MobileNavbar: React.FunctionComponent<IMobileNavbar> = (props: IMobileNavbar): JSX.Element => {
  const {
    className,
    style,
  } = props;

  return (
    <Grid
      container
      direction='row'
      wrap='nowrap'
      className={className}
      style={style}>

    </Grid>
  );
}

MobileNavbar.defaultProps = {
  className: 'mobile-navbar',
}

export default MobileNavbar;
