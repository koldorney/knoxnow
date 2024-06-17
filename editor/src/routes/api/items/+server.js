import { json } from '@sveltejs/kit';
import { connect, query, db } from '$lib/surrealdb';

/** @type {import('./$types').RequestHandler} */
export async function GET() {
	await connect();
	const result = await query('SELECT * FROM item');
	 // Adjust based on your database response format
	return json(result[0], {
		headers: {
			'Access-Control-Allow-Origin': '*', // Allow all origins
			'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
			'Access-Control-Allow-Headers': 'Content-Type'
		}
	});
}

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
	await connect();
	const data = await request.json();
	const result = await query('CREATE item SET name = $name, description = $description', {
		name: data.name,
		description: data.description
	});
	return json(result[0].result, { status: 201 });
}