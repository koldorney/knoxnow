import { c as create_ssr_component, d as each, f as add_attribute, e as escape } from './ssr-fLSy8HZN.js';
import './client-CjdeEz1m.js';
import './exports-DuWZopOC.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let items = [];
  let editItemId = null;
  let editItemName = "";
  let editItemDescription = "";
  return `<main><h1 data-svelte-h="svelte-iklybq">Items</h1> <button data-svelte-h="svelte-1itnyfa">Create New Item</button> <ul>${each(items, (item) => {
    return `<li>${editItemId === item.id ? `<input type="text" placeholder="Name"${add_attribute("value", editItemName, 0)}> <input type="text" placeholder="Description"${add_attribute("value", editItemDescription, 0)}> <button data-svelte-h="svelte-jlu80t">Save</button> <button data-svelte-h="svelte-qcjznm">Cancel</button>` : `<div><a${add_attribute("href", `./items/${item.id}`, 0)}>${escape(item.name)} - ${escape(item.description)}</a> <button data-svelte-h="svelte-hb6164">Edit</button> <button data-svelte-h="svelte-1rddz8i">Delete</button> </div>`} </li>`;
  })}</ul></main>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-CNzFlWe1.js.map
