

import {Switch,Route,BrowserRouter } from "react-router-dom"
import Welcome from './Reminder/Welcome';
import Chat from './Reminder/Chat';



function App() {

  

  return (
   
     <BrowserRouter>
     <Switch>
      
    <Route exact path="/">
      <Welcome/>
    </Route>

     <Route exact path="/chat">
       <Chat/>
     </Route>
       

     </Switch>
      
      
     </BrowserRouter>
    
     
    
  );
}

export default App;
