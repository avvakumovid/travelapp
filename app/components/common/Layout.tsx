import React, { FC } from 'react';
import Footer from './Footer/Footer';

export const Layout = (props: any) => {
  return (
    <div>
      <div style={{ maxWidth: '480px', margin: '0 auto', height: '100vh' }}>
        {props.children}
        <Footer />
      </div>
    </div>
  );
};
