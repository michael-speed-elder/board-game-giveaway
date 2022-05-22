<script>
  import Faq from "./Faq.svelte";
</script>

<section>
  <h2>The gist</h2>
  <p>Hello friend!</p>

  <p>
    I'm downsizing my board game collection, and before I reach out to stores and try to donate the
    lot of them, I wanted to see if anyone I know might want to grab a free game. There's no limit
    per person, and I won't look at you funny if you're interested in more than one.
  </p>
  <p>
    Maybe you want to start your own collection.<br />Maybe you need a last-minute gift idea.<br
    />Maybe you need replacement parts.<br />No judgment!
  </p>
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
  <Faq />
</section>

<style>
  section {
    margin: 0 auto;
    max-width: 62ch;
  }

  @media screen and (min-width: 768px) {
    section {
      max-width: 768px;
    }
  }

  section + section {
    margin-top: 3em;
  }
</style>
