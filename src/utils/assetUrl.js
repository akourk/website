// Files under public/ are served from the deployment base (/website/ in production,
// / in tests and previews). import.meta.env.BASE_URL always carries a trailing slash,
// so strip any leading slash from the path before joining.
const assetUrl = (path) => `${import.meta.env.BASE_URL}${String(path).replace(/^\/+/, '')}`;

export default assetUrl;
