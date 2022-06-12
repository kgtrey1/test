import { Page } from 'Lib/Pages';
import { Title } from 'Lib/Texts';
import React from 'react';

const NotFound: React.FunctionComponent = (): JSX.Element => {
  return (
    <Page>
      <Title text='Page not found !' />
    </Page>
  );
};

export default NotFound;