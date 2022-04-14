import "../styles/globals.scss";
import Layout from "../components/layout/Layout";
import Script from "next/script";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="author" content="Dusan Milosevic" />
        <link rel="icon" href="/icon-32x32.png" />
        <link rel="apple-touch-icon" href="/icon-32x32.png" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:site" content="@demanderbag_" />
        <meta name="twitter:creator" content="@demanderbag_" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-02WNJDNKZC"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-02WNJDNKZC');
    `}
      </Script>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
