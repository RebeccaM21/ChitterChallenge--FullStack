import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';
import axiosMock from 'axios';

import AddEntry from '../Components/UserHomePage/AddEntry.jsx'; 

describe('AddEntry POSTREQ tests', () => {

  test('it should post the user information to database', async () => {
    const data = [{ id: 1, username: "JohnGames", message: "I love to game", time: "20:00" }, { id: 2, username: "PaulGames", message: "I always love to game", time: "15:30" }, { id: 3, username: "GeorgeGames", message: "I forever love to game", time: "09:15" }];

      axiosMock.post.mockResolvedValueOnce({ data });

    render(<MemoryRouter> <AddEntry/> </MemoryRouter>)

    expect(axiosMock.post).toHaveBeenCalledTimes(1);
    expect(axiosMock.post).toHaveBeenCalledWith(`http://localhost:4000/`, );
  })
})