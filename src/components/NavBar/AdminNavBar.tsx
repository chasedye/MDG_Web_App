import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";


const Navbar = () => {
    return (
        <nav id="NavBar">
            <div  className={`navbar ${styles.navbar}`} >

                <button className={`${styles['nav-links']}`}>
                    <li>
                        <Link to="/upload" className={`${styles['nav-links']}`} >Upload</Link>
                    </li>
                </button>

                <ul className={`${styles['nav-links']}`}>
                    <li>
                        <Link className={`${styles['nav-links']}`} to="/search">Search</Link>
                    </li>
                </ul>

                <ul className={`${styles['nav-links']}`}>
                    <li>
                        <Link className={`${styles['nav-links']}`} to="/calendar">Calender</Link>
                    </li>
                </ul>

                <ul className={`${styles['nav-links']}`}>
                    <li>
                        <Link className={`${styles['nav-links']}`} to="/stats">Gym Stats</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;