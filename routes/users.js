const express = require('express');
const router = express.Router();

let users = [
    {
        firstName: "John",
        lastName: "Wick",
        email:"johnwick@gamil.com",
        DOB:"22-01-1990",
    },
    {
        firstName: "John",
        lastName: "smith",
        email:"johnsmith@gamil.com",
        DOB:"21-07-1983",
    },
    {
        firstName: "Joyal",
        lastName: "white",
        email:"joyalwhite@gamil.com",
        DOB:"21-03-1989",
    },
];

// GET request: Retrieve all users
router.get("/",(req,res)=>{
  // Copy the code here
  res.send(users);
  // res.send("Yet to be implemented")//This line is to be replaced with actual return value
});

// GET by specific ID request: Retrieve a single user with email ID
router.get("/:email",(req,res)=>{
  // Copy the code here
    res.send(users.filter( e => e.email == req.params.email));

  //res.send("Yet to be implemented")//This line is to be replaced with actual return value
});


// POST request: Create a new user
router.post("/",(req,res)=>{
  // Copy the code here
  if (req.query){
     users.push({
        "firstName":req.query.firstName,
        "lastName":req.query.lastName,
        "email":req.query.email,
        "DOB":req.query.DOB
    });
    res.send("New user "+req.query.firstName+" has been added to the set of them.");
;  } else {
    res.send("Something went wrong. Please check URL query string.");
}
  //res.send(req.query.firstName + " " + req.query.email);
  //res.send("Yet to be implemented")//This line is to be replaced with actual return value
});


// PUT request: Update the details of a user by email ID
router.put("/:email", (req, res) => {
    // Extract email parameter and find users with matching email
    const email = req.params.email;
    let filtered_users = users.filter((user) => user.email === email);
    
    if (filtered_users.length > 0) {
        // Select the first matching user and update attributes if provided
        let filtered_user = filtered_users[0];
        
         // Extract and update DOB if provided
        
        let DOB = req.query.DOB;    
        if (DOB) {
            filtered_user.DOB = DOB;
        }
        
        /*
        Include similar code here for updating other attributes as needed
        */
        
        // Replace old user entry with updated user
        users = users.filter((user) => user.email != email);
        users.push(filtered_user);
        
        // Send success message indicating the user has been updated
        res.send(`User with the email ${email} updated.`);
    } else {
        // Send error message if no user found
        res.send("Unable to find user!");
    }
});


// DELETE request: Delete a user by email ID
router.delete("/:email", (req, res) => {
  // Copy the code here
  res.send("Yet to be implemented")//This line is to be replaced with actual return value
});

module.exports=router;
