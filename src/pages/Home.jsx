import { useState } from "react";

import NotificationForm from "../components/NotificationForm";
import NotificationList from "../components/NotificationList";

import "./Home.css";


function Home(){

const [notifications,setNotifications] = useState([]);



const addNotification=(notification)=>{

setNotifications(prev=>[

notification,

...prev

]);

};



return (

<div className="layout">


<aside className="sidebar">

<h2>
🔔 NotifyHub
</h2>


<div className="menu active">
🏠 Dashboard
</div>


<div className="menu">
📢 Notifications
</div>


<div className="menu">
⚙ Settings
</div>


<div className="menu">
👤 Profile
</div>


</aside>





<main className="main">


<header>


<div>

<h1>
Good Morning 👋
</h1>


<p>
Manage your campus notifications easily
</p>


</div>


<div className="profile">

<img
src="https://i.pravatar.cc/100"
/>


<div>

<b>
Admin User
</b>

<span>
Online
</span>

</div>


</div>


</header>





<div className="stats">


<div className="stat-card">

<h3>
Total
</h3>

<h1>
{notifications.length}
</h1>

<p>
Notifications
</p>

</div>




<div className="stat-card">

<h3>
Status
</h3>

<h1>
Active
</h1>

<p>
System running
</p>

</div>



<div className="stat-card">

<h3>
Delivery
</h3>

<h1>
99%
</h1>

<p>
Success rate
</p>

</div>


</div>





<div className="grid">



<div className="panel">


<h2>
Create Alert
</h2>


<NotificationForm
refresh={addNotification}
/>


</div>





<div className="panel">


<h2>
Recent Notifications
</h2>


<NotificationList

notifications={notifications}

/>


</div>



</div>



</main>


</div>


);


}


export default Home;