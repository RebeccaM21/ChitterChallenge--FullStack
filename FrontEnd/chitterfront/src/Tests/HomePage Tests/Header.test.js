import { render, screen } from '@testing-library/react'; 
import Header from '../Components/Header'; 

describe('Header Tests', () => { 

    it('should render the supplied text', () => { 
        const sampleTitle = 'Chitter'; 
        render(<Header webTitle={sampleTitle} />); 

        const titleElement = screen.getByText(sampleTitle);  
        expect(titleElement.textContent).toBe(sampleTitle); 

     })
})
 
// Test 1 - The logo links to the home page route 
// Test 2 - The log in links to the log in route 
// Test 3 - The sign up links to sign up route 
// Test 4 - the log out links to the home page route 