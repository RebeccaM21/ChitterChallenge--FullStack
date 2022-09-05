import { useState, useEffect } from 'react'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import axios from 'axios'; 
import './Styles/App.css';
import SignUp from './Components/Login Page/SignUp';
import HomePage from './Components/HomePage';


function App() {
  
  const [messages, setMessages] = useState([]);

  // const [getError, setGetError] = useState({ message: ``, count: 0 });
  // const [postError, setPostError] = useState(``);
  // const [putError, setPutError] = useState(``);

    const getMessages = async () => {
        await axios.get(`http://localhost:4000/entries`)
            .then(res => { 
                console.log(res.data); 
                setMessages(res.data)
            });
    }
  
    useEffect(() => {
        getMessages()
    }, [])
  
  // const submitMessage = async entry => {
  //   try {
  //     await axios.post(process.env.REACT_APP_CHITTERS, entry);
  //     setPostError(`Message added`);
  //   } 
  //   catch (e) {
  //     setPostError(`There was a problem adding the message:${e.message}`); 
  //   }
  //   finally { 
  //     setMessages(await getMessages()); 
  //   }
  // };
  
  console.log(messages); 

  return (
      <Router>
      <div className="App">
        <Routes>
        <Route index element={<HomePage messageProp = {messages}/>} />
        <Route path= "/signup" element = {<SignUp/>} />
        </Routes>
      </div>
      </Router>
    );
  }


export default App;
