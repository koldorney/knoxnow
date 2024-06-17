

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/api/items/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.Vrnf-Zc-.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.BdNWYI4b.js","_app/immutable/chunks/entry.COJlGQeR.js"];
export const stylesheets = [];
export const fonts = [];
