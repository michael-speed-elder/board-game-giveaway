<script lang="ts">
  import { Router, Link, Route } from "svelte-routing";
  import Games from "./Games.svelte";
  import Home from "./Home.svelte";

  export let url: string = "";

  // let xml: string;
  // fetch("https://api.geekdo.com/xmlapi2/collection?username=Impirator", { mode: "cors" }).then(
  //   async (res) => {
  //     const parser = new DOMParser().parseFromString(await res.text(), "application/xml");
  //     // xml = parser.documentElement;
  //     // console.log(parser);
  //     // window.parser = parser;
  //     console.log(parser.documentElement);
  //   }
  // );
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
  <link
    href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Open+Sans:wght@300;400&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<Router {url}>
  <main>
    <header>
      <h1>Take Speed's Games</h1>
      <nav>
        <Link to="/">Info</Link>
        &nbsp;&middot;&nbsp;
        <Link to="/list">Games list</Link>
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
    max-width: 62ch;
    margin: 0 auto;
  }

  @media screen and (min-width: 768px) {
    main {
      padding: 5vh 2ch;
    }

    header {
      max-width: 768px;
    }
  }

  :global(nav a) {
    &,
    &:visited,
    &:hover,
    &:active {
      font-weight: 400;
      letter-spacing: normal;

      background-clip: text;
      -webkit-background-clip: text;
      background-image: linear-gradient(to bottom, orange 33%, orangered);
      color: transparent;
    }
  }
</style>
