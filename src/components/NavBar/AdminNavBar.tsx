import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";


const Navbar = () => {
    return (
        <nav id="NavBar">
            <div  className={`navbar ${styles.navbar}`} >

                <ul >
                    <li>
                        <NavLink to="/upload" className={`${styles['nav-links']}`} >Upload</NavLink>
                    </li>
                </ul>

                <ul>
                    <li>
                        <NavLink className={`${styles['nav-links']}`} to="/search">Search</NavLink>
                    </li>
                </ul>

                <ul >
                    <li >
                        <NavLink className={`${styles['nav-links']}`} to="/calendar">Calender</NavLink>
                    </li>
                </ul>

                <ul >
                    <li >
                        <NavLink className={`${styles['nav-links']}`} to="/stats">Gym Stats</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;