import { Link } from 'react-router-dom';
import logo from '../speechbubble.png'; 
    
const LogOut = ( ) => {

    return (
        <>
            <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
    <a className="navbar-brand" href="/">
      <img src={logo} alt="" width="30" height="24" className="d-inline-block align-text-top"/>
      Chitter
                    </a>
                    <Link className="navbar-brand" to="/"> Log Out </Link>
                    </div>
            </nav>
        </>
    )
}

export default LogOut; 