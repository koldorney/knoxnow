import Surreal from 'surrealdb.js';

export const db = new Surreal();
const containername = process.env.DB_NAME;
const containerport = process.env.DB_PORT;
const dbconnection = `http://${containername}:${containerport}/rpc`;

export async function connect() {
	// Connect to the database
	await db.connect(dbconnection, {
		// Set the namespace and database for the connection
		namespace: 'mydata',
		database: 'mydatabase.db',
		// Set the authentication details for the connection
		auth: {
			username: 'root',
			password: 'root'
		},
	});
}

export async function query(sql, vars) {
	await connect();
	return await db.query(sql, vars);
}
