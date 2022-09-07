import AddEntry from "../AddEntry";
import AllMessages from "../AllMessages";
import Footer from "../Footer";
import Header from "../Header";

const UserHomePage = ({ messageProp, userProp }) => {
    
    return (
        <>
            <Header/>
            <AddEntry userProp={userProp}/>
            <AllMessages messageProp={messageProp}/>
            <Footer/>
        </>
    )
}

export default UserHomePage; 