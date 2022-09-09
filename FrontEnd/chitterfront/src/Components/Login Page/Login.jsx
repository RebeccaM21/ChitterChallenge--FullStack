import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react'; 
import Footer from '../HomePage/Footer';
import Header from '../HomePage/Header';

const Login = ({ setUserProp, setLogInProp}) => {

   const navigate = useNavigate(); 

   const [newUser, setNewUser] = useState({
        email: ``,
        password: ``, 
        username: ``,
   }); 

    const handleChange = e => { 
        const { name, value } = e.target; 
        setNewUser({
            ...newUser,
            [name]: value
        }); 
    }

    const login = async (e) => { 
        e.preventDefault(); 
        setUserProp(newUser); 
        const res = await axios.post(`http://localhost:4000/login`, newUser);
        alert(res.data.message);
      if (res.data.user) {
        setLogInProp(true); 
        navigate("/user")
        setNewUser({ email: ``, password: ``, username: `` })
        setUserProp({ email: ``, password: ``, username: `` })
      } 
      
    }

    return (
      <>
        <Header />
         <section className="vh-100">
          <div className="container-fluid">
              <h1 className="display-4 font-weight-bold">Welcome to Chitter!</h1>  
            <div className="row d-flex justify-content-center align-items-center h-100">  
      <div className="col-md-9 col-lg-6 col-xl-5">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          className="img-fluid" alt="Sample"/>
      </div>
      <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                <form onSubmit={login}>
          <div className="form-outline mb-4">
            <input type="username" id="form3Example3" className="form-control form-control-lg"
              placeholder="Enter Username" name="username" value={newUser.username} onChange={handleChange}/>
            <label className="form-label" for="form3Example3">Username</label>
          </div>

          <div className="form-outline mb-4">
            <input type="email" id="form3Example3" className="form-control form-control-lg"
              placeholder="Enter Email Address" name="email" value={newUser.email} onChange={handleChange} />
            <label className="form-label" for="form3Example3">Email address</label>
          </div>
                  
          <div className="form-outline mb-3">
            <input type="password" id="form3Example4" className="form-control form-control-lg"
              placeholder="Enter Password" name="password" value={newUser.password} onChange={handleChange} />
            <label className="form-label" for="form3Example4">Password</label>
          </div>

          <div className="d-flex justify-content-between align-items-center">
           
            <div className="form-check mb-0">
              <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
              <label className="form-check-label" for="form2Example3">
                Remember me
              </label>
            </div>
          </div>

          <div className="text-center text-lg-start mt-4 pt-2">
                    <button type="submit" className="btn btn-primary btn-lg"
                      style={{ "paddingLeft": "2.5rem", "paddingRight": "2.5rem"}}>Login</button>
            <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="/signup"
                className="link-danger">Sign Up</a></p>
          </div>
        </form>
      </div>
    </div>
  </div>
        </section>
        <Footer />
            </>
    )
}

export default Login; 