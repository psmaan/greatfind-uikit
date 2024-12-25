import React from 'react';
import styles from './IconButton.module.scss';
import icon from './../../../assets/starIcon.png'

type IconButtonProps = {
    label: string;
    width: string;
    active?: 'enabled' | 'disabled';
    textcolor: string;
    bordercolor?: string;
};

const IconButton = (props: IconButtonProps) => {
    const { label, width, active } = props;

    return (
        <button
            className={`
            ${styles.button}
            `}
            disabled={active === 'disabled'}
        >
            <img src={icon} />Upgrade to Unlock
        </button>
    );
};

export default IconButton;
