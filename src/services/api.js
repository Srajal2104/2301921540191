const BASE_URL =
"http://4.224.186.213/evaluation-service";


const headers=()=>({

"Content-Type":"application/json",

Authorization:
`Bearer ${localStorage.getItem("token")}`

});



export async function createNotification(data){


const res =
await fetch(
`${BASE_URL}/notifications`,
{

method:"POST",

headers:headers(),

body:JSON.stringify(data)

});


return res.json();

}




export async function getNotifications(){


const res =
await fetch(
`${BASE_URL}/notifications`,
{

headers:headers()

});


return res.json();

}