## Testing auth endpoints with POSTMAN

You have tested the API endpoints with cURL. An easier and more user-friendly way to test these endpoints with the graphical user interface tool (GUI), Postman.

1. Go to Postman. Sign-up for a new Postman account if you don't already have one. Sign-in to your account.

After you login to Postman, click on "New Request".

*Note: If the server is running in the theia lab please stop the server by press CTRL + C. Now start the server by running the below command which will listen to port 5000.*

`npm run start_auth`
 
So far we were accessing all the endpoints without authentication but now we will be using authentication to access the endpoints.

2. Copy the URL from the "Launch application" (in Coursera) and add the `login` as an endpoint to add the user details in the POST REQUEST which will look like below:

`https://igorsavinkin-5000.theiadocker-2-labs-prod-theiak8s-4-tor01.proxy.cognitiveclass.ai/login`


**User details should be in the below format**
 
`{
    "user":{
        "name":"abc",
        "id":1
    }
}`
Now click *Send* in Postman to complete login.
