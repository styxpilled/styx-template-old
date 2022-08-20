<script>
  import { page } from "$app/stores";
  import Header from "$components/Header.svelte";
  import { theme } from "$lib/stores/theme";
  import "$styles/app.css";
  $theme = $page.data.theme;
</script>

<div id="main" class={$theme}>
  <Header />
  <slot />
</div>
