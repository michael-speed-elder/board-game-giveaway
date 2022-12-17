<script lang="ts">
  export let question: string;
</script>

<details>
  <summary>{question}</summary>
  <div class="details-inner">
    <slot />
  </div>
</details>

<style lang="scss">
  @import "./styles/colors.scss";

  details {
    margin-top: 0.5em;

    &[open] {
      margin-bottom: 1.5em;
    }

    .details-inner {
      background-color: $global-bg-color-dark;
      margin-top: 0.5rem;
      padding: 0.1px 2rem;
    }
  }

  summary {
    cursor: pointer;
    transition: color 100ms linear;

    [open] &,
    &:hover {
      color: orange;
    }

    &::marker {
      font-size: smaller;
    }
  }
</style>
