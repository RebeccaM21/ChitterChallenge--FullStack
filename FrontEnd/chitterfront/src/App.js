import { useState, useEffect } from 'react'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import axios from 'axios'; 
import './Styles/App.css';
import SignUp from './Components/SignUp Page/SignUp';
import HomePage from './Components/HomePage/HomePage';
import Login from './Components/Login Page/Login';
import UserHomePage from './Components/UserHomePage/UserHomePage';


const App = () =>  {
  
  const [user, setUser] = useState({}); 
  
  const [messages, setMessages] = useState([]);

    const getMessages = async () => {
        await axios.get(`http://localhost:4000/`)
            .then(res => { 
                console.log(res.data); 
                setMessages(res.data.reverse())
            });
    }
  
    useEffect(() => {
        getMessages()
    }, [])
  
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
      <Router>
      <div className="App">
        <Routes>
          <Route index element={<HomePage messageProp={messages} />} />
          <Route path="/login" element={<Login setUserProp={setUser} setLogInProp={setIsLoggedIn} />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/user" element={ isLoggedIn === true ? <UserHomePage userProp={user} messageProp={messages} setLogInProp={setIsLoggedIn} /> : <Login setUserProp={setUser} setLogInProp={setIsLoggedIn} /> } />
        </Routes>
      </div>
      </Router>
    );
  }


export default App;
