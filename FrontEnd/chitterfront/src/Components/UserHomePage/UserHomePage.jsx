import AddEntry from "./AddEntry";
import AllMessages from "../HomePage/AllMessages";
import Footer from "../HomePage/Footer";
import LogOut from "./LogOut";

const UserHomePage = ({ messageProp, userProp, setLogInProp }) => {
    
    return (
        <>
            <LogOut setLogInProp={setLogInProp} />
            <AddEntry userProp={userProp}/>
            <AllMessages messageProp={messageProp}/>
            <Footer/>
        </>
    )
}

export default UserHomePage; 