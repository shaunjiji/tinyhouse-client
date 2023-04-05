import React from 'react';
import { render } from "react-dom";
import { Listings } from './sections';

import reportWebVitals from './reportWebVitals';


render(<Listings title="Tinyhouse Listings"/>, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
