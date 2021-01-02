import { useEffect, useState } from 'react';
import Directory from '../components/directory/directory';
import { DirectoryType } from '../interfaces/Homepage';
import { NextPageContext } from 'next';
import styles from '../styles/homepage.module.scss';
import Loading from '../utils/loading';

export default function HomePage({ sections: serverSections }: DirectoryType): JSX.Element {


    const [sections, setSections] = useState(serverSections);

    useEffect(() => {
        async function load() {
            const res = await fetch(`http://localhost:4200/sections`)
            const data = await res.json()

            setSections(data)
        }

        if (!serverSections) {
            load()
        }
    }, [])

    if (!sections) {
        return (
            <Loading />
        )
    }


    return (
        <div className={styles.homepage}>
            <Directory sections={sections} />
        </div>
    )
}


HomePage.getInitialProps = async ({ req }: NextPageContext) => {

    if (!req) {
        return { collections: null }
    }

    const res = await fetch(`http://localhost:4200/sections`)
    const sections: DirectoryType = await res.json()

    return {
        sections
    }
}


