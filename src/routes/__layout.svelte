<script>
  import Header from "$components/Header.svelte";
  import { session } from "$app/stores";
  import "$styles/app.css";
</script>

<div id="main" class={$session.theme}>
  <Header />
  <slot />
</div>
