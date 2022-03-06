import React, {useEffect, useState} from 'react';
import {user} from "../Reminder/Welcome";
import socketIO from "socket.io-client";
import '../Reminder/media.css';
import '../Reminder/chat.css';
// import SendIcon from '@mui/icons-material/Send';
import Message from '../Reminder/Message';
import ReactScrollToBottom from "react-scroll-to-bottom";

const ENDPOINT='https://chating-applica.herokuapp.com/';
let socket;
let msg;



function Chat()
{

const [id,setid]=useState("");

const [message,setMessage]=useState([]);
const [header,setHeader]=useState("user");
  
const send=()=>{
   msg=document.getElementById('sendid').value;
  socket.emit('message',{msg,id});
   msg=document.getElementById('sendid').value="";
}





  useEffect( ()=>{
     socket=socketIO(ENDPOINT,{transports:['websocket']});
      socket.on('connect',()=>{
        // alert("socket connected");
        setid(socket.id);
      });

    //   return ()=>{}
    socket.emit('joined',{user});
    
    socket.on('welcome',(data)=>{
      setHeader(user);
      setMessage([...message,data]);
       console.log(data.user,data.message);
      

       socket.on('userjoined',(data)=>{
      setMessage([...message,data]);
      

         console.log(data.message);
       });


       socket.on('leave',(data)=>{
      setMessage([...message,data]);

         console.log(data.message);
       })

       return()=>{
         socket.emit('disconnect');
         socket.off();
       }

    })



  },[]);  

  useEffect(()=>{
    socket.on('sendmessage',(data)=>{
      setMessage([...message,data]);
      console.log(message);
      //  setlobby([...lobby,data]);


      return()=>{
        socket.off();
      }


    })

  },[message]);

    return(
      

     


         <div className="outerbox">
          
           <div className='innerbox'>

           <div className='header'>
            <div className='headerdiv'>{header} </div>
            <a  className="a" href='/'>x</a>
           </div>


           <ReactScrollToBottom className='chatbox '>
          
             
             
            {
              message.map((p,index)=><Message 
              user={p.id===id?'':p.user}
               classs={p.id===id?'right':'left'}
               message={p.message}/>)
            }
             

           </ReactScrollToBottom >

           <div className='msgbox'>
             <input 
             
              id="sendid"   
             type="text"
             placeholder='Send msg'
             />
             <button 
             
             className="sendbtn"
              onClick={send}>
              send
             </button>

           </div>

           </div>
         
    
         
            
        


        </div>
    )
}
export default Chat;