import { Link } from 'react-router-dom';

import logo from 'Images/logo_header.png';

import "./Header.scss";

const Header = () => {
    return (
        <div className="header">
            <div className="logo-header">
                <Link to={'/'}>
                    <img src={logo} alt={"PE"} />
                </Link>
            </div>
            <div className="navbar">
                <div className="navlink">
                    <Link to={'/about'}>
                        about
                    </Link>
                </div>
                <div className="navlink">
                    <Link to={'/work'}>
                        work
                    </Link>
                </div>
                <div className="navlink">
                    <Link to={'/contact'}>
                        contact
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Header;