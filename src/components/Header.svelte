<script lang="ts">
  import { page } from "$app/stores";
  import ThemeSwitcher from "./ThemeSwitcher.svelte";
</script>

<header>
  <div class="corner">
    <a href="https://kit.svelte.dev"> Logo </a>
  </div>
  <div class="corner">
    <nav>
      <ul>
        <li class:active={$page.url.pathname === "/"}>
          <a sveltekit:prefetch href="/">Home</a>
        </li>
        <li class:active={$page.url.pathname === "/about"}>
          <a sveltekit:prefetch href="/about">About</a>
        </li>
        <li class:active={$page.url.pathname === "/404"}>
          <a href="/404">404</a>
        </li>
      </ul>
    </nav>
    <button>misc</button>
    <ThemeSwitcher />
  </div>
</header>

<style lang="postcss">
  header {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
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
    height: 3em;
    display: flex;
  }

  button {
    display: flex;
    /* height: 100%; */
    align-items: center;
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
</style>
