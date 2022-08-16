import logo from '../speechbubble.png'; 

const Header = ({ webTitle }) => {

    return (
        <>
            <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
    <a className="navbar-brand" href="/">
      <img src={logo} alt="" width="30" height="24" className="d-inline-block align-text-top"/>
      Chitter
                    </a>
             <a className="navbar-brand" href="/">Log In </a>
             <a className="navbar-brand" href="/">Sign Up </a>
                    </div>
</nav>
        </>
    )
}

export default Header; 