import { logger } from "../middleware/logger";

const BASE_URL =
"http://4.224.186.213/evaluation-service";


export const sendLog = async(
 level,
 message
)=>{

 try{

 await fetch(
 `${BASE_URL}/logs`,
 {
  method:"POST",
  headers:{
   "Content-Type":"application/json"
  },

  body:JSON.stringify({
   stack:"frontend",
   level,
   package:"api",
   message
  })

 });

 logger("Log sent");

 }
 catch(error){

 logger("Log failed",error);

 }

};