# Unhandled JSON Parsing Errors in Express.js

This repository demonstrates a common but easily overlooked error in Express.js applications: the lack of proper error handling during JSON body parsing.  Without appropriate safeguards, malformed JSON requests can cause the server to crash, leading to downtime and potential security vulnerabilities. 

The `bug.js` file shows a vulnerable Express.js server. The `bugSolution.js` provides a robust solution to mitigate this issue. 

## Reproducing the Bug

1.  Clone the repository.
2.  Run `npm install` to install Express.js.
3.  Start the server using `node bug.js`.
4.  Send a malformed JSON request (e.g., using curl or Postman) to the `/users` endpoint with an improperly formatted JSON body.  Observe that the server crashes.

## Solution

The `bugSolution.js` file shows the correct way to handle potential errors during JSON parsing in Express.js. The key is to use try-catch blocks and send appropriate error responses to clients instead of letting the server crash.