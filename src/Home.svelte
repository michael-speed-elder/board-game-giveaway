<script>
  import { Link } from "svelte-routing";
  import Faq from "./Faq.svelte";
</script>

<section class="stripe">
  <div class="stripe-inner">
    <h2>Games List</h2>
    Giving away some games, eh? <Link to="/list">Show me what you got.</Link>
  </div>
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
    Have a look around, let me know if I can help with anything, and I hope that our next brunch and
    board games is in the very near future.
  </p>
</section>

<section class="stripe">
  <div class="stripe-inner">
    <h2>Games List</h2>
    <Link to="/list">Just show me the games.</Link>
  </div>
</section>

<section>
  <Faq />
</section>

<section class="stripe">
  <div class="stripe-inner">
    <h2>Games List</h2>
    Holy cow, <Link to="/list">I just want to see the games.</Link>
  </div>
</section>

<style lang="scss">
  @import "styles/global";

  section {
    --max-section-width: 62ch;
    margin: 3em auto 0;
    padding: 0;
    max-width: var(--max-section-width);

    &.stripe {
      background-color: $global-bg-color-dark;
      margin-left: -2ch;
      margin-right: -2ch;
      padding: 2ch;
      max-width: calc(4ch + 100%);

      .stripe-inner {
        margin: 0 auto;
        max-width: var(--max-section-width);

        h2 {
          margin-top: 0;
        }
      }
    }
  }

  @media screen and (min-width: $breakpoint-lg) {
    section {
      $max-section-width: $global-max-width-lg;
      --max-section-width: #{$max-section-width};
      padding: 0;
      max-width: $max-section-width;

      &.stripe {
        margin-left: initial;
        margin-right: initial;
        padding: 2ch 0;
      }
    }
  }
</style>
