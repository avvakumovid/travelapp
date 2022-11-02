import React, { FC } from 'react';
import Footer from './Footer/Footer';

export const Layout: FC<{ isMaxWidth?: boolean; children: any }> = ({
  isMaxWidth = true,
  children,
}) => {
  return (
    <div>
      <div
        style={{
          maxWidth: isMaxWidth ? '480px' : 'none',
          margin: '0 auto',
          height: '100vh',
        }}
      >
        {children}
      </div>
      <Footer />
    </div>
  );
};
