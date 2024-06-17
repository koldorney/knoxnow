

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/api/items/new/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.DiIxcQOR.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.BdNWYI4b.js","_app/immutable/chunks/entry.COJlGQeR.js"];
export const stylesheets = [];
export const fonts = [];
