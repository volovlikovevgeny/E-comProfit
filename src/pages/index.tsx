import Directory from '../components/directory/directory';
import styles from '../styles/homepage.module.scss';

import { DirectoryType } from '../interfaces/Homepage';

export default function HomePage({ sections }: DirectoryType): JSX.Element {
    return (
        <div className={styles.homepage}>
            <Directory sections={sections} />
        </div>
    )
}


HomePage.getInitialProps = async () => {
    const res = await fetch(`http://localhost:4200/sections`)
    const sections = await res.json()

    return {
        sections
    }
}
