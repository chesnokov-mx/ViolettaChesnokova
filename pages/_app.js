import Layout from "../components/MainLayout";
import '../components/css/styles.css';


export default function MyApp({ Component, pageProps }) {

    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}