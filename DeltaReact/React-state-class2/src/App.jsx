import './App.css'
import LudoBoard from "./LudoBoard";
import TodoList from "./TodoList";
import Lottery from "./Lottery";
import Ticket from "./Ticket";
import {sum} from "./helper";

function App(){
  let winCondition = (ticket)=>{
    return ticket.every((num) => num === ticket[0]);
  };

  return(
    <>
      <Lottery n={3} winCondition={winCondition}/>
    </>
  );
}

export default App;
