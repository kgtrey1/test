import { Grid } from '@mui/material';
import React from 'react';
import './Footer.scss';

interface IFooter {
  className?: string,
  style?: React.CSSProperties,
}

const Footer: React.FunctionComponent<IFooter> = (props: IFooter): JSX.Element => {
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

Footer.defaultProps = {
  className: 'footer',
}

export default Footer;
