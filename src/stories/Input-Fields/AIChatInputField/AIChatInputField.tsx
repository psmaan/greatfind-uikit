import styles from './AIChatInputField.module.scss';

type AIChatInputFieldProps = {
    questions?: string[];
};

const AIChatInputField = (props: AIChatInputFieldProps) => {
    const { questions = [] } = props; // Default to an empty array if `questions` is not provided

    return (
        <div className={styles.input}>
            <div className={styles.questions}>
                {questions.map((question, index) => (
                    <div key={index} className={styles.ques}>
                        {question}
                    </div>
                ))}
            </div>
            <textarea placeholder="Your message..." />
            <button className={styles.sendButton}>Send</button>
        </div>
    );
};

export default AIChatInputField;
