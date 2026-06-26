import {useEffect,useState} from "react";

import NotificationForm from "../components/NotificationForm";
import NotificationList from "../components/NotificationList";

import {getNotifications} from "../services/api";

import {logger} from "../middleware/logger";


function Home(){


const [notifications,setNotifications]=useState([]);



const loadData=async()=>{

 logger("Loading notifications");

 const data=await getNotifications();

 setNotifications(data);

};



useEffect(()=>{

 loadData();

},[]);



return (

<div>


<h1>
Notification System
</h1>


<NotificationForm refresh={loadData}/>


<NotificationList 
notifications={notifications}
/>


</div>

)


}


export default Home;