import AllMessages from "./AllMessages";
import Footer from "./Footer";
import Header from "./Header";


const HomePage = ({messageProp}) => {
    
    return (
        <>
            <Header/>
            <AllMessages messageProp={messageProp}/>
            <Footer/>
        </>
    )
}

export default HomePage; 