import "./Notification.css";


function NotificationList(
{notifications=[]}
){


if(notifications.length===0){

return (

<p>
No notifications yet 🔔
</p>

);

}



return (

<div>


{
notifications.map((n,index)=>(


<div 
className="notification"
key={index}
>


<h3>
{n.type}
</h3>


<p>
{n.message}
</p>


</div>


))

}


</div>

);


}


export default NotificationList;