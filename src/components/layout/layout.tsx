import Head from 'next/head';
import Link from 'next/link';
import LayoutType from '../../interfaces/Layout';
import styles from './layout.module.scss';
import Navbar from '../navbar/navbar';


export default function Layout({ children, title = 'E-com' }: LayoutType) {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>

            <header className={styles.header}>
                <Navbar/>
            </header>

            <div className='container'>
                <main>{children}</main>
            </div>
            
            <footer className={styles.footer}>Created By <span className={styles.footer_span}>Jenya || All rights recerved</span></footer>
        </>
    )
}