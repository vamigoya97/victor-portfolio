import { Link } from 'react-router-dom';

function Header() {

    return(
        <div className="nav-container">
            <header>
                <p>Victor Amigo's</p>
                <h1>Portfolio</h1> 
            </header>
            <nav>
                <ul>
                    <li className="nav-link">
                        <Link to='/'>Projects</Link>
                    </li>
                    <li className="nav-link">
                        <Link to="/academics">Academic<br/>Credentials</Link>
                    </li>
                    <li className="nav-link">
                        <Link to='/contact'>Contact</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;