import { render, screen } from '@testing-library/react'; 
import AllMessages from '../Components/HomePage/AllMessages';

describe('Header Tests', () => {

    it('should render a Single Entry with the correct username from the props', () => {
        //Arrange
        const testMessages = [{
            _id: 1,
            username: `Rebecca`,
            message: `Hello guys`,
            time: `20:00`
        }]; 

        render(<AllMessages messageProp={testMessages} />);

        //Act
        const testName = screen.getByTestId(`user`)
        
        //Assert
        expect(testName.textContent).toBe(testMessages[0].username); 
    })

    it('should render a Single Entry with the correct message from the props', () => {
        //Arrange
        const testMessages = [{
            _id: 1,
            username: `Rebecca`,
            message: `Hello guys`,
            time: `20:00`
        }]; 

        render(<AllMessages messageProp={testMessages} />);

        //Act
        const testName = screen.getByTestId(`message`)
        
        //Assert
        expect(testName.textContent).toBe(testMessages[0].message); 
    })

    it('should render a Single Entry with the correct time from the props', () => {
        //Arrange
        const testMessages = [{
            _id: 1,
            username: `Rebecca`,
            message: `Hello guys`,
            time: `20:00`
        }]; 

        render(<AllMessages messageProp={testMessages} />);

        //Act
        const testName = screen.getByTestId(`time`)
        
        //Assert
        expect(testName.textContent).toBe(testMessages[0].time); 
    })

})