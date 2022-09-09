import { Link } from 'react-router-dom';
import logo from '../speechbubble.png'; 

const Header = () => {

    return (
        <>
            <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
    <a className="navbar-brand" href="/">
      <img src={logo} alt="" width="30" height="24" className="d-inline-block align-text-top"/>
      Chitter </a>
             <Link className="navbar-brand text-right" to="/login">Log In </Link>
             <Link className="navbar-brand text-right" to="/signup"> Sign Up </Link>
                    </div>
</nav>
        </>
    )
}

export default Header; 