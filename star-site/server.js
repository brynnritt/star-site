const http = require('http');
const app = require('./src/app');
const port = 3000;

// Start listening for requests
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});