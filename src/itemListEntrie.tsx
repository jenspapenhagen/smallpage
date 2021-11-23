import React from 'react';
import { Recording } from './api/parser';
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";

type ItemListEntrieProps = {
    item: Recording,
}

export const ItemListEntrie = ({ item }: ItemListEntrieProps) => {
    const { id, url, en, lat, lng, length } = item as Recording;
    const audio = new Audio('http:' + url + '/download');

    const playAudio = () => {
        audio.play();
    };

    const pauseAudio = () => {
        audio.pause();
    };

    return (
        <li key={id}>
            <p>Record: {en}<br />{lat && ('in Latitude: ' + lat + ' und Longitude: ' + lng)} </p>
            <p><small>(with Length: {length})</small></p>
            <button onClick={playAudio}><BsFillPlayFill/> Play</button>
            <button onClick={pauseAudio}><BsPauseFill/> Pause</button>
        </li>
    );
};