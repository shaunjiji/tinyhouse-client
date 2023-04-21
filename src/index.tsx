import React from 'react';
import { render } from "react-dom";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import { Home, Host, Listing, NotFound, User, Listings } from './sections';
import reportWebVitals from './reportWebVitals';
import './styles/index.css'


const client = new ApolloClient({
    uri: "/api",
    cache: new InMemoryCache()
});

const App = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={Home}/>
                <Route path="/host" element={Host}/>
                <Route path="/listing/:id" element={Listing}/>
                <Route path="/listings/:location" element={Listings}/>
                <Route path="/user/:id" element={User}/>
                <Route element={NotFound}/>
            </Routes>
        </Router>
    )
}
render(
<ApolloProvider client={client}>
    <Listings title="Tinyhouse Listings"/>
</ApolloProvider>, document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
