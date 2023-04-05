import React from "react";
import { server } from "../../lib/api"
import { ListingsData, DeleteListingData, DeleteListingVariables } from "./types";

const LISTINGS = `
    query Listings {
        listings {
            id
            title
            image
            address
            price
            numOfGuests
            numOfBeds
            rating
        }
    }
`;

const DELETE_LISTING = `
    mutation DeleteListing($id: ID!) {
        deleteListing(id: $id) {
            id
        }
    }
`;

interface Props {
    title: string;
}

export const Listings = ( { title }: Props ) => {
    const fetchListings = async () => {
        console.log("Here!")
        const { data } = await server.fetch<ListingsData>({ query: LISTINGS})
        console.log(data.listings);
    }

    const deleteListing = async () => {
        const { data } = await server.fetch<DeleteListingData, DeleteListingVariables>({
            query: DELETE_LISTING,
            variables: {
                id: '64141ce7d8979c09906377b5'
            }
        });
        console.log(data);
    }
    return <div>
        <h2>{title}</h2>
        <button onClick={fetchListings}>Query Listings!</button>
        <button onClick={deleteListing}>Delete a Listing!</button>
    </div>;
};

