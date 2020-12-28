import styles from './menu-item.module.scss';

type AppProps = {
    imageUrl: string;
    title: string;
    size: string | undefined
}


export default function MenuItem({ imageUrl, title, size }: AppProps): JSX.Element {
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