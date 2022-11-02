import '../styles/globals.scss';
import NextProgressBar from 'nextjs-progressbar';

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
    </>
  );
}

export default MyApp;
