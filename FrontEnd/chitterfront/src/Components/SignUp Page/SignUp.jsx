import axios from 'axios';
import { useState } from 'react'; 
import Footer from '../HomePage/Footer';
import Header from '../HomePage/Header';

const SignUp = () => {

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
        <Header />
         <section className="vh-100">
          <div className="container-fluid">
              <h1 className="display-4 font-weight-bold">Sign Up to Chitter!</h1>  
            <div className="row d-flex justify-content-center align-items-center h-100">  
      <div className="col-md-9 col-lg-6 col-xl-5">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          className="img-fluid" alt="Sample"/>
      </div>
      <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                <form onSubmit={register}>

          <div className="form-outline mb-4">
            <input type="email" id="form3Example3" className="form-control form-control-lg"
              placeholder="Enter Email Address" name="email" value={user.email} onChange={handleChange} />
            <label className="form-label" for="form3Example3">Email address</label>
          </div>
                  
          <div className="form-outline mb-3">
            <input type="password" id="form3Example4" className="form-control form-control-lg"
              placeholder="Enter Password" name="password" value={user.password} onChange={handleChange} />
            <label className="form-label" for="form3Example4">Password</label>
        </div>
                                
        <div className="form-outline mb-4">
            <input type="username" id="form3Example3" className="form-control form-control-lg"
              placeholder="Enter Name" name="name" value={user.name} onChange={handleChange}/>
            <label className="form-label" for="form3Example3">Name</label>
        </div>
                                
        <div className="form-outline mb-4">
            <input type="username" id="form3Example3" className="form-control form-control-lg"
              placeholder="Enter Username" name="username" value={user.username} onChange={handleChange}/>
            <label className="form-label" for="form3Example3">Username</label>
          </div>

          <div className="d-flex justify-content-between align-items-center">
          </div>

          <div className="text-center text-lg-start mt-4 pt-2">
                    <button type="submit" className="btn btn-primary btn-lg"
                     style={{ "paddingLeft": "2.5rem", "paddingRight": "2.5rem" }}>Sign Up</button>
                <p className="small fw-bold mt-2 pt-1 mb-0">Already have an account? <a href="/login"
                className="link-danger">Log In</a></p>
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

export default SignUp; 