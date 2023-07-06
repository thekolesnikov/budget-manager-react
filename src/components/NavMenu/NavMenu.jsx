import { NavLink } from 'react-router-dom';
import styles from './NavMenu.module.css';

function Navmenu() {
    return (
        <header className={styles.header}>
            <div className="container">
                <NavLink className={styles.header__item} to="/">
                    Home
                </NavLink>
                <NavLink className={styles.header__item} to="/history">
                    Budget history
                </NavLink>
            </div>
        </header>
    );
}

export default Navmenu;
