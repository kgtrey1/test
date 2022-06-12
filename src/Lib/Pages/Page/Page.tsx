import { Grid } from '@mui/material';
import React from 'react';
import './Page.scss';

interface IPage {
  children: JSX.Element,
  hideNavbar?: boolean,
  hideFooter?: boolean,
  className?: string,
  style?: React.CSSProperties,
}

const Page: React.FunctionComponent<IPage> = (props: IPage): JSX.Element => {
  const {
    hideNavbar,
    hideFooter,
    className,
    children,
    style,
  } = props;

  return (
    <Grid
      container
      direction='column'
      wrap='nowrap'
      className={className}
      style={style}>
      {!hideNavbar &&
        <Grid item display='grid'>
          {/* Add navbar here */}
        </Grid>
      }
      <Grid item display='grid'>
        {children}
      </Grid>
      {!hideFooter &&
        <Grid item display='grid'>
          {/* Add footer here */}
        </Grid>
      }
    </Grid>
  );
};

Page.defaultProps = {
  hideNavbar: false,
  hideFooter: false,
  className: 'page-body',
};

export default Page;
