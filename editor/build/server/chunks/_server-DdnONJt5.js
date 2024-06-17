import { c as connect, q as query } from './surrealdb-DcfFZCqU.js';
import { j as json } from './index-BIAFQWR9.js';
import 'surrealdb.js';

async function DELETE({ params }) {
  try {
    await connect();
    console.log("Received ID for deletion:", params.id);
    const result = await query(`DELETE ${params.id}`);
    console.log("Delete result:", result);
    return new Response(null, { status: 204 });
  } catch (error) {
    console.error("Error deleting item:", error);
    return json({ error: "Failed to delete item" }, { status: 500 });
  }
}
async function PUT({ params, request }) {
  try {
    await connect();
    const { name, description } = await request.json();
    console.log("Updating item with ID:", params.id, "Name:", name, "Desc:", description);
    const result = await query(`UPDATE ${params.id} SET name = "${name}", description = "${description}";`);
    console.log("Update result:", result);
    return json(result[0].result);
  } catch (error) {
    console.error("Error updating item:", error);
    return json({ error: "Failed to update item" }, { status: 500 });
  }
}

export { DELETE, PUT };
//# sourceMappingURL=_server-DdnONJt5.js.map
