import AllMessages from "./AllMessages";
import Footer from "./Footer";
import Header from "./Header";


const HomePage = ({messageProp}) => {
    
    return (
        <>
            <Header />
             <h1 class="display-4 font-weight-bold">Welcome to Chitter!</h1>
            <AllMessages messageProp={messageProp}/>
            <Footer/>
        </>
    )
}

export default HomePage; 