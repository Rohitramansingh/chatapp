import React ,{ useState}from 'react';
import '../Reminder/chat.css';
import '../Reminder/media.css';
import { Link  } from 'react-router-dom';

let user;
function Welcome ()
{

    const [name,setName]=useState("");

    const senddata=()=>{
   user=document.getElementById('btn1').value;


    }

  
  
  
  
    return(
        <div className='webmain'>

          
           
         <div className='websubdiv' >

         <h4 className=' heading text-center'>Chat app</h4>
         
             
                 <input
                 className='welinp'
                 id="btn1"
                 type="text"
                 placeholder="enter name"
                 onChange={(e)=>setName(e.target.value)}
                 /> 

               

               <Link className='welbtn' to="/chat" onClick={(e)=>!name ?e.preventDefault():null}>
               <button  onClick={senddata}  className='welbtn'>login</button>
               </Link>  
                 
             

         </div>
        </div>
    )
}
export default Welcome
export {user}
