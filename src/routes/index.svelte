<script context="module" lang="ts">
  export const prerender = true;
</script>

<svelte:head>
  <title>Home</title>
</svelte:head>

<section>
  <h1>
    <b>WELCOME!</b><br />
    to your<br />
    SvelteKit Styx Template app
  </h1>
  <h2>
    try editing <strong>src/routes/index.svelte</strong>
  </h2>
</section>

<style lang="postcss">
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
  }

  h1 {
    width: 100%;
  }
</style>
