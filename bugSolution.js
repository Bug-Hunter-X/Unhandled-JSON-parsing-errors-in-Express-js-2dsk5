const express = require('express');
const app = express();
app.use(express.json());
app.post('/users', (req, res) => {
  try {
    const user = req.body;
    console.log(user);
    res.send('User created');
  } catch (error) {
    console.error('Error parsing JSON:', error);
    res.status(400).send('Invalid JSON request');
  }
});
app.listen(3000, () => console.log('Server listening on port 3000'));