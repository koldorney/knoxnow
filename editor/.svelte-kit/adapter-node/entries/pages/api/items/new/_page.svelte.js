import { c as create_ssr_component, f as add_attribute } from "../../../../../chunks/ssr.js";
import "../../../../../chunks/client.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let name = "";
  let description = "";
  return `<main><h1 data-svelte-h="svelte-qro13t">Create New Item</h1> <form><input placeholder="Name" required${add_attribute("value", name, 0)}> <input placeholder="Description" required${add_attribute("value", description, 0)}> <button type="submit" data-svelte-h="svelte-1dca4x5">Add Item</button></form></main>`;
});
export {
  Page as default
};
