import {useState} from "react";
import "./Lottery.css";
import {genTicket, sum } from "./helper";
import Ticekt from "./Ticket";
import Button from "./Button";

export default function Lottery({n=3 , winCondition = 15}){
    let [ticket, setTicket] = useState(genTicket(n));
    let isWinning = sum(ticket) === winCondition(ticket);

    let buyTicket = () =>{
        setTicket(genTicket(n));
    };

    return ( 
    <div>
    <h1>Lottery Game!</h1>
    <Ticket ticket={ticket}/>
    <Button action={buyTicket}></Button>
    <h3>{isWinning && "Congratulations, you won!"}</h3>
    </div>
    );
}