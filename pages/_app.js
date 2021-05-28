import { ExamProvider } from '../components/ExamContext';

import Layout from '../components/Layout';

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <ExamProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ExamProvider>
  );
}

export default MyApp
