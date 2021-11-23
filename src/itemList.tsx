import React, { useEffect, useState } from 'react';
import { Recording } from './api/parser';
import { ItemListEntrie } from './itemListEntrie';
import { BsChevronBarLeft, BsChevronBarRight, BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

type ItemListProps = {
    records: Recording[],
}

export const ItemList = ({ records }: ItemListProps) => {
    const [count, setCount] = useState(0);
    const [hold, setHold] = useState(10);
    const MAX: number = records.length;
    const STEP_SIDE = 10;

    // Create handleIncrement event handler
    const handleIncrement = () => {
        scrollTo(0, 0);
        setCount(prevCount => prevCount + STEP_SIDE);
    };

    //Create handleDecrement event handler
    const handleDecrement = () => {
        scrollTo(0, 0);
        setCount(prevCount => prevCount - STEP_SIDE);
    };
    const resetCounter = () => {
        scrollTo(0, 0);
        setCount(0);
    };

    const toTheLastCounter = () => {
        scrollTo(0, 0);
        setCount(MAX - STEP_SIDE);
    };

    useEffect(() => setHold((count + STEP_SIDE) != MAX ? (count + STEP_SIDE) : MAX), [count, MAX]);

    return (
        <>
            <h2>Liste von Tukan Sounds</h2>
            <ul>
                {records
                    .slice(count, hold)
                    .map(record => (<ItemListEntrie item={record} key={record.id} />))}
            </ul>
            <div className='buttonDiv'>
                <button><BsChevronBarLeft onClick={resetCounter} /></button>
                <button ><BsChevronCompactLeft onClick={handleDecrement} /></button>
                <h4> Record {count} of {MAX} </h4>
                <button><BsChevronCompactRight  onClick={handleIncrement}/></button>
                <button><BsChevronBarRight  onClick={toTheLastCounter}/></button>
            </div>
        </>
    );
};
