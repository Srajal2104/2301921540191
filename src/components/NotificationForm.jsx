import {useState} from "react";
import {createNotification} from "../services/api";


function NotificationForm({refresh}){


const [message,setMessage]=useState("");

const send=async(e)=>{

e.preventDefault();


await createNotification({

userId:"1",

message,

type:"INFO"

});


setMessage("");

refresh();

};



return (

<div>

<h2>Create Notification</h2>


<form onSubmit={send}>


<input

placeholder="Write notification"

value={message}

onChange={
e=>setMessage(e.target.value)
}

/>


<button>
Send
</button>


</form>

</div>

)

}


export default NotificationForm;