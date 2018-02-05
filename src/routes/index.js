/* ============
 * Routes File
 * ============
 *
 * The routes and redirects are defined in this file.
 */

export default [
  // Home
  {
    path: '/',
    name: 'index',
    component: () => import('@/pages/Index'),
    // If the user needs to be authenticated to view this page
    meta: {
      auth: false,
    },
  },

];
