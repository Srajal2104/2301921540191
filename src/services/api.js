import { logger } from "../middleware/logger";


const BASE_URL =
"http://4.224.186.213/evaluation-service";


let token = "";


export const registerUser = async(user)=>{

    logger("Register API called",user);


    const res = await fetch(
        `${BASE_URL}/register`,
        {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(user)
        }
    );


    return await res.json();

};



export const authenticate = async(data)=>{


    logger("Auth API called");


    const res = await fetch(
        `${BASE_URL}/auth`,
        {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(data)
        }
    );


    const result = await res.json();


    token=result.access_token;


    localStorage.setItem(
        "token",
        token
    );


    return result;

};





export const sendLog = async(
    level,
    message
)=>{


await fetch(
 `${BASE_URL}/logs`,
 {
  method:"POST",
  headers:{
   "Content-Type":"application/json"
  },

  body:JSON.stringify({

    stack:"frontend",
    level:level,
    package:"api",
    message:message

  })

 }
);


};





export const apiRequest = async(
url,
options={}
)=>{


const token =
localStorage.getItem("token");


const res =
await fetch(
 url,
 {

 ...options,

 headers:{

  "Content-Type":"application/json",

  Authorization:
  `Bearer ${token}`

 }

 }
);


return await res.json();


};