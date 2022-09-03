import { useState, useEffect } from 'react'; 

import axios from 'axios'; 
import Footer from './Components/Footer';
import Header from './Components/Header';
import ViewPage from './Components/ViewPage';
import AllMessages from './Components/AllMessages.jsx';
import './Styles/App.css';


function App() {
  
    const [messages, setMessages] = useState()

    const getMessages = async () => {
        axios.get(`http://localhost:4000/entries`)
            .then(res => { 
                console.log(res.data); 
                setMessages(res.data)
            });
    }
    useEffect(() => {
        getMessages()
    }, [])
  
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
