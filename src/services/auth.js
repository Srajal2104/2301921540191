const BASE_URL =
"http://4.224.186.213/evaluation-service";


export async function authenticate(){

const register = await fetch(
`${BASE_URL}/register`,
{
method:"POST",
headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({

email:"YOUR_EMAIL",
name:"YOUR_NAME",
mobileNo:"YOUR_MOBILE",
githubUsername:"YOUR_GITHUB",
rollNo:"2301921540191",
accessCode:"YOUR_ACCESS_CODE"

})

});


const regData =
await register.json();



const auth = await fetch(
`${BASE_URL}/auth`,
{
method:"POST",
headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({

email:"YOUR_EMAIL",
name:"YOUR_NAME",
rollNo:"2301921540191",
accessCode:"YOUR_ACCESS_CODE",

clientID:regData.clientID,

clientSecret:regData.clientSecret

})

});


const authData =
await auth.json();


localStorage.setItem(
"token",
authData.access_token
);


return authData.access_token;

}