import styles from './SubscriptionCard.module.scss';
import logo from './../../../assets/gf-logo.png';

type SubscriptionCardProps = {
    active: 'Advanced' | 'Premium' | 'Free';
    subscription: string;
    expiry?: string;
};

const SubscriptionCard = (props: SubscriptionCardProps) => {
    const { active, subscription, expiry } = props;

    return (
        <div
            className={`
            ${styles.subcard}
            ${active === 'Advanced' ? styles.Advanced : ''}
            ${active === 'Premium' ? styles.Premium : ''}
            ${active === 'Free' ? styles.Free : ''}
            `}
        >
            <img src={logo} alt="Logo" />
            <div>
                <h1>{subscription}</h1>
                {(active === 'Advanced' || active === 'Premium') && (
                    <div className={styles.expiry}>
                        <h1>Expiry Date</h1>
                        <p>{expiry}</p>
                    </div>
                )}
            </div>
            {active === 'Advanced' && <button className={styles.upgradeButton}>Upgrade</button>}
        </div>
    );
};

export default SubscriptionCard;
