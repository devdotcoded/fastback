<script lang="ts">
  import { link } from "svelte-spa-router";
  import active from "svelte-spa-router/active";
  import { getResources } from "@/fast_back";
  const resources = getResources();
</script>

<nav>
  {#each resources as resource}
    <a
      href={`/resource/${resource.getSlug()}`}
      use:link
      use:active={{ className: "active", inactiveClassName: "inactive" }}
    >
      {resource.getName()}
    </a>
  {/each}
</nav>

<style lang="scss">
  nav {
    display: block;
    a {
      display: block;
      color: black;
      text-decoration: none;
    }
  }
  :global {
    .active {
      color: red;
    }
    .inactive {
      color: black;
    }
  }
</style>
