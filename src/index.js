import React from 'react';
import ReactDOM from 'react-dom';
import App from './layouts/App';
import {BrowserRouter,Route} from "react-router-dom";

ReactDOM.render(
    <BrowserRouter>
      <Route component={App}/>
    </BrowserRouter>,
    document.querySelector("#app")
);
