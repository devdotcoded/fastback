import type { RouteDefinition } from 'svelte-spa-router'
import NotFound from '@/views/pages/not-found.svelte'
import Login from '@/views/pages/login.svelte'
import Resource from '@/views/pages/resource.svelte'
import Default from '@/views/pages/default.svelte'

const routes: RouteDefinition = {
    // Exact path
    '/': Default,
    '/login': Login,
    '/resource/:slug': Resource,
    // Using named parameters, with last being optional
    // '/author/:first/:last?': Author,

    // Wildcard parameter
    // '/book/*': Book,

    // Catch-all
    // This is optional, but if present it must be the last
    '*': NotFound,
}

export default routes;