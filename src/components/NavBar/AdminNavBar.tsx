import "./NavBar.css"


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
                        <a className="nav-links" href="/footage">Footage</a>
                    </li>
                </ul>

                <ul className="nav-links">
                    <li>
                        <a className="nav-links" href="/calendar">Calender</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;