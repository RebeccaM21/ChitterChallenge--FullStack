# Standard Acceptance Criteria

1. As a trainee software engineer
   So that I can let people know what I am doing
   I want to post a message (peep) to chitter

## Plan

- Should only work when logged in
- AddEntry.jsx -> POST REQ -> DATABASE (message.message)
- Each entry should render the display of a Single Entry

2. As a trainee
   So that I can see what others are saying
   I want to see all peeps in reverse chronological order

## Plan

- AllMessages.jsx -> GET REQ -> DATABASE (messages - contains time, username & message)
- Convert array of data to reverse order
- Feed the converted array into the sub-components

3. As a trainee
   So that I can better appreciate the context of a peep
   I want to see the time at which it was made

## Plan

- When the entry is added, the time should be added alongside the message
- AddEntry.jsx -> POST REQ -> DATABASE (message.time)

4. As a trainee
   So that I can post messages on Chitter as me
   I want to sign up for Chitter

## Plan

- SignUp.jsx -> POST REQ -> DATABASE (user - contains username, name, email & password)
- SignUp component has fields that are stored in state as they are filled in
- Once submitted, post request sent to database to store user
- Can then use this to log in to Chitter

5. As a trainee
   So that only I can post messages on Chitter as me
   I want to log in to Chitter

## Plan

- Login.jsx -> POST REQ -> DATABASE (user - contains username, name, email & password)
- If the email is in the database, and the password equals the one that's in the database, then the user is logged in

6. As a trainee
   So that I can avoid others posting messages on Chitter as me
   I want to log out of Chitter

## Plan

- Logout.jsx -> links back to home route and doesn't allow back to user homepage until logging back in

```

REQUIREMENTS

- You don't have to be logged in to see the peeps.

* Trainee software engineers sign up to chitter with their email, password, name and a username (e.g. ewithers@digitalfutures.com, password123, Edward Withers, dearshrewdwit). DONE

- The username and email are unique.

- Peeps (posts to chitter) have the name of the trainee and their user handle.

- Your README should indicate the technologies used, and give instructions on how to install and run the tests.
```
