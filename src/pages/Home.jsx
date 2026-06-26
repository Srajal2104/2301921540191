import { useState } from "react";

import NotificationForm from "../components/NotificationForm";
import NotificationList from "../components/NotificationList";



function Home(){


const [notifications,setNotifications] = useState([]);



const addNotification = (notification)=>{


setNotifications((prev)=>[

notification,

...prev

]);


};



return (

<div>


<h1>
🔔 NotifyHub
</h1>



<NotificationForm

refresh={addNotification}

/>



<NotificationList

notifications={notifications}

/>



</div>

);


}


export default Home;