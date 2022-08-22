// import axios from 'axios'; 
import Footer from './Components/Footer';
import Header from './Components/Header';
import ViewPage from './Components/ViewPage';
import AllMessages from './Components/AllMessages.jsx';
import './Styles/App.css';


function App() {
  
  const SERVERURL = 'http://localhost:4000'; 

    return (
      <div className="App">
        <Header />
        <ViewPage />
        <AllMessages SERVERURL={ SERVERURL } />
        <Footer />
      </div>
    );
  }


export default App;
