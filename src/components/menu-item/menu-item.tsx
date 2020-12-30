import Link from 'next/link';
import styles from './menu-item.module.scss';

export default function MenuItem({ imageUrl, title, size, id }): JSX.Element {
    return (
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
    )
}




