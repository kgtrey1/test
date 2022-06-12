import { Home, NotFound } from 'Pages';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

const App: React.FunctionComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="*"
        element={<NotFound />}
      />
    </Routes>
  );
}

export default App;
