import React from "react";
import ReactDOM from "react-dom";
import { ItemList } from "./itemList";
import voicesData from './data.json';

const App = () => (<>
      <div className="center"><img src="./img/toucan-281491_1280.webp"  width="250" /></div>
      <ItemList records={voicesData.recordings} />
      <br />
      <h5>Data form: <a href="https://www.xeno-canto.org" target="_blank" rel="noreferrer"> xeno-canto</a></h5>
      <h5>Image form: <a href="https://pixabay.com/de/photos/tukan-vogel-dschungel-zoo-exotisch-281491/" target="_blank" rel="noreferrer"> Pixabay License</a></h5>
      <h5>Code here: <a href="https://github.com/jenspapenhagen/smallpage/">gitHub</a></h5>
    </>
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
