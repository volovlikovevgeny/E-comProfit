import CollectionItem from '../collection-item/collection-item';
import styles from './collection-preview.module.scss';

import { PreviewCollections } from '../../interfaces/Shoppage'


export default function CollectionPreview({ title, items}: PreviewCollections) {

    return (
        <div className={styles.collection_preview}>
            <h1 className={styles.title}>{title}</h1>
            <div className={styles.preview}>
                {
                    items
                        .filter((item, idx) => idx < 4)
                        .map(({ id, ...otherItemProps }) => (
                            <CollectionItem key={id} {...otherItemProps} />
                        ))
                }
            </div>
        </div>
    )
}