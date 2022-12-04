<script lang="ts">
  import type { Game } from "./xml-to-json";
  import { games } from "./stores/games";
  import Search from "./Search.svelte";

  let listOfGames: Game[];
  $: listOfGames = $games;
</script>

<section>
  <div class="use-main-column-width">
    <Search />
  </div>

  <hr />

  {#if listOfGames === null}
    Loading...
  {:else if listOfGames.length}
    <table>
      <thead>
        <tr>
          <th />
          <th />
          <th>Name</th>
          <!-- <th>Comment</th> -->
          <th>Min</th>
          <th>Max</th>
          <th />
        </tr>
      </thead>
      {#each listOfGames as game}
        <tr>
          <td class="badges">
            {#if game.isNew}<span title="New/Unopened" />{/if}
            {#if game.isExpansion}<span title="Expansion" />{/if}
          </td>
          <td class="image" style={`--bg-img: url("${game.thumbnail}")`}>
            <img src={game.thumbnail} alt={`Thumbnail of ${game.name}`} />
          </td>
          <td class="game-info">
            <h3>{game.name}</h3>
            <p>{game.comment ?? ""}</p>
          </td>
          <!-- <td>{game.name}</td>
          <td>{game.comment ?? ""}</td> -->
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
    <div class="spinner" />
  {/if}
</section>

<style lang="scss">
  @import "./styles/global.scss";

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

  table {
    border-spacing: 0 1ch;
    width: 100%;
  }

  tr:nth-child(2n) {
    background-color: $global-bg-color-alt;
  }

  td.badges {
    flex-direction: column;
    justify-content: space-between;
    padding: 0 0.5rem;

    [title]::before {
      // content: attr(title);
      content: "";
      display: block;
      height: 1em;
      width: 1em;
      padding: 0.25em;
      border: 0px solid gray;
      border-radius: 999px;
      font-size: 0.8rem;
      font-family: Georgia, serif;
      text-align: center;
      line-height: 1;
    }

    [title^="N"]::before {
      background-color: #396;
      // background-image: linear-gradient(to bottom right, adjust-color(#396, $lightness: 10%), #396);
      border-color: adjust-color(#396, $lightness: -25%);
      color: adjust-color(#396, $lightness: -25%);
    }

    [title^="E"]::before {
      background-color: #fc3;
      // background-image: linear-gradient(
      //   to bottom right,
      //   adjust-color(#fc3, $lightness: 15%),
      //   adjust-color(#fc3, $lightness: -15%)
      // );
      border-color: adjust-color(#fc3, $lightness: -25%);
      color: adjust-color(#fc3, $lightness: -25%);
    }

    [title] + [title]::before {
      margin-top: 1rem;
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
      filter: opacity(0.9);
      margin-top: 1rem;
      line-height: 1.333;
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
