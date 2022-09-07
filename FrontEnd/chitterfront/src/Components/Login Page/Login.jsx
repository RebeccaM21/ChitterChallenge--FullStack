import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react'; 
import Footer from '../HomePage/Footer';
import Header from '../HomePage/Header';

const Login = ({ setUserProp }) => {

   const [newUser, setNewUser] = useState({
        email: ``,
        password: ``, 
        username: ``,
   }); 
    
    const [loggedIn, setLoggedIn] = useState(false); 

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
        setLoggedIn(res.data.user ? true : false); 
        setNewUser({ email: ``, password: ``, username: `` });
    }

    const navigate = useNavigate(); 

    return (
        <>
            <Header/>
    <form className = "m-5" onSubmit={login}>
  <div class= "form-group m-5">
    <label for="Email Input">Email address</label>
                <input type="email" class="form-control" id="Email Input" aria-describedby="emailHelp" name="email" value={newUser.email} onChange={handleChange} placeholder="Enter email"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group m-5">
    <label for="Password Input">Password</label>
                <input type="password" class="form-control" id="Password Input" name="password" value={newUser.password} onChange={handleChange} placeholder="Password"/>
                </div>
 <div class="form-group m-5">
    <label for="Username Input">Username</label>
                <input type="text" class="form-control" id="Username Input" name="username" value={newUser.username} onChange={handleChange} placeholder="Username"/>
            </div>
  <button type="submit" class="btn btn-primary" onClick={() => loggedIn === true ? navigate("/user") : "Need to log in"}> Log In </button>
            </form>
{/* 
<ul class="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="tab-login" data-mdb-toggle="pill" href="#pills-login" role="tab"
      aria-controls="pills-login" aria-selected="true">Login</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="tab-register" data-mdb-toggle="pill" href="#pills-register" role="tab"
      aria-controls="pills-register" aria-selected="false">Register</a>
  </li>
</ul>

<div class="tab-content">
  <div class="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
    <form>
      <div class="text-center mb-3">
        <p>Sign in with:</p>
        <button type="button" class="btn btn-link btn-floating mx-1">
          <i class="fab fa-facebook-f"></i>
        </button>

        <button type="button" class="btn btn-link btn-floating mx-1">
          <i class="fab fa-google"></i>
        </button>

        <button type="button" class="btn btn-link btn-floating mx-1">
          <i class="fab fa-twitter"></i>
        </button>

        <button type="button" class="btn btn-link btn-floating mx-1">
          <i class="fab fa-github"></i>
        </button>
      </div>

      <p class="text-center">or:</p>

     
      <div class="form-outline mb-4">
        <input type="email" id="loginName" class="form-control" />
        <label class="form-label" for="loginName">Email or username</label>
      </div>

      <div class="form-outline mb-4">
        <input type="password" id="loginPassword" class="form-control" />
        <label class="form-label" for="loginPassword">Password</label>
      </div>

      
      <div class="row mb-4">
        <div class="col-md-6 d-flex justify-content-center">
        
          <div class="form-check mb-3 mb-md-0">
            <input class="form-check-input" type="checkbox" value="" id="loginCheck" checked />
            <label class="form-check-label" for="loginCheck"> Remember me </label>
          </div>
        </div>

        <div class="col-md-6 d-flex justify-content-center">
    
          <a href="#!">Forgot password?</a>
        </div>
      </div>

 
      <button type="submit" class="btn btn-primary btn-block mb-4">Sign in</button>

    
      <div class="text-center">
        <p>Not a member? <a href="#!">Register</a></p>
      </div>
    </form>
  </div>
  <div class="tab-pane fade" id="pills-register" role="tabpanel" aria-labelledby="tab-register">
    <form>
      <div class="text-center mb-3">
        <p>Sign up with:</p>
        <button type="button" class="btn btn-link btn-floating mx-1">
          <i class="fab fa-facebook-f"></i>
        </button>

        <button type="button" class="btn btn-link btn-floating mx-1">
          <i class="fab fa-google"></i>
        </button>

        <button type="button" class="btn btn-link btn-floating mx-1">
          <i class="fab fa-twitter"></i>
        </button>

        <button type="button" class="btn btn-link btn-floating mx-1">
          <i class="fab fa-github"></i>
        </button>
      </div>

      <p class="text-center">or:</p>

      <div class="form-outline mb-4">
        <input type="text" id="registerName" class="form-control" />
        <label class="form-label" for="registerName">Name</label>
      </div>

     
      <div class="form-outline mb-4">
        <input type="text" id="registerUsername" class="form-control" />
        <label class="form-label" for="registerUsername">Username</label>
      </div>


      <div class="form-outline mb-4">
        <input type="email" id="registerEmail" class="form-control" />
        <label class="form-label" for="registerEmail">Email</label>
      </div>

      <div class="form-outline mb-4">
        <input type="password" id="registerPassword" class="form-control" />
        <label class="form-label" for="registerPassword">Password</label>
      </div>

      <div class="form-outline mb-4">
        <input type="password" id="registerRepeatPassword" class="form-control" />
        <label class="form-label" for="registerRepeatPassword">Repeat password</label>
      </div>

      <div class="form-check d-flex justify-content-center mb-4">
        <input class="form-check-input me-2" type="checkbox" value="" id="registerCheck" checked
          aria-describedby="registerCheckHelpText" />
        <label class="form-check-label" for="registerCheck">
          I have read and agree to the terms
        </label>
      </div>

 
      <button type="submit" class="btn btn-primary btn-block mb-3">Sign in</button>
    </form> */}
  {/* </div>
</div> */}

            <Footer />
            </>
    )
}

export default Login; 