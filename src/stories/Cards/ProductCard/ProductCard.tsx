import styles from './ProductCard.module.scss';
import logo from './../../../assets/gf-logo.png';

type ProductCardProps = {
    active: string;
    imgpath: string;
    price: string;
    discount: string;
    model: string;
    kilometers: string;
};

const ProductCard = (props: ProductCardProps) => {
    const { active, imgpath, price, discount, model, kilometers } = props;

    return (
        <div
            className={`
            ${styles.productcard}
            ${active === 'green' ? styles.green : ''}
            ${active === 'grey' ? styles.grey : ''}
            `}
        >
            <div className={`${styles.productimg}`}>
                <img src={imgpath} />
            </div>
            <div className={`${styles.productinfo}`}>
                <div>
                    <h1>{price}</h1>
                    <h2>{discount}</h2>
                </div>
                <h1>{model}</h1>
                <h1>{kilometers}</h1>
            </div>
        </div>
    );
};

export default ProductCard;
