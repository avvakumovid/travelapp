import '../styles/globals.scss';
import NextProgressBar from 'nextjs-progressbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <NextProgressBar
        color='#eb601e'
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
      />
      <Component {...pageProps} />
      <ToastContainer theme={'dark'} />
    </>
  );
}

export default MyApp;
