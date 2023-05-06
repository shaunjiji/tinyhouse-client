import { gql } from "apollo-server-express";

export const LOG_out = gql `
   mutation LogOut {
        logOut {
            id  
            token
            avatar
            hasWallet
            didRequest
        }
    }
`;