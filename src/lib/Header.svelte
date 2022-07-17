<script lang="ts">
  import { page, session } from "$app/stores";
  import { setTheme } from "./stores/theme";
  const toggleTheme = () => {
    setTheme($session.theme === "light" ? "dark" : "light");
  };
</script>

<header>
  <div class="corner">
    <a href="https://kit.svelte.dev"> corner </a>
  </div>

  <nav>
    <ul>
      <li class:active={$page.url.pathname === "/"}>
        <a sveltekit:prefetch href="/">Home</a>
      </li>
      <li class:active={$page.url.pathname === "/about"}>
        <a sveltekit:prefetch href="/about">About</a>
      </li>
    </ul>
  </nav>

  <div class="corner">
    <button on:click={toggleTheme}>mode</button>
  </div>
</header>

<style lang="postcss">
  header {
    display: flex;
    justify-content: space-between;
  }

  nav {
    display: flex;
    justify-content: center;

    & a {
      display: flex;
      height: 100%;
      align-items: center;
      padding: 0 1em;

      color: var(--text-primary);
      font-weight: 700;
      font-size: 0.8rem;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      text-decoration: none;
      transition: color 0.2s linear;
    }
  }

  .corner {
    width: 3em;
    height: 3em;

    & a,
    button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
    }
  }

  ul {
    position: relative;
    padding: 0;
    margin: 0;
    height: 3em;
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    background-size: contain;
  }

  li {
    position: relative;
    height: 100%;
  }
</style>
