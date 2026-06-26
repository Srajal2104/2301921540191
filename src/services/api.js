const BASE_URL =
  "http://4.224.186.213/evaluation-service";



export async function createNotification(data){


try{


const response = await fetch(

`${BASE_URL}/notifications`,

{

method:"POST",

headers:{

"Content-Type":"application/json"

},

body:JSON.stringify(data)

}

);



const result =
await response.json();


console.log(
"CREATE:",
result
);


return result;


}

catch(error){

console.log(
"CREATE ERROR:",
error
);


return null;

}


}




export async function getNotifications(){


try{


const response = await fetch(

`${BASE_URL}/notifications`

);



const result =
await response.json();


console.log(
"GET:",
result
);



return result.notifications || result || [];


}

catch(error){

console.log(
"GET ERROR:",
error
);


return [];


}


}