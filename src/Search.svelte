<script lang="ts">
  import {
    expansions,
    maxPlayers,
    minPlayers,
    onlyNew,
    portability,
    searchText,
    FilterVisibility,
  } from "./stores/filters";
</script>

<div class="filter">
  <label for="search">Search</label>
  <input id="search" bind:value={$searchText} />
</div>

<div class="filter inline-filter">
  <label for="only-new">Unopened only</label>
  <input type="checkbox" id="only-new" bind:checked={$onlyNew} />
</div>

<div class="filter inline-filter">
  <label for="min-players">Min. players</label>
  <input type="number" min="0" id="min-players" bind:value={$minPlayers} />
</div>

<div class="filter inline-filter">
  <label for="max-players">Max. players</label>
  <input type="number" min="1" id="max-players" bind:value={$maxPlayers} />
</div>

<div class="filter">
  Expansions:
  <label>
    <input type="radio" name="expansions" value={FilterVisibility.ALLOW} bind:group={$expansions} />
    Allow
  </label>
  <label>
    <input type="radio" name="expansions" value={FilterVisibility.NONE} bind:group={$expansions} />
    None
  </label>
  <label>
    <input type="radio" name="expansions" value={FilterVisibility.ONLY} bind:group={$expansions} />
    Only
  </label>
</div>

<div class="filter">
  <span title="easy to put into a pocket or purse">Portable</span>:
  <label>
    <input
      type="radio"
      name="portability"
      value={FilterVisibility.ALLOW}
      bind:group={$portability}
    />
    Allow
  </label>
  <label>
    <input
      type="radio"
      name="portability"
      value={FilterVisibility.NONE}
      bind:group={$portability}
    />
    None
  </label>
  <label>
    <input
      type="radio"
      name="portability"
      value={FilterVisibility.ONLY}
      bind:group={$portability}
    />
    Only
  </label>
</div>

<style lang="scss">
  @import "styles/colors";

  input:not([type]) {
    // the big text search bar
    width: 100%;
  }

  .filter + .filter {
    margin-top: 1rem;
  }

  .inline-filter {
    display: inline-flex;
    align-items: baseline;
    margin-right: 3rem;
    margin-top: 1rem;

    input {
      margin-left: 1em;
    }

    input[type="number"] {
      padding: 0.25em;
      width: 5ch;
    }
  }

  input {
    background-color: #fff3;
    border-color: #fff6;
    color: white;
  }

  label:has(input[type="radio"]) {
    display: inline-block;
    margin-left: 2ch;
  }

  [title] {
    text-decoration: underline dotted rgba($global-font-color, 0.5);
    text-underline-position: under;
  }
</style>
