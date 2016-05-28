/* globals caches, toolbox */

const prefetchRoutes = [
  '/why/:topic/:campaign',
  '/why/:topic',
  '/why',
  '/when',
  '/how'
];

function localResolveHandler() {
  return caches.match('/');
}

prefetchRoutes.forEach(function (route) {
  toolbox.router.get(route, localResolveHandler);
});
