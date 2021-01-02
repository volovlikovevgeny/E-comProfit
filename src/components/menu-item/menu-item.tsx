import { MenuItems } from '../../interfaces/Homepage';
import Link from 'next/link';
import styles from './menu-item.module.scss';


export default function MenuItem({ imageUrl, title, size, id }: MenuItems): JSX.Element {

    return (
        <Link href={`/shop/${id}`}>
            <div className={`${size} ${styles.menu_item}`}>
                <div
                    className={styles.background_image}
                    style={{
                        backgroundImage: `url(${imageUrl})`
                    }}
                />

                <div className={styles.content}>
                    <h1 className={styles.title}>{title.toUpperCase()}</h1>
                    <span className={styles.subtitle}>SHOP NOW</span>
                </div>
            </div>
        </Link>
    )
}

