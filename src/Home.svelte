<script>
  import { Link } from "svelte-routing";
  import Faq from "./Faq.svelte";
</script>

<section>
  <h2>Games List</h2>
  Giving away some games, eh? <Link to="/list">Show me what you got.</Link>
</section>

<section>
  <h2>Wait, what's going on?</h2>
  <p>Hello friend!</p>

  <p>
    I'm downsizing my own board game collection, and before I reach out to stores and try to donate
    the lot of them, I wanted to see if anyone I know might want to grab a free game. There's no
    limit per person, and I won't look at you funny if you're interested in more than one.
  </p>

  <ul>
    <li>Maybe you want to start your own collection.</li>
    <li>Maybe you need a last-minute gift idea.</li>
    <li>Maybe you need replacement parts.</li>
    <li>No judgment!</li>
  </ul>

  <p>
    I've attached a spreadsheet so you can see what the options are. Message me back about any
    you're interested in, and I'll update the sheet anonymously.
  </p>

  <p>
    Have a look around, let me know if I can help with anything, and I hope that our next <abbr
      title="you know it's &quot;brunch and board games&quot; don't even pretend">B&BG</abbr
    > get together is in the very near future.
  </p>
</section>

<section>
  <h2>Games List</h2>
  <Link to="/list">Just show me the games.</Link>
</section>

<section>
  <Faq />
</section>

<section>
  <h2>Games List</h2>
  Holy cow, <Link to="/list">I just want to see the games.</Link>
</section>

<style lang="scss">
  @import "./global.scss";

  section {
    // box-sizing: content-box;
    --max-section-width: 62ch;
    margin: 3em auto 0;
    padding: 0 2ch;
    width: var(--max-section-width);

    &:nth-child(2n) {
      background-color: $global-bg-color-alt;
      // box-sizing: content-box;
      padding: 2ch 0;
      position: relative;
      // overflow: hidden;

      &::before,
      &::after {
        content: "";
        background-color: var(--red);
        width: calc((var(--page-content-width, 0)));
        // width: 100px;
        position: absolute;
        top: 0;
        bottom: 0;
        font-size: 0;
      }

      &::before {
        transform: translateX(-100%);
      }

      &::after {
        left: 100%;
      }

      h2 {
        margin-top: 0;
      }
    }
  }

  @media screen and (min-width: 768px) {
    section {
      $max-section-width: 768px;
      --max-section-width: $max-section-width;
      padding: 0;
      width: $max-section-width;

      // &:nth-child(2n) {
      //   // margin-left: -2ch;
      //   // margin-right: -2ch;
      //   // padding: 2ch unquote("max((") (2ch, 100vw - #{$max-section-width} unquote(")") / 2)
      //   //   unquote(")");
      //   // margin-left: 0;
      //   // margin-right: 0;
      //   // padding: 2ch unquote("max(2ch, (100vw - #{$max-section-width}) / 2)");
      // }
    }
  }

  /* section + section {
    margin-top: 3em;
  } */
</style>
