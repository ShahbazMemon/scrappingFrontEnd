import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout, { LayoutProps } from '../components/layout'; 

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Layout  data={"xvz"}>
       <Component {...pageProps} />
    </Layout>
  </>
}
