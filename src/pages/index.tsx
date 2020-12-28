import Directory from '../components/directory/directory';
import styles from './homepage.module.scss';

export default function HomePage({ sections }): JSX.Element {

    return (
        <div className={styles.homepage}>
            <Directory sections={sections} />
        </div>
    )
}


HomePage.getInitialProps = async ({ req, query }) => {

    const res = await fetch(`http://localhost:4200/sections`)
    const sections = await res.json()

    return {
        sections: sections
    }
}
