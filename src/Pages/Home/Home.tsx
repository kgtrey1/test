import { Page } from 'Lib/Pages';
import { Title } from 'Lib/Texts';
import React from 'react';

const Home: React.FunctionComponent = (): JSX.Element => {
  return (
    <Page>
      <Title text='Welcome to eRise !' />
    </Page>
  );
};

export default Home;
