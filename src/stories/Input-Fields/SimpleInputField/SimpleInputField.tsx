import styles from './SimpleInputField.module.scss';

type SimpleInputFieldProps = {
    imgpath?: string;
    active: string;
}

const SimpleInputField = (props: SimpleInputFieldProps) => {
    const { imgpath, active } = props;

    return (
        <div
            className={`
            ${styles.input}
            ${active === 'default' ? styles.default : ''}
            ${active === 'invalid' ? styles.invalid : ''}
            `}
        >

            <div>
                <img src={imgpath} />
            </div>
            <input placeholder='Email' />
            {active === 'invalid' && <h1>Invalid</h1>}


        </div>
    );
};

export default SimpleInputField;
