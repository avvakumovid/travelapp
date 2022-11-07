import '../styles/globals.scss';
import NextProgressBar from 'nextjs-progressbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SessionProvider } from 'next-auth/react';
import { AuthProvider } from 'providers/AuthProvider/AuthProvider';

function MyApp({ Component, pageProps: { session, ...pageProps } }: any) {
  return (
    <>
      <NextProgressBar
        color='#eb601e'
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
      />
      <SessionProvider session={session}>
        <AuthProvider Component={Component}>
          <Component {...pageProps} />
          <ToastContainer theme={'dark'} draggable={false} />
        </AuthProvider>
      </SessionProvider>
    </>
  );
}

export default MyApp;
