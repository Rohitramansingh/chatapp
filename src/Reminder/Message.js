import React from 'react';
import "../Reminder/chat.css";
import '../Reminder/media.css';

function Message({user,message,classs}){
    if(user)
    {
       return(
        <div className={`messageBox ${classs}`}>
            <div className='user txtstart'>
            {`${user}`}
            </div>

             <div className='messagediv'> {`${message}`}</div>
           
        
        
        </div>
    )
    }else{
        return(
            <div className={`messageBox ${classs}`}>
            <div className='user txtend'>
              you
            </div>

             <div className='messagediv'> {`${message}`}</div>
           
        
        
        </div>
        )
    }
   
}

export default Message;