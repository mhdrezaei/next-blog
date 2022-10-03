import Layout from '../../../next-js/events/components/layout/layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return 
  <Layout>
  <Component {...pageProps} />
  </Layout>
}

export default MyApp
