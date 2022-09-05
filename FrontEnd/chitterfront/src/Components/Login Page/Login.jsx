import axios from 'axios';
import { useState } from 'react'; 
import Footer from '../Footer';
import Header from '../Header';

const Login = ({ }) => {

    const [user, setUser] = useState({
        email: ``,
        password: ``, 
    }); 

    const handleChange = e => { 
        const { name, value } = e.target; 
        setUser({
            ...user,
            [name]: value
        }); 
    }

    const login = async (e) => { 
        e.preventDefault(); 
        const res = await axios.post(`http://localhost:4000/login`, user);
        alert(res.data.message);
        setUser({ email: ``, password: ``, name: ``, username: `` });
}

    return (
        <>
            <Header/>
    <form className = "m-5" onSubmit={login}>
  <div class= "form-group m-5">
    <label for="Email Input">Email address</label>
                <input type="email" class="form-control" id="Email Input" aria-describedby="emailHelp" name="email" value={user.email} onChange={handleChange} placeholder="Enter email"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group m-5">
    <label for="Password Input">Password</label>
                <input type="password" class="form-control" id="Password Input" name="password" value={user.password} onChange={handleChange} placeholder="Password"/>
            </div>
  <button type="submit" class="btn btn-primary">Log In</button>
            </form>
            <Footer/>
            </>
    )
}

export default Login; 