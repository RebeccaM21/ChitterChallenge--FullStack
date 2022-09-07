import AddEntry from "./AddEntry";
import AllMessages from "../HomePage/AllMessages";
import Footer from "../HomePage/Footer";
import LogOut from "./LogOut";

const UserHomePage = ({ messageProp, userProp }) => {
    
    return (
        <>
            <LogOut/>
            <AddEntry userProp={userProp}/>
            <AllMessages messageProp={messageProp}/>
            <Footer/>
        </>
    )
}

export default UserHomePage; 