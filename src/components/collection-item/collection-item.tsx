import { ItemCollection } from '../../interfaces/Shoppage';

import styles from './collection-item.module.scss';




export default function CollectionItem({ name, imageUrl, price }: ItemCollection) {
    return (
        <div className={styles.collection_item}>
            <div
                className={styles.image}
                style={{ backgroundImage: `url(${imageUrl})` }}
            />
            <div className={styles.collection_footer}>
                <span className={styles.name}>{name}</span>
                <span className={styles.price}>${price}</span>
            </div>
        </div>
    )
}