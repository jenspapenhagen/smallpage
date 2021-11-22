import React, { useEffect, useState } from "react";
import { Recording} from "./api/parser";
import { ItemListEntrie} from "./itemListEntrie";

type ItemListProps = {
  records: Recording[],
}

export const ItemList =  ({ records }: ItemListProps)  => { 
  const [count, setCount] = useState(0);
  const [hold, setHold] = useState(10);
  const MAX: number = records.length;
  const STEP_SIDE = 10;
  
  // Create handleIncrement event handler
  const handleIncrement = () => {
    setCount(prevCount => prevCount + STEP_SIDE );
  };

  //Create handleDecrement event handler
  const handleDecrement = () => {
    setCount(prevCount => prevCount - STEP_SIDE);
  };

  useEffect(() => setHold((count + STEP_SIDE) != MAX ? (count + STEP_SIDE) : MAX), [count, MAX])

  const resetCounter = () => {
    setCount(0);
  }

  const toTheLastCounter = () => {
    setCount(MAX - STEP_SIDE);
  }

 

  return (
   <>
    <h2>Liste von Tukan Sounds</h2> 
    <ul>
      {records
      .slice(count, hold)
      .map(record => (<ItemListEntrie item={record} key={record.id} />))} 
    </ul>
    <div className="buttonDiv">
          <button onClick={resetCounter}  className="bg">to the Start</button>
          <button onClick={handleDecrement} className="bg">🠔</button>
          <h5> Record {count} of {MAX} </h5>
          <button onClick={handleIncrement} className="bg">➔</button>
          <button onClick={toTheLastCounter} className="bg">to the end</button>          
    </div>
    </>
    )};
