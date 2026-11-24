import "./NavBar.modules.css"


const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-center">

                <ul className="nav-links">
                    <li>
                        <a className="nav-links" href="/upload">Upload</a>
                    </li>
                </ul>

                <ul className="nav-links">
                    <li>
                        <a className="nav-links" href="/search">Search</a>
                    </li>
                </ul>

                <ul className="nav-links">
                    <li>
                        <a className="nav-links" href="/calendar">Calender</a>
                    </li>
                </ul>

                <ul className="nav-links">
                    <li>
                        <a className="nav-links" href="/stats">Gym Stats</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;