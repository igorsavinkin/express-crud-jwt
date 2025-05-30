const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const app = express();


// The advantages of token based authentication include 
 // ** scalability
 // ** flexibility
 // ** security. 

// create application/json parser
var jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })
 
const secretKey = 'your-secret-key'; // Replace with a strong secret key

app.get('/', (req,res)=>{
	res.send('<h3>Login</h3><form method="post" action="login" ><input name="username" value="Igor" /><br /><input name="password" value="password" /><br /><input value="Submit" type="submit"></form>');
});

app.post('/login', urlencodedParser, (req, res) => {	
	const { username, password } = req.body;
	// Simulated user authentication
	if (username === 'Igor' && password === 'password') {
		// Generate JWT with username payload
		const token = jwt.sign({ "username":username, "test":"1234" }, secretKey, { expiresIn: '1h' });
		
		// Put token into "cookie" header
		res.cookie('token', token, { httpOnly: true }); 
		res.send('You are logged in. <form method="get" action="dashboard" >\
		<br /><input value="to Dashboard" type="submit"></form>'); 
	} else {
		res.send('Invalid credentials');
	}
});

// GET endpoint to access protected resource (dashboard)
app.get('/dashboard', (req, res) => {
  // Get token from Authorization header 
  //console.log(req.headers);
  //console.log("Cookies: " + req.cookies);
  const token = req.headers.cookie.split("token=")[1]; 
  if (token) {
    // Verify JWT token
    jwt.verify(token, secretKey, (err, decoded) => {
      if (err) {
        res.send('Invalid token');
      } else {
        // Token is valid, send welcome message with username
        res.send(`Welcome "${decoded.username}" ; some service info: ${decoded.test}`);
      }
    });
  } else {
    res.send('Token missing');
  }
});

// Start server
var port=9900;
app.listen(port, () => console.log('Server running on port '+port));
