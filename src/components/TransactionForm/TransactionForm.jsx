import { Formik, Field, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { transactionSlice } from '../../redux/slices/transactionsSlice';
import styles from './TransactionForm.module.css';
import { addToLS } from '../../utils/LocalStorage';

function validateFormInput(value) {
    if (!value) {
        return 'Required';
    }
}

function TransactionForm() {
    const dispatch = useDispatch();
    const { addTransaction } = transactionSlice.actions;

    return (
        <Formik
            initialValues={{
                transactionName: '',
                amount: '',
                transactionType: 'Earning',
            }}
            onSubmit={(values, { resetForm }) => {
                values.id = Date.now();
                addToLS(values);
                dispatch(addTransaction(values));
                resetForm();
            }}
        >
            {({ errors, touched }) => (
                <Form className={styles.form}>
                    <label className={styles.form__item}>
                        Transaction name:
                        <div>
                            <Field
                                name="transactionName"
                                className={styles.form__item_field}
                                validate={validateFormInput}
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
                        <div>
                            <Field
                                name="amount"
                                type="number"
                                className={styles.form__item_field}
                                validate={validateFormInput}
                            />
                            {errors.amount && touched.amount && (
                                <div className={styles.form__item_error}>
                                    {errors.amount}
                                </div>
                            )}
                        </div>
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
