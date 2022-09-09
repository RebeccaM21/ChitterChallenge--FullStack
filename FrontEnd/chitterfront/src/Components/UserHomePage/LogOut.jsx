import { Link } from 'react-router-dom';
import logo from '../speechbubble.png'; 
    
const LogOut = ({setLogInProp}) => {
    
    return (
        <>
            <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
    <div className="navbar-brand">
      <img src={logo} alt="" width="30" height="24" className="d-inline-block align-text-top"/>
      Chitter
                    </div>
                    <Link className="navbar-brand" to="/" onClick={ setLogInProp(false) } >Log Out</Link>
                    </div>
            </nav>
        </>
    )
}

export default LogOut; 