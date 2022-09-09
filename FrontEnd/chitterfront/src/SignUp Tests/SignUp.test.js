import { MemoryRouter } from 'react-router-dom';

import { render } from 'react'; 
import axiosMock from 'axios'; 
import SignUp from '../Components/SignUp Page/SignUp';

describe('Get Request to /entries', () => { 

test('it should post the user information to database', async () => {
   const data = [{ id: 1, email: "john@email.com", password: "I love to game", username: "JohnGames" }, { id: 2, email: "paul@email.com", password: "I always love to game", username: "PaulGames" }, { id: 3, email: "george@email.com", password: "I forever love to game", username: "GeorgeGames" }];

      axiosMock.post.mockResolvedValueOnce({ data });

    render(<MemoryRouter> <SignUp/> </MemoryRouter>)

    expect(axiosMock.post).toHaveBeenCalledTimes(1);
    expect(axiosMock.post).toHaveBeenCalledWith(`http://localhost:4000/login`, );
  })

 })