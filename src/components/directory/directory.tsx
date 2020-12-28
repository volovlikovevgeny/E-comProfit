import React from 'react';
import MenuItem from '../menu-item/menu-item';
import styles from './directory.module.scss';
import { DirectoryType } from '../../interfaces/directoryType';


import './directory.module.scss';



export default function Directory({ sections }: DirectoryType) {
    console.log(sections);


    return (
        <div className={styles.directory_menu}>
            {
                sections.map(({ title, imageUrl, id, size }) => (
                    <MenuItem key={id} imageUrl={imageUrl} title={title} size={size} />
                ))
            }
        </div>
    )
}



