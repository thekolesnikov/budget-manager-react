import { Formik, Field, Form } from 'formik';
import styles from './TransactionForm.module.css';

function validateTransactionName(value) {
    if (!value) {
        return 'Required';
    }
}

function TransactionForm() {
    return (
        <Formik
            initialValues={{
                transactionName: '',
                amount: '',
                transactionType: 'earning',
            }}
            onSubmit={(values) => console.log(values)}
        >
            {({ errors, touched }) => (
                <Form className={styles.form}>
                    <label className={styles.form__item}>
                        Transaction name:
                        <div>
                            <Field
                                name="transactionName"
                                className={styles.form__item_field}
                                validate={validateTransactionName}
                            />
                            {errors.transactionName &&
                                touched.transactionName && (
                                    <div className={styles.form__item_error}>
                                        {errors.transactionName}
                                    </div>
                                )}
                        </div>
                    </label>

                    <label className={styles.form__item}>
                        Amount:
                        <Field
                            name="amount"
                            className={styles.form__item_field}
                        />
                    </label>

                    <label className={styles.form__item}>
                        Transaction type:
                        <Field
                            component="select"
                            name="transactionType"
                            className={styles.form__item_field}
                        >
                            <option value="Earning">Earning</option>
                            <option value="Expense">Expense</option>
                        </Field>
                    </label>

                    <button type="submit" className={styles.form__button}>
                        Submit
                    </button>
                </Form>
            )}
        </Formik>
    );
}

export default TransactionForm;
