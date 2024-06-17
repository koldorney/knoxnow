import Surreal from 'surrealdb.js';

const db = new Surreal();
async function connect() {
  if (!db.connected) {
    await db.connect("http://localhost:8000/rpc");
  }
  try {
    await db.use({
      namespace: "mydata",
      database: "mydatabase.db"
    });
  } catch (error) {
    console.error("Failed to connect to SurrealDB:", error);
    throw error;
  }
}
async function query(sql, vars) {
  await connect();
  return await db.query(sql, vars);
}

export { connect as c, query as q };
//# sourceMappingURL=surrealdb-DcfFZCqU.js.map
