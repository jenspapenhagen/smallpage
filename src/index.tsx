import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { ItemList } from './itemList';
import { Birdvoices } from './api/parser';

const App = () => {
    const [voicesData, setVoicesData] = useState<Birdvoices>();
    useEffect(() => {
        fetch('reversproxy.php?query=Keel-billed+Toucan', {
                method: 'GET',
                mode: 'no-cors',
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json"
                  },
            })
            .then(response => response.json())
            .then(data => setVoicesData(data));
    }, []);

    return voicesData ? (<>
        <div className='center'></div>
        <ItemList records={voicesData.recordings} />
        <br />
        <h5>Data form: <a href='https://www.xeno-canto.org' target='_blank' rel='noreferrer'> xeno-canto</a></h5>
        <h5>Image form: <a href='https://pixabay.com/de/photos/tukan-vogel-dschungel-zoo-exotisch-281491/'
                           target='_blank' rel='noreferrer'> Pixabay License</a></h5>
        <h5>Code here: <a href='https://github.com/jenspapenhagen/smallpage/'>gitHub</a></h5>
    </>
): (<><p>Loading ...</p></>)};

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root'),
);
