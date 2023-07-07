import { useState } from 'react';
import styles from './PalindromPage.module.css';

function PalindromPage() {
    const [inputValue, setInputValue] = useState('');
    const [palindrom, setPalindrom] = useState('');

    function isPalindrome(inputValue, setPalindrom) {
        if (inputValue.trim()) {
            let str = inputValue.toLowerCase().replace(/[^a-zа-яё]/g, '');

            return str.split('').reverse().join('') === str
                ? setPalindrom(true)
                : setPalindrom(false);
        }
    }

    return (
        <div>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    isPalindrome(inputValue, setPalindrom);
                }}
            >
                <input
                    type="text"
                    className={styles.form__input}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button className={styles.form__button}>
                    Check for palindrom
                </button>
            </form>
            <div>
                {palindrom === true
                    ? 'Palindrom'
                    : palindrom === false
                    ? 'Not palindrom'
                    : ''}
            </div>
        </div>
    );
}

export default PalindromPage;
