import axios from 'axios';
import { useState } from 'react'; 
import Footer from '../Footer';
import Header from '../Header';

const Register = ({ }) => {

    const [user, setUser] = useState({
        email: ``,
        password: ``, 
        name: ``,
        username: ``,
    }); 

    const handleChange = e => { 
        const { name, value } = e.target; 
        setUser({
            ...user,
            [name]: value
        }); 
    }

    const register = async (e) => { 
        e.preventDefault(); 
        const { name, email, password, username } = user; 
        if (email && password && name && username) {
            const res = await axios.post(`http://localhost:4000/signup`, user);
            alert(res.data.message);
            setUser({ email: ``, password: ``, name: ``, username: `` });
            return;
        } else {
            alert(`Invalid input`);
        }
}

    return (
        <>
            <Header/>
    <form className = "m-5" onSubmit={register}>
  <div class= "form-group m-5">
    <label for="Email Input">Email address</label>
                <input type="email" class="form-control" id="Email Input" aria-describedby="emailHelp" name="email" value={user.email} onChange={handleChange} placeholder="Enter email"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group m-5">
    <label for="Password Input">Password</label>
                <input type="password" class="form-control" id="Password Input" name="password" value={user.password} onChange={handleChange} placeholder="Password"/>
            </div>
             <div class="form-group m-5">
    <label for="Name Input">Name</label>
                <input type="text" class="form-control" id="Name Input" name="name" value={user.name} onChange= {handleChange} placeholder="Name"/>
            </div>
             <div class="form-group m-5">
    <label for="Username Input">Username</label>
                <input type="text" class="form-control" id="Username Input" name="username" value={user.username} onChange= {handleChange} placeholder="Username"/>
  </div>
  <button type="submit" class="btn btn-primary">Register</button>
            </form>
            <Footer/>
            </>
    )
}

export default Register; 