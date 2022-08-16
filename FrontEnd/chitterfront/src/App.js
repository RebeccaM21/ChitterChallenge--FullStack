// import axios from 'axios'; 
import Footer from './Components/Footer';
import Header from './Components/Header';
import ViewPage from './Components/ViewPage';
import AllMessages from './Components/AllMessages.jsx';
import './Styles/App.css';


function App() {
  // const sendPersonToServer = async person => {
  //   try {
  //     const response = await axios.post(`http://localhost:4000/data`, person);
  //     console.log(response.statusText);
  //   } catch (e) {
  //     console.log(e.message);
  //   }

    return (
      <div className="App">
        <Header />
        <ViewPage />
        <AllMessages/>
        <Footer />
      </div>
    );
  }


export default App;
