import React from "react";
import { server } from "../../lib/api"

interface Props {
    title: string;
}

export const Listings = ( { title }: Props ) => {

    const fetchListings = () => {
        console.log("Here!")
    }
    return <div>
        <h2>{title}</h2>
        <button onClick={fetchListings}>Query Listings!</button>
    </div>;
};

