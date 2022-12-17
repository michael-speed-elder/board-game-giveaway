<script lang="ts">
  import type { Game } from "./xml-to-json";
  import { games } from "./stores/games";

  import Search from "./Search.svelte";
  import GameDetail from "./GameDetail.svelte";

  let listOfGames: Game[];
  $: listOfGames = $games;
</script>

<section>
  <div class="use-main-column-width">
    <Search />
  </div>

  <hr />

  {#if listOfGames === null}
    <div class="spinner" />
  {:else if listOfGames.length}
    <div class="mobile-size">
      {#each listOfGames as game}
        <GameDetail {game} />
      {/each}
    </div>

    <table class="desktop-size">
      <thead>
        <tr>
          <th />
          <th>Name</th>
          <th>Min</th>
          <th>Max</th>
          <th />
        </tr>
      </thead>
      {#each listOfGames as game}
        <tr>
          <td class="image" style={`--bg-img: url("${game.thumbnail}")`}>
            <img src={game.thumbnail} alt={`Thumbnail of ${game.name}`} />
          </td>
          <td class="game-info">
            <h3>{game.name}</h3>
            <p class="pills">
              {#if game.isNew}<span title="Unopened">unopened</span>{/if}
              {#if game.isExpansion}<span title="Expansion">expansion</span>{/if}
            </p>
            <p class="comment">{game.comment ?? ""}</p>
          </td>
          <td>{game.min}</td>
          <td>{game.max}</td>
          <td>
            <a
              href={`https://boardgamegeek.com/boardgame/${game.id}`}
              title="Board Game Geek"
              target="_blank"
              rel="noreferrer"
            >
              ↗ BGG
            </a>
          </td>
        </tr>
      {/each}
    </table>
  {:else}
    <p class="no-results">
      Looks like there's nothing that fits what you're looking for.<br /><br />Try removing some
      search terms!
    </p>
  {/if}
</section>

<style lang="scss">
  @import "./styles/global.scss";
  @import "./styles/pills.scss";

  .desktop-size {
    display: none;
  }

  @media screen and (min-width: $global-max-width-sm) {
    .mobile-size {
      display: none;
    }

    .desktop-size {
      display: table;
    }
  }

  .spinner {
    animation: pulse-border 1s linear infinite;
    border: 0 solid skyblue;
    border-radius: 100%;
    margin: 5pc auto 0;
    height: 100px;
    width: 100px;
  }

  section {
    max-width: 1200px;
    margin: 2pc auto;
  }

  hr {
    border: none;
    height: 1px;
    margin-top: 2rem;
    background-image: repeating-linear-gradient(
      to right,
      #fff9 0px,
      #fff9 10px,
      transparent 10px,
      transparent 20px
    );
  }

  .no-results {
    margin: 5vh auto 0;
    max-width: 80%;
  }

  table {
    border-spacing: 0 1ch;
    width: 100%;
  }

  tr {
    --bg-color: #{$global-bg-color};

    &:nth-child(2n) {
      --bg-color: #{$global-bg-color-dark};
      background-color: $global-bg-color-dark;
    }
  }

  td.image {
    position: relative;
    overflow: hidden;
    text-align: center;
    font-size: 0;
  }

  td.image::after {
    content: "";

    position: absolute;
    inset: 0;
    background-image: var(--bg-img);
    background-size: cover;
    background-position: center;
    filter: blur(2px) brightness(50%);
  }

  td.game-info {
    display: grid;

    h3 {
      font-weight: 400;
      line-height: 1.333;
    }

    p {
      font-size: smaller;
    }

    p.pills {
      @extend %pills;
      margin-top: 0.25em;
      filter: opacity(0.9);
    }

    p.comment {
      filter: opacity(0.9);
      margin-top: 1rem;
      line-height: 1.333;
      white-space: pre-wrap;
    }

    > * {
      margin: 0;
    }
  }

  td + td,
  th + th {
    padding: 1em;
  }

  img {
    box-shadow: 0 0 5px #333, 0 0 0 1px #333;
    margin: 5px;
    position: relative;
    z-index: 1;
  }

  a {
    white-space: nowrap;
  }
</style>
