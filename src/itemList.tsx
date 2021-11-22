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
    scrollTo(0, 0)
    setCount(prevCount => prevCount + STEP_SIDE );
  };

  //Create handleDecrement event handler
  const handleDecrement = () => {
    scrollTo(0, 0)
    setCount(prevCount => prevCount - STEP_SIDE);
  };
  const resetCounter = () => {
    scrollTo(0, 0)
    setCount(0);
  }

  const toTheLastCounter = () => {
    scrollTo(0, 0)
    setCount(MAX - STEP_SIDE);
  }

  useEffect(() => setHold((count + STEP_SIDE) != MAX ? (count + STEP_SIDE) : MAX), [count, MAX])

  return (
   <>
    <h2>Liste von Tukan Sounds</h2> 
    <ul>
      {records
      .slice(count, hold)
      .map(record => (<ItemListEntrie item={record} key={record.id} />))} 
    </ul>
    <div className="buttonDiv">
          <button onClick={resetCounter} >to the Start</button>
          <button onClick={handleDecrement}>&#129136;</button>
          <h5> Record {count} of {MAX} </h5>
          <button onClick={handleIncrement} >&#129138;</button>
          <button onClick={toTheLastCounter}>to the End</button>          
    </div>
    </>
    )};
