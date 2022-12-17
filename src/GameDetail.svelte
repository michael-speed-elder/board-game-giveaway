<script lang="ts">
  import type { Game } from "./xml-to-json";

  export let game: Game;
</script>

<details class="game-details">
  <summary>{game.name}</summary>

  <div class="details-inner">
    <div class="info">
      <div class="image" style={`--bg-img: url("${game.thumbnail}")`}>
        <img src={game.thumbnail} alt={`Thumbnail of ${game.name}`} />
      </div>
      <span>
        <strong>{game.min}–{game.max}</strong> players
      </span>
      <div class="pills">
        {#if game.isNew}<span title="Unopened">unopened</span>{/if}
        {#if game.isExpansion}<span title="Expansion">expansion</span>{/if}
      </div>
      <a
        href={`https://boardgamegeek.com/boardgame/${game.id}`}
        title="Board Game Geek"
        target="_blank"
        rel="noreferrer"
      >
        ↗ <abbr title="BoardGameGeek">BGG</abbr>
      </a>
    </div>

    <p style="white-space: pre-wrap">{game.comment ?? ""}</p>
  </div>
</details>

<style lang="scss">
  @import "./styles/colors.scss";
  @import "./styles/pills.scss";

  .game-details {
    --bg-color: #{$global-bg-color};
    padding: 1ch 0;

    &:nth-child(2n - 1) {
      --bg-color: #{$global-bg-color-dark};
      background-color: $global-bg-color-dark;
    }
  }

  summary {
    font-size: larger;
    padding-left: 0.5ch;

    &::marker {
      font-size: smaller;
      color: rgba(
        red($global-font-color),
        green($global-font-color),
        blue($global-font-color),
        0.25
      );
    }
  }

  .details-inner {
    padding: 1ch;

    p {
      margin-bottom: 0;
    }
  }

  .info {
    display: grid;
    column-gap: 1ch;
    row-gap: 0.5ch;
    grid-template-columns: fit-content(50%) 1fr;
    grid-template-rows: auto auto 1fr;

    .image {
      display: flex;
      grid-row: 1 / 4;

      img {
        max-width: 100%;
      }
    }

    strong {
      letter-spacing: 0.2em;
    }

    .pills {
      @extend %pills;
    }
  }
</style>
