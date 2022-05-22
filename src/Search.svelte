<script lang="ts">
  import LabelledRadio from "./LabelledRadio.svelte";

  export let min: number = 1;
  export let max: number = 10;
  export let step: number = 1;

  let minVal = min;
  let maxVal = max;
</script>

<div class="control">
  <div class="min-thumb" />
  <div class="max-thumb" />
  <!-- <input type="range" data-min {min} max={max - 1} {step} value={min} />
  <input type="range" data-max min={min + 1} {max} {step} value={max} /> -->
  {#each { length: max } as _}
    <LabelledRadio name="min" />
    <LabelledRadio name="max" />
  {/each}
</div>

<style>
  .control {
    position: relative;
  }

  input {
    position: absolute;
    inset: 0;
  }

  [data-min] {
    writing-mode: rl;
    right: 5%;
  }

  [data-max] {
    left: 5%;
  }
</style>
