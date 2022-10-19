import { v4 } from "uuid";
import client from "../apollo/client";
import LOGIN from "../mutations/login";

export async function loginUser( {username, password} ) {

	const { data, errors } = await client.query( {
		query: LOGIN,
		variables: {
			input: {
				clientMutationId: v4(), // Generate a unique id
				username: username || '',
				password: password || '',
			},
		},
	} );

	return data || {};
}