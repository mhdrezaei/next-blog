import Layout from "../components/layout/layout";
import "../styles/globals.css";
import {NotificatonContextProvider} from "../store/notificationContext "
function MyApp({ Component, pageProps }) {
  return (
    <NotificatonContextProvider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </NotificatonContextProvider>
  );
}

export default MyApp;
