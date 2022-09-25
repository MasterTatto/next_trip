import '../styles/globals.css'
import Layout from "../components/layout";
import Head from "next/head";

const MyApp = ({Component, pageProps}) => (
    <>
        <Head>
            <title>Главная</title>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
            <link
                href="https://fonts.googleapis.com/css2?family=Bungee+Spice&family=Poppins:wght@300;500;600;700;800;900&display=swap"
                rel="stylesheet"/>
        </Head>
        <Layout>
            <Component {...pageProps} />
        </Layout>
    </>
)

export default MyApp
