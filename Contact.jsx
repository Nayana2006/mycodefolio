import { useState } from "react";
import "./Contact.css";


function Contact(){

const [name,setName] = useState("");
const [email,setEmail] = useState("");
const [subject,setSubject] = useState("");
const [message,setMessage] = useState("");



const handleSubmit = (e)=>{

e.preventDefault();


if(!name || !email || !subject || !message){

alert("Please fill all fields ");

return;

}


alert("Message Sent Successfully ");



setName("");
setEmail("");
setSubject("");
setMessage("");

};



return(


<div className="contact-page">


<div className="contact-container">





{/* LEFT CONTACT FORM */}


<form 
className="contact-form"
onSubmit={handleSubmit}
>


<h1>

Let's Connect

</h1>



<p>

Have a project, internship opportunity, or collaboration?
Feel free to contact me.

</p>




<input

type="text"

placeholder="Your Name"

value={name}

onChange={(e)=>setName(e.target.value)}

/>





<input

type="email"

placeholder="Your Email"

value={email}

onChange={(e)=>setEmail(e.target.value)}

/>





<input

type="text"

placeholder="Subject"

value={subject}

onChange={(e)=>setSubject(e.target.value)}

/>





<textarea

placeholder="Write your message..."

value={message}

onChange={(e)=>setMessage(e.target.value)}

></textarea>





<button type="submit">

Send Message

</button>



</form>










{/* RIGHT PROFILE CARD */}



<div className="profile-card">





<img

className="profile-img"

src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"

alt="Nayana"

/>





<h2>

Nayana Nagraj

</h2>




<h3>

Frontend Developer

</h3>




<p>

Passionate Frontend Developer skilled in HTML,
CSS, JavaScript, React.js, Node.js and MongoDB.
I enjoy building modern, responsive and user-friendly
web applications.

</p>







<div className="contact-info">


<p>
nayananagraj2006@gmail.com
</p>



<p>
📱+91 9876543210
</p>



<p>
 Karnataka, India
</p>



</div>








<div className="social">



<a

href="https://github.com/"

target="_blank"

rel="noreferrer"

>

<button>

Github

</button>

</a>





<a

href="https://www.linkedin.com/"

target="_blank"

rel="noreferrer"

>

<button>

LinkedIn

</button>

</a>





</div>







</div>





</div>


</div>



)


}


export default Contact;