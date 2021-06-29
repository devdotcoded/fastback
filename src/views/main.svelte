<script lang="ts">
  import Router from "svelte-spa-router";
  import type { RouteLoadingEvent } from "svelte-spa-router";
  import routes from "@/routes";
  import { currentResourceSlug } from "@/fast_back";

  function routeLoading(event: RouteLoadingEvent) {
    const location = event.detail.location;
    const route = event.detail.route;

    const index = route
      .toString()
      .split("/")
      .findIndex((elem) => elem == ":slug");

    if (index < 0) {
      currentResourceSlug.set(null);
    } else {
      currentResourceSlug.set(location.toString().split("/")[index]);
    }
  }
</script>

<h1>Fast Back</h1>

<Router {routes} on:routeLoading={routeLoading} />

