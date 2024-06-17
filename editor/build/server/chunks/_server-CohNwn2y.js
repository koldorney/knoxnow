import { j as json } from './index-BIAFQWR9.js';
import { c as connect, q as query } from './surrealdb-DcfFZCqU.js';
import 'surrealdb.js';

async function GET() {
  await connect();
  const result = await query("SELECT * FROM item");
  return json(result[0], {
    headers: {
      "Access-Control-Allow-Origin": "*",
      // Allow all origins
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type"
    }
  });
}
async function POST({ request }) {
  await connect();
  const data = await request.json();
  const result = await query("CREATE item SET name = $name, description = $description", {
    name: data.name,
    description: data.description
  });
  return json(result[0].result, { status: 201 });
}

export { GET, POST };
//# sourceMappingURL=_server-CohNwn2y.js.map
