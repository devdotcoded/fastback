<script>
  import HeaderComponent from "@/views/components/header.svelte";
</script>

<div class="app">
  <HeaderComponent />
  <section class="section">
    <slot />
  </section>
</div>
