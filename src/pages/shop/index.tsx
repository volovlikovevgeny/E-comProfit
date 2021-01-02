import { useEffect, useState } from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview';
import { ShopCollections } from '../../interfaces/Shoppage';
import { NextPageContext } from 'next'
import Loading from '../../utils/loading';

import styles from './shop.module.scss';

export default function ShopPage({ collections: serverCollections }: ShopCollections) {

    const [collections, setCollection] = useState(serverCollections);


    useEffect(() => {
        async function load() {
            const res = await fetch(`http://localhost:4200/shopdata`)
            const data = await res.json()

            setCollection(data)
        }

        if (!serverCollections) {
            load()
        }
    }, [])

    if (!collections) {
        return (
            <Loading />
        )
    }

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


ShopPage.getInitialProps = async ({ req, query }: NextPageContext) => {

    if (!req) {
        return { collections: null }
    }

    const res = await fetch(`http://localhost:4200/shopdata`)
    const collections: ShopCollections = await res.json()

    return {
        collections
    }
}










