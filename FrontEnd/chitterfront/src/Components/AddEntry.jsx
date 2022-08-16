const AddEntry = () => {
    
    return (
        <>
            <div className="container mt-4 mb-5">
            <div className="d-flex justify-content-center row">
            <h2>New Chitter...</h2>
            <form className="form-group" action="">
            <textarea className="form-control rounded-0 p-3" id="addEntry" rows="3" placeholder="What's on your mind?" ></textarea>
                        <input className="btn btn-outline-primary float-end" type="submit" value="Send" />
                </form>
                </div>
                </div>        
        </>
)

}

export default AddEntry; 