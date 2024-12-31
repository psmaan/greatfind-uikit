import styles from './SearchInputField.module.scss';
import search from './../../../assets/searchIcon.png';

type SearchInputFieldProps = {
    imgpath?: string;
    active: string;

}

const SearchInputField = (props: SearchInputFieldProps) => {
    const { imgpath, active } = props;

    return (
        <div
            className={`
            ${styles.input}
            ${active === 'default' ? styles.default : ''}
            ${active === 'invalid' ? styles.invalid : ''}
            `}
        >
            <img src={search} />
            <input type="text" placeholder='What do you want to buy?' />



        </div>
    );
};

export default SearchInputField;
