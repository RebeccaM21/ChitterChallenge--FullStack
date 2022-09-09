import chai, {expect} from 'chai'; 
import chaiHttp from 'chai-http'; 

import Entry from "../src/models/entry.model.js";
import server from '../server.js'; 
import testEntries from './testData/testEntries.js'; 

chai.use(chaiHttp); 

describe('Server Tests on /entries', () => {

    beforeEach(async () => { 
        try {
            await Entry.deleteMany();
            console.log(`Entries in collection cleared`);
        } catch (err) {
            console.log(`Error clearing entries`);
            throw new Error(`Clearing database error`);
        }
        
        try { 
            await Entry.insertMany(testEntries); 
            console.log(`Entries added to the collection`); 
        } catch (err) { 
            console.log(`Insertion error`)
            throw new Error(`Insertion error`)
        }

    })

        it('should return all the documents in test data', async () => {
            // Have server running
            const res = await chai.request(server)
                // Make get request to the server on the right route
                .get(`/`)
                .send()
            // Assert that the data returned is correct

            expect(res).to.have.status(200);
            expect(res.body).to.be.an(`array`);
            expect(res.body.length).to.be.equal(testEntries.length);
        });
});