const express = require("express");
const app = express();
const path = require('path');
const port = 5000; 

app.get('/', (request, response) => {
  response.send('Hello World!')
});


app.post('/post', (request, response) => {
  response.send('Hello World! showing post with post man')
});
/** 
 * loading single html file

app.get('/test', (request, response)=>{response.sendFile(path.join(__dirname, 'public', 'index.html'));
});
*/

//static folders

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});