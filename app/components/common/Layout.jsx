import React from 'react';
import Footer from './Footer/Footer';

export const Layout = props => {
  return (
    <div>
      <div>
        {props.children}
        <Footer />
      </div>
    </div>
  );
};
