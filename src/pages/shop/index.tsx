import CollectionPreview from '../../components/collection-preview/collection-preview';
import { ShopCollections } from '../../interfaces/Shoppage';
import styles from './shop.module.scss';

export default function ShopPage({ collections }: ShopCollections) {
    console.log(collections);


    return (
        <div className={styles.shop_page}>
            {
                collections.map(({ id, ...otherCollectionProps }) => (
                    <CollectionPreview key={id} {...otherCollectionProps} />
                ))
            }
        </div>
    )
}

export async function getStaticProps() {
    const res = await fetch('http://localhost:4200/shopdata');
    const collections = await res.json();

    if (!collections) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            collections
        }
    }
}










