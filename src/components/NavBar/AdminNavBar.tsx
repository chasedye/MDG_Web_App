import styles from "./NavBar.module.css";


const Navbar = () => {
    return (
        <nav id="NavBar">
            <div  className={`navbar ${styles.navbar}`} >

                <button className={`${styles['nav-links']}`}>
                    <li>
                        <a className={`${styles['nav-links']}`} href="/upload">Upload</a>
                    </li>
                </button>

                <ul className={`${styles['nav-links']}`}>
                    <li>
                        <a className={`${styles['nav-links']}`} href="/search">Search</a>
                    </li>
                </ul>

                <ul className={`${styles['nav-links']}`}>
                    <li>
                        <a className={`${styles['nav-links']}`} href="/calendar">Calender</a>
                    </li>
                </ul>

                <ul className={`${styles['nav-links']}`}>
                    <li>
                        <a className={`${styles['nav-links']}`}href="/stats">Gym Stats</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;