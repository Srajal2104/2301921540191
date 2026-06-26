function NotificationList({notifications}){


return (

<div>

<h2>Notifications</h2>


{
notifications.length===0 ?

<p>No Notifications</p>

:

notifications.map((n,index)=>(

<div key={index}>

<h4>{n.type}</h4>

<p>
User: {n.userId}
</p>

<p>
{n.message}
</p>

<hr/>

</div>

))

}


</div>

)

}

export default NotificationList;