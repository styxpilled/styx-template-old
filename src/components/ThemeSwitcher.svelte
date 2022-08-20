<script lang="ts">
  import { browser } from "$app/env";
  import { setTheme, theme } from "$lib/stores/theme";
  let checked = $theme === "dark";
  $: {
    if (browser) {
      $theme = setTheme(checked ? "dark" : "light");
    }
  }
</script>

<div class="toggle-switch">
  <label class="switch">
    <input bind:checked type="checkbox" />
    <span class="slider" />
  </label>
</div>

<style lang="postcss">
  .toggle-switch {
    position: relative;
    height: 100%;
    width: 5em;
  }

  label {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: var(--dark-secondary);
    border-radius: 50px;
    cursor: pointer;
  }

  .slider {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50px;
    transition: 0.3s;
    &::before {
      content: "";
      position: absolute;
      top: 13px;
      left: 16px;
      width: 1.5em;
      height: 1.5em;
      border-radius: 50%;
      box-shadow: inset 8px -4px 0px 0px var(--light-secondary);
      background-color: var(--dark-secondary);
      transition: 0.3s;
    }
  }

  input {
    position: absolute;
    display: none;
    &:checked ~ .slider {
      background-color: var(--light-secondary);
      &::before {
        transform: translateX(2em);
        background-color: var(--dark-secondary);
        box-shadow: none;
      }
    }
  }
</style>
