import SingleEntry from '../UserHomePage/SingleEntry';

const AllMessages = ({ messageProp }) => { 

    const messages = messageProp.length && messageProp.map(message => <SingleEntry key={message._id} username={message.username} message={message.message} time={message.time} />)
    
    return (
        <>
            {messages}
        </>
         )
}

export default AllMessages; 