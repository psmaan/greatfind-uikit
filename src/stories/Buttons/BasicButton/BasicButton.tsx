import React from 'react';
import styles from './BasicButton.module.scss';

type BasicButtonProps = {
    label: string;
    width: string;
    active?: 'enabled' | 'disabled';
    textcolor: string;
    bordercolor?: string;
};

const BasicButton = (props: BasicButtonProps) => {
    const { label, width, active } = props;

    return (
        <button
            className={`
            ${styles.button} 
            ${active === 'enabled' ? styles.enabled : ''} 
            ${active === 'disabled' ? styles.disabled : ''}
            `}
            disabled={active === 'disabled'}
        >
            {label}
        </button>
    );
};

export default BasicButton;
