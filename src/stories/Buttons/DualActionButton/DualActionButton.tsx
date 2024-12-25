import React from 'react';
import styles from './DualActionButton.module.scss';
import icon from './../../../assets/sortIcon.png'

type DualActionButtonProps = {
    label: string;
    active?: 'saveFilters' | 'seeListings' | 'sort';
};

const DualActionButton = (props: DualActionButtonProps) => {
    const { label, active } = props;
    return (
        <button
            className={`
            ${styles.button} 
            ${active === 'saveFilters' ? styles.SaveFilters : ''} 
            ${active === 'seeListings' ? styles.SeeListings : ''}
            ${active === 'sort' ? styles.Sort : ''}
            `}
            saveFilters={active === 'saveFilters'}
        >
            {active === 'sort' && icon && <img src={icon} className={styles.icon} />}
            {label}
        </button>
    );
};

export default DualActionButton;
