import React from "react";
import { Recording } from "./api/parser";

type ItemListEntrieProps = {
    item: Recording,
}

export const ItemListEntrie = ( {item}: ItemListEntrieProps) => {

    const {id, url , en, lat, lng}  = item as Recording;

    const audio = new Audio("http:" + url + "/download")
    const start = () => {
      audio.play()
    }


   return ( 
   <li key={id}>
       <p>Record: {en}<br/>{lat && ("in Latitude: " + lat + " und Longitude: " + lng)} </p>
       <button onClick={start}>&#9654; Play </button>     
   </li>
       )
};