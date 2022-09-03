import { Provider } from 'react-redux';
import { useStore } from '../store';
import { useEffect, useState } from "react";

import '../public/css/animate.min.css';
import '../public/css/bootstrap.min.css';

import '../styles/index.scss'

import '../public/css/boxicons.min.css';

import '../public/css/fontawesome.min.css';
import '../public/css/meanmenu.min.css';
import '../public/css/style.css';
import '../public/css/responsive.css';

import Layout from '../components/Layout/Layout';
import GoTop from '../components/Shared/GoTop';

export default function App({ Component, pageProps }) {
    const store = useStore( pageProps.initialReduxState );
    const [loading, setLoading] = useState(false);
    
    useEffect( () =>
    {
        setLoading(true);
        setTimeout(() => {
        setLoading(false);
        }, 1000);
    }, []);

    return (
        <>
            {
            !loading ? (
                <Provider store={store}>
                    <Layout>
                        <Component {...pageProps} />
                        {/* Go Top Button */}
                        <GoTop/>
                    </Layout>
                </Provider>
                ) : (
                    <>
                        <h1>Loading...</h1>
                     </> )
            }
        </>
    );
}
