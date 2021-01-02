import type { AppProps } from 'next/app';
import Layout from '../components/layout/layout';

import '../styles/global.styles.scss';

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}