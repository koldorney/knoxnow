const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start._ccqXui9.js","app":"_app/immutable/entry/app.Bb3noUbg.js","imports":["_app/immutable/entry/start._ccqXui9.js","_app/immutable/chunks/entry.COJlGQeR.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/entry/app.Bb3noUbg.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.BdNWYI4b.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-iBVD4UkH.js')),
			__memo(() => import('./chunks/1-CVIjnKKS.js')),
			__memo(() => import('./chunks/2-qqy6l9td.js')),
			__memo(() => import('./chunks/3-B8YzGsga.js')),
			__memo(() => import('./chunks/4-brxRXiBB.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/api/items",
				pattern: /^\/api\/items\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: __memo(() => import('./chunks/_server-CohNwn2y.js'))
			},
			{
				id: "/api/items/new",
				pattern: /^\/api\/items\/new\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/api/items/[id]",
				pattern: /^\/api\/items\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-DdnONJt5.js'))
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
