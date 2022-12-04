<script lang="ts">
  import {
    ExpansionFilter,
    expansions,
    maxPlayers,
    minPlayers,
    onlyNew,
    searchText,
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
    <input type="radio" name="expansions" value={ExpansionFilter.ALLOW} bind:group={$expansions} />
    Allow
  </label>
  <label>
    <input type="radio" name="expansions" value={ExpansionFilter.NONE} bind:group={$expansions} />
    None
  </label>
  <label>
    <input type="radio" name="expansions" value={ExpansionFilter.ONLY} bind:group={$expansions} />
    Only
  </label>
</div>

<style lang="scss">
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
</style>
