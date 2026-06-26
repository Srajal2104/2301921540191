import { useState } from "react";
import { sendNotification } from "../services/api";
import { logger } from "../middleware/logger";


function NotificationForm({refresh}) {

  const [form,setForm] = useState({
    userId:"",
    message:"",
    type:"INFO"
  });


  const handleChange=(e)=>{
    setForm({
      ...form,
      [e.target.name]:e.target.value
    });
  };


  const submit=async(e)=>{
    e.preventDefault();

    logger("Form submitted",form);

    await sendNotification(form);

    alert("Notification Sent");

    setForm({
      userId:"",
      message:"",
      type:"INFO"
    });

    refresh();
  };


  return (
    <form onSubmit={submit}>

      <h2>Create Notification</h2>

      <input
        name="userId"
        placeholder="User ID"
        value={form.userId}
        onChange={handleChange}
      />


      <input
        name="message"
        placeholder="Message"
        value={form.message}
        onChange={handleChange}
      />


      <select
        name="type"
        value={form.type}
        onChange={handleChange}
      >
        <option>INFO</option>
        <option>WARNING</option>
        <option>SUCCESS</option>
      </select>


      <button>
        Send
      </button>

    </form>
  )
}


export default NotificationForm;