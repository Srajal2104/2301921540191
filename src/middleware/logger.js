import {sendLog} from "../services/api";


export const logger=(message,data=null)=>{


console.log(
 `[LOG] ${message}`,
 data
);


sendLog(
 "info",
 message
);


};