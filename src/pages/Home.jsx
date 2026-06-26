import {useEffect,useState} from "react";

import NotificationForm from "../components/NotificationForm";
import NotificationList from "../components/NotificationList";

import {authenticate} from "../services/auth";
import {getNotifications} from "../services/api";


function Home(){


const [data,setData]=useState([]);



async function load(){

const res =
await getNotifications();

setData(res);

}



useEffect(()=>{

authenticate()
.then(load)

},[]);



return (

<div>


<h1>
Campus Notification System
</h1>


<NotificationForm
refresh={load}
/>


<NotificationList
notifications={data}
/>


</div>

)

}

export default Home;