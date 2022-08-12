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
 
// Need later tests to ensure the links work 