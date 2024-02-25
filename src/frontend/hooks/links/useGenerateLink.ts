import { gql } from 'types/__generated__/gql';
import { useMutation } from '@apollo/client';

const GENERATE_LINK = gql(`
    mutation getShortLinks($url: URL!) {
        shortenLink(url: $url) {
            bee_id
            created_at
            expires_at
            last_visited_at
            name
            original_url
            owner {
            id
            email
            last_login
            password
            updated_at
            created_at
            }
        }
    }
`);

export default function(){
    return useMutation(GENERATE_LINK);
}