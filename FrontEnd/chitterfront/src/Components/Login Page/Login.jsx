import axios from 'axios';
import { Link } from 'react-router-dom';
import { useState } from 'react'; 
import Footer from '../Footer';
import Header from '../Header';

const Login = ({ setUserProp }) => {

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
        setNewUser({ email: ``, password: ``, username: `` });
    }

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
  <button type="submit" class="btn btn-primary"> Log In </button>
            </form>
            <Footer />
            
            </>
    )
}

export default Login; 