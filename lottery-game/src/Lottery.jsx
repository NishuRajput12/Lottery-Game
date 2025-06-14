import { useState } from "react";
import "./Lottery.css";
import { genTicket, sum } from "./Helper";

export default function Lottery() {
  let [ticket, setTicket] = useState([genTicket(3)]);
  let isWinning = sum(ticket) == 15;
  console.log(isWinning);
  function handleBuyTicket(){
    setTicket(genTicket(3));
  }
  return (
    <>
      <h1>Lottery</h1>
      <div className="ticket">
        <span>{ticket[0]}</span>
        <span>{ticket[1]}</span>
        <span>{ticket[2]}</span>
       </div>
       <button onClick={handleBuyTicket} className="btn">By Ticket</button>
       <h3>{isWinning && "Congratulations, you won!"}</h3>
    </>
  );
}
