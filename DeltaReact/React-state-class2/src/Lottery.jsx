import {useState} from "react";
import "./Lottery.css";
import {genTicket, sum} from "./helper";

export default function Lottery({n, winningSum}){
    let [ticket, setTicket] = useState(genTicket(n));
    let isWinning = sum(ticket) === 15;

    let buyTicket = () =>{
        setTicket(genTicket(3));
    };

    return ( 
    <div>
    <h1>Lottery Game!</h1>
    <div className="ticket">
        <span>{ticket[0]}</span>
        <span>{ticket[1]}</span>
        <span>{ticket[2]}</span>
    </div>
    <br /><br />
    <button onClick={buyTicket}>Buy New Ticket</button>
    <h3>{isWinning && "Congratulations, you won!"}</h3>
    </div>
    );
}