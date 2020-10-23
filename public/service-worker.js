importScripts(
	'https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js'
);

//workbox.precaching.precacheAndRoute([]);
workbox.precaching.precacheAndRoute([{"revision":"acb19f86e1754cfe0e388acac106c31e","url":"css/app.css"},{"revision":"a15c2ac3234aa8f6064ef9c1f7383c37","url":"css/bootstrap.min.css"},{"revision":"b4e62e6f9a979ccbca723f48cf0e82a9","url":"css/login.css"},{"revision":"a5e4d10c59f9f8eaa8d6f77174e11793","url":"css/print.css"},{"revision":"3e7db4d73e8129de62371d5b05d5fcd4","url":"images/icons/icon-128x128.png"},{"revision":"4a1d6474058b153d6a3701db33a63f3c","url":"images/icons/icon-144x144.png"},{"revision":"de4ad4410b0375493c8c0e8d88bd9119","url":"images/icons/icon-152x152.png"},{"revision":"957dfc347925a4809a880c87534d85eb","url":"images/icons/icon-192x192.png"},{"revision":"149f682f0d9357c39f6c9cf5c5c95199","url":"images/icons/icon-384x384.png"},{"revision":"18e8d82d9df4ff90df686811d09339b2","url":"images/icons/icon-512x512.png"},{"revision":"3b79af186cd91681758b03225e69bf5e","url":"images/icons/icon-72x72.png"},{"revision":"38f31e5cc3fc52566a2fbcb14f1a09cc","url":"images/icons/icon-96x96.png"},{"revision":"4991d9139ac4a5cca00761448bcc61b4","url":"images/icons/splash-1125x2436.png"},{"revision":"41849a55e70e9af8f55c9d18f6ee6563","url":"images/icons/splash-1242x2208.png"},{"revision":"04936d82edce793f90e2d4af7715703f","url":"images/icons/splash-1242x2688.png"},{"revision":"a13ea6fd727c4e37db172d3371452ed7","url":"images/icons/splash-1536x2048.png"},{"revision":"a0670816158f43b823058da33be87fb4","url":"images/icons/splash-1668x2224.png"},{"revision":"0bd50a4d0a0da075bd1e284e956b49b8","url":"images/icons/splash-1668x2388.png"},{"revision":"163d887752c919b4eccea5bcd5be0a5a","url":"images/icons/splash-2048x2732.png"},{"revision":"c9ad775561223eee7802b0f8d4eb3a13","url":"images/icons/splash-640x1136.png"},{"revision":"fe9c9fbe2e7e6b6b0d6663bfeb72fa78","url":"images/icons/splash-750x1334.png"},{"revision":"f68fecc50c9f87e78a323dabaabfd7ef","url":"images/icons/splash-828x1792.png"},{"revision":"12b16022637ccc0ae22941f6fe43a9cb","url":"img/logo-h.png"},{"revision":"14f365c53d6f5957523b2b8d4a8bebc1","url":"img/logo-mini.png"},{"revision":"14b3add3bec9dece2a760482d20dd955","url":"img/logo.png"},{"revision":"8775fe239b83f1f64a3a0f30478562b8","url":"js/adminlte.js"},{"revision":"d6fcd029f81477511ec606aea0880b1e","url":"js/app.js"},{"revision":"17cfb31e9ccc33518eba471775bb1f98","url":"js/auth.js"},{"revision":"7c0a19fb1a3afbe0a6cb5d215f57e7f4","url":"js/manifest.js"},{"revision":"b3f3b841fc169986a4625bc9c0ed419a","url":"js/vendor.js"},{"revision":"c286658e90e84c27a195528a50189068","url":"offline.html"}]);

const networkFirstHandler = new workbox.strategies.NetworkFirst({
    cacheName: 'dynamic',
    plugins: [
        new workbox.expiration.Plugin({
            maxEntries: 10
        }),
        new workbox.cacheableResponse.Plugin({
            statuses: [200]
        })
    ]
});

const FALLBACK_URL = workbox.precaching.getCacheKeyForURL('/offline.html');
const matcher = ({
    event
}) => event.request.mode === 'navigate';
const handler = args =>
    networkFirstHandler
    .handle(args)
    .then(response => response || caches.match(FALLBACK_URL))
    .catch(() => caches.match(FALLBACK_URL));

workbox.routing.registerRoute(matcher, handler);
