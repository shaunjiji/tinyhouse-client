import React from "react";
import { gql } from "@apollo/client";
import { useQuery, useMutation } from "@apollo/client"
import Avatar from "antd/es/avatar/avatar";
import { Button } from "antd";
import List from "antd/es/list";
import { ListingsData, DeleteListingData, DeleteListingVariables } from "./types";
import '/Users/shaunjiji/Documents/Tinyhouse/tinyhouse_v1/tinyhouse-client/src/styles/Listings.css';


const LISTINGS = gql`
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

const DELETE_LISTING = gql`
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
    const { data, loading, error, refetch } = useQuery<ListingsData>(LISTINGS);

    const [deleteListing, { loading: deleteListingLoading, error: deleteListingError }] = useMutation<DeleteListingData, DeleteListingVariables>(DELETE_LISTING);

    const handleDeleteListing = async (id: string) => {
        await deleteListing({ variables: { id } });
        refetch();
    };
    
    const listings = data ? data.listings : null;

    const listingsList = listings ? ( <List 
        itemLayout="horizontal" 
        dataSource={listings} 
        renderItem={(listing) => (
        <List.Item actions={[<Button type="primary" onClick={() => handleDeleteListing(listing.id)}>Delete</Button>]}> 
            <List.Item.Meta 
            title={listing.title} 
            description={listing.address} 
            avatar={
                <Avatar 
                    src={listing.image} 
                    shape="square" 
                    size={48}/>}
                />
        </List.Item>)} />) : null
   
    
    if (error){
        return <h2>Uh oh! Something went wrong - please try again later</h2>
    }

    if (loading){
        return <h2>Loading...</h2>
    }

    const deleteListingLoadingMessage = deleteListingLoading ? <h4> Deleting in progress... </h4> : null;
    
    const deleteListingLoadingErrorMessage = deleteListingError ? ( <h4> Uh oh! Something went wrong with deleting - please try again later  </h4>) : null;
    


    return ( <div className="listings">
        <h2>{title}</h2>
        {listingsList}
        {deleteListingLoadingMessage}
        {deleteListingLoadingErrorMessage}
    </div>);
};

