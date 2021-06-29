<script lang="ts">
  import { currentResourceSlug, getResourceBySlug } from "@/fast_back";
  import type { Resource } from "@/models/Resource";
  import MainLayout from "@/views/layouts/main.svelte";
  import { writable } from "svelte/store";

  export let params: { slug: string };

  const resource = writable<Resource | null>(getResourceBySlug(params.slug));

  currentResourceSlug.subscribe((val) => resource.set(getResourceBySlug(val)));
</script>

{#if $resource}
  <MainLayout>
    <h1>{$resource.getName()}</h1>
    {#each $resource.getFields() as field}
      <svelte:component this={field.view()} {...field.props()} />
    {/each}
  </MainLayout>
{/if}
