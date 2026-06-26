import {useState} from "react";
import {createNotification} from "../services/api";
import "./Notification.css";


function NotificationForm({refresh}){


const [message,setMessage]=useState("");
const [sending,setSending]=useState(false);



const send = async(e)=>{

e.preventDefault();


if(!message.trim())
return;


const newNotification = {

message: message,

type:"INFO",

userId:"1"

};


// show immediately
refresh(newNotification);


setMessage("");

setSending(true);



await createNotification(newNotification);



setSending(false);


};



return (

<form onSubmit={send}>


<textarea

placeholder="Write your notification..."

value={message}

onChange={
e=>setMessage(e.target.value)
}

/>



<button disabled={sending}>

{
sending
?
"Sending..."
:
"Send Notification"
}

</button>


</form>

)

}


export default NotificationForm;