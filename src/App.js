
import {HashRouter} from "react-router-dom";
import {Switch,Route } from "react-router-dom"
import Welcome from './Reminder/Welcome';
import Chat from './Reminder/Chat';



function App() {

  

  return (
   
     <HashRouter>
     <Switch>
      
    <Route exact path="/">
      <Welcome/>
    </Route>

     <Route exact path="/chat">
       <Chat/>
     </Route>
       

     </Switch>
      
      
     </HashRouter>
    
     
    
  );
}

export default App;
