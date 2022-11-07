import React, { FC } from 'react';
import Footer from './Footer/Footer';
import { useSession } from 'next-auth/react';

export const Layout: FC<{ isMaxWidth?: boolean; children: any }> = ({
  isMaxWidth = true,
  children,
}) => {
  const { data } = useSession();
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
