import type {AppProps} from 'next/app'
import Layout from "../epic/Layout";
import "../styles/global.css"
import '../lib/i18next'

export default function App({Component, pageProps}: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>);
}
