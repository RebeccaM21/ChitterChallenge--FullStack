import { useState, useEffect } from 'react'; 

import axios from 'axios'; 
import Footer from './Components/Footer';
import Header from './Components/Header';
import ViewPage from './Components/ViewPage';
import AllMessages from './Components/AllMessages.jsx';
import './Styles/App.css';


function App() {
  
  const [messages, setMessages] = useState([]);

  // const [getError, setGetError] = useState({ message: ``, count: 0 });
  // const [postError, setPostError] = useState(``);
  // const [putError, setPutError] = useState(``);

    const getMessages = async () => {
        await axios.get(`http://localhost:4000/`)
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
      <div className="App">
        <Header />
        <ViewPage />
        <AllMessages messageProp = {messages} />
        <Footer />
      </div>
    );
  }


export default App;
