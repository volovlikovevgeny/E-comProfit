import CollectionItem from '../../components/collection-item/collection-item';
import styles from '../../components/collection-preview/collection-preview.module.scss';


export default function Clothes({ data }: any) {
    return (
        <div>
            {
                <div className={styles.collection_preview}>
                    <h1 className={styles.title}>{data.title}</h1>
                    <div className={styles.preview}>
                        {
                            data.items
                                .filter((item: any, idx: number) => idx < 4)
                                .map(({ id, ...otherItemProps }: any) => (
                                    <CollectionItem key={id} {...otherItemProps} />
                                ))
                        }
                    </div>
                </div>
            }
        </div>
    )
}


export async function getServerSideProps({ params }: any) {
    const res = await fetch(`http://localhost:4200/shopdata/${params.id}`)
    const data = await res.json()

    return {
        props: { data },
    }
}