<script lang="ts">
  // import LabelledRadio from "./LabelledRadio.svelte";
  import { maxPlayers, minPlayers, onlyNew, searchText } from "./stores/filters";

  // export let min: number = 1;
  // export let max: number = 10;
  // export let step: number = 1;

  // let minVal = min;
  // let maxVal = max;
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

<!-- <div class="control">
  <div class="min-thumb" />
  <div class="max-thumb" />
  < !-- <input type="range" data-min {min} max={max - 1} {step} value={min} />
  <input type="range" data-max min={min + 1} {max} {step} value={max} /> -- >
  {#each { length: max } as _}
    <LabelledRadio name="min" />
    <LabelledRadio name="max" />
  {/each}
</div> -->
<style lang="scss">
  input:not([type]) {
    width: 100%;
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

  // .control {
  //   position: relative;
  // }

  // input {
  //   position: absolute;
  //   inset: 0;
  // }

  // [data-min] {
  //   writing-mode: rl;
  //   right: 5%;
  // }

  // [data-max] {
  //   left: 5%;
  // }
</style>
