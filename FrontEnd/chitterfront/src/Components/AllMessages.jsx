import SingleEntry from './SingleEntry';

const AllMessages = ({ messageProp }) => {

    const messages = messageProp.map(message => <SingleEntry key={message._id} name={message.name} message={message.message} />);
    
    return (
        <>
            {messages}
        </>
         )
}

export default AllMessages; 