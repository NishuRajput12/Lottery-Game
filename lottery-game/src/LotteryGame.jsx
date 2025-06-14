import { useState } from "react";

import { genTicket, sum } from "./Helper";
import Ticket  from "./Ticket";
import Button  from "./Button";


export default function LotteryGame({n,winCondition}) {
  let [ticket, setTicket] = useState(genTicket(n));
  let isWinning = winCondition(ticket);

  function handleBuyTicket(){
    setTicket(genTicket(n));
  }
  return (
    <>
      <h1>Lottery</h1>
      <Ticket ticket={ticket}/>
       <Button action={ handleBuyTicket}/>
       <h3>{isWinning && "Congratulations, you won!"}</h3>
    </>
  );
}
