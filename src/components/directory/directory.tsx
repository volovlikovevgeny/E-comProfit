import React from 'react';
import MenuItem from '../menu-item/menu-item';
import { DirectoryType } from '../../interfaces/Homepage';
import styles from './directory.module.scss';
import './directory.module.scss';

export default function Directory({ sections }: DirectoryType) {
    return (
            <div className={styles.directory_menu}>
                {
                    sections.map(({ title, imageUrl, id, size }) => (
                        <MenuItem
                            key={id}
                            id={id}
                            imageUrl={imageUrl}
                            title={title}
                            size={size}
                        />
                    ))
                }
            </div>
    )
}




