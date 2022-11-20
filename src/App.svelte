<script lang="ts">
  import { Router, Link, Route } from "svelte-routing";
  import type { LinkProps } from "svelte-routing/types/Link";
  import Games from "./Games.svelte";
  import Home from "./Home.svelte";

  export let url: string = "";

  const isCurrentRoute: LinkProps["getProps"] = ({ isCurrent }) => ({
    class: isCurrent ? "is-current" : "",
  });
</script>

<Router {url}>
  <main>
    <header>
      <h1>Take Speed's Games</h1>
      <nav>
        <Link to="/" getProps={isCurrentRoute}>Info</Link>
        &nbsp;&middot;&nbsp;
        <Link to="/list" getProps={isCurrentRoute}>Games list</Link>
      </nav>
    </header>

    <Route path="/list">
      <Games />
    </Route>
    <Route>
      <Home />
    </Route>
  </main>
</Router>

<style lang="scss">
  @import "./global.scss";

  main {
    padding: 2vh 2ch;
  }

  header {
    max-width: $global-max-width-lg;
    margin: 0 auto;
  }

  @media screen and (min-width: $global-max-width-lg) {
    main {
      padding: 5vh 0;
    }

    header {
      max-width: $global-max-width-lg;
    }
  }

  :global(nav a) {
    &,
    &:visited,
    &:hover,
    &:active {
      font-size: 1.25rem;
      font-weight: 400;
      letter-spacing: normal;

      @media screen and (min-width: $global-max-width-lg) {
        font-size: 1.5rem;
      }
    }
  }
</style>
