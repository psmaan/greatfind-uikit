import styles from './EditableInputField.module.scss';
import profile from './../../../assets/profileIcon.png'

type EditableInputFieldProps = {
    label?: string;
    imgpath?: string;
    active: string;
}

const EditableInputField = (props: EditableInputFieldProps) => {
    const { imgpath, active, label } = props;

    return (
        <div
            className={`
            ${styles.input}
            ${active === 'editable' ? styles.default : ''}
            ${active === 'saved' ? styles.invalid : ''}
            `}
        >
            <div className={`${styles.profile}`}>
                <img src={profile} />
            </div>
            <div className={`${styles.main}`}>
                <h1>Name</h1>
                {active === 'editable' && <input />}
                {active === 'saved' && <h1>{label}</h1>}
            </div>
            <img src={imgpath} />
        </div>
    );
};

export default EditableInputField;
