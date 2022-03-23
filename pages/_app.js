import '../styles/globals.css';
import 'prismjs/themes/prism-tomorrow.css';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script src="/static/test.js" />
      <span className="theme-bejamas" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
