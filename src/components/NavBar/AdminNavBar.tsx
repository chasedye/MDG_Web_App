import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";


const Navbar = () => {
    return (
        <nav id="NavBar" >
            <ul  >
                <li>
                    <NavLink className={({isActive}) => isActive ? styles.active : undefined} to="/upload">Upload</NavLink>
                </li>
                <li>
                    <NavLink className={({isActive}) => isActive ? styles.active : undefined} to="/search">Search</NavLink>
                </li>
                <li >
                    <NavLink className={({isActive}) => isActive ? styles.active : undefined} to="/calendar">Calender</NavLink>
                </li>
                <li >
                    <NavLink className={({isActive}) => isActive ? styles.active : undefined} to="/stats">Gym Stats</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;