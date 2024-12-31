import styles from './PasswordInputField.module.scss';
import password from './../../../assets/passwrodIcon.png'

const PasswordInputField = () => {

    return (
        <div
            className={`
            ${styles.input}
            `}
        >

            <div>
                <img src={password} />
            </div>
            <input placeholder='Password' />
        </div>
    );
};

export default PasswordInputField;
