import styles from './SecondaryButton.module.scss';

const SecondaryButton = () => {

    return (
        <button
            className={`
            ${styles.button}
            `}
        >
            Upgrade
        </button>
    );
};

export default SecondaryButton;
