function NotificationList({notifications}){


return (

<div>


<h2>Your Notifications</h2>


{

notifications.length===0 ?

<p>No notifications yet</p>


:

notifications.map((n,i)=>(

<div key={i}>

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

)

}

export default NotificationList;