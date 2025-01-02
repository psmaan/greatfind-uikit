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
            ${active === 'advanced' ? styles.Advanced : ''}
            ${active === 'premium' ? styles.Premium : ''}
            ${active === 'free' ? styles.Free : ''}
            `}
        >
            <img src={logo} alt="Logo" />
            <div>
                <h1>{subscription}</h1>
                {(active === 'advanced' || active === 'premium') && (
                    <div className={styles.expiry}>
                        <h1>Expiry Date</h1>
                        <p>{expiry}</p>
                    </div>
                )}
            </div>
            {active === 'advanced' && <button className={styles.upgradeButton}>Upgrade</button>}
        </div>
    );
};

export default SubscriptionCard;
