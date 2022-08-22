import axios from 'axios';
import { useState, useEffect } from 'react'; 

const AllMessages = ({ SERVERURL }) => {
    
    const [messages, setMessages] = useState()

    const getMessages = async () => {
        axios.get(`${SERVERURL}/entries`)
            .then(res => { 
                setMessages(res.data)
            });
    }
    useEffect(() => {
        getMessages()
    }, [])


    return (
        <>
        <div className="container mt-4 mb-5">
    <div className="d-flex justify-content-center row">
                    <div className="feed-icon px-2"><i className="fa fa-long-arrow-up text-black-50"></i></div>
                </div>
                <div className="bg-white border mt-2">
                    <div>
                        <div className="d-flex flex-row justify-content-between align-items-center p-2 border-bottom">
                            <div className="d-flex flex-row align-items-center feed-text px-2"><img className="rounded-circle" src="https://i.imgur.com/aoKusnD.jpg" width="45" alt="man"/>
                                <div className="d-flex flex-column flex-wrap ml-2"><span className="font-weight-bold"> Thomas Edison </span><span className="text-black-50 time">40 minutes ago</span></div>
                            </div>
                            <div className="feed-icon px-2"><i className="fa fa-ellipsis-v text-black-50"></i></div>
                        </div>
                    </div>
                    <div className="p-2 px-3"><span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, voluptate possimus earum necessitatibus nesciunt saepe quasi, soluta dolore blanditiis officiis incidunt fugiat ipsum temporibus deleniti quo molestias est, doloremque exercitationem? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium et dolor eaque, debitis quia facilis dicta perspiciatis reprehenderit exercitationem nobis porro excepturi similique fugit explicabo molestiae soluta? Ea, at exercitationem.</span></div>
                    <div className="d-flex justify-content-end socials p-2 py-3"><i className="fa fa-thumbs-up"></i><i className="fa fa-comments-o"></i><i className="fa fa-share"></i></div>
                            </div>
                        </div>
        </>
         )
}

export default AllMessages; 