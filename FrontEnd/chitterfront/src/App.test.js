import { render, screen } from '@testing-library/react';
import axiosMock from 'axios';

import App from './App.js'; 

describe('App render tests', () => {

  test('renders data for all of the test data entries', async () => {
    const data = [{ id: 1, username: "JohnGames", message: "I love to game", time: "20:00" }, { id: 2, username: "PaulGames", message: "I always love to game", time: "15:30" }, { id: 3, username: "GeorgeGames", message: "I forever love to game", time: "09:15" }];

      axiosMock.get.mockResolvedValueOnce({ data });

    render(<App />)

    expect(axiosMock.get).toHaveBeenCalledTimes(1);
    expect(axiosMock.get).toHaveBeenCalledWith(`http://localhost:4000/`);
  })
})