import Head from 'next/head';
import Link from 'next/link';
import LayoutType from '../../interfaces/Layout';
import styles from './layout.module.scss';


export default function Layout({ children, title = 'E-com' }: LayoutType) {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>

            <header className={styles.header}>
                <Link href='/'>
                    <a className={styles.logo_container}>
                        Logotype
                    </a>
                </Link>
                <div className={styles.options}>
                    <Link href='/'>
                        <a className={styles.option}>
                            Home
                        </a>
                    </Link>
                    <Link href='/shop'>
                        <a className={styles.option}>
                            Shop
                        </a>
                    </Link>
                </div>
            </header>

            <div className='container'>
                <main>{children}</main>
            </div>

            <footer className={styles.footer}>Created By <span className={styles.footer_span}>Jenya || All rights recerved</span></footer>
        </>
    )
}