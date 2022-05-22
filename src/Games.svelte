<script lang="ts">
  import type { Game } from "./xml-to-json";
  import { games } from "./stores/games";
  import Search from "./Search.svelte";

  let listOfGames: Game[];
  $: listOfGames = $games;
</script>

<section>
  {#if listOfGames === null}
    Loading...
  {:else if listOfGames.length}
    <Search />
    <table>
      <thead>
        <tr>
          <th />
          <th>Name</th>
          <th>Comment</th>
          <th>Min</th>
          <th>Max</th>
          <th />
        </tr>
      </thead>
      {#each listOfGames as game}
        <tr>
          <td style={`--bg-img: url("${game.thumbnail}")`}>
            <img src={game.thumbnail} alt={`Thumbnail of ${game.name}`} />
          </td>
          <td>{game.name}</td>
          <td>{game.comment ?? ""}</td>
          <td>{game.min}</td>
          <td>{game.max}</td>
          <td>
            <a href={`https://boardgamegeek.com/boardgame/${game.id}`} title="Board Game Geek">
              ↗ BGG
            </a>
          </td>
        </tr>
      {/each}
    </table>
  {:else}
    Server error, try again later.
  {/if}
</section>

<style>
  section {
    max-width: 1200px;
    margin: 2pc auto;
  }

  table {
    border-spacing: 0 1ch;
  }

  tr:nth-child(2n) {
    background-color: black;
  }

  td:first-child {
    position: relative;
    overflow: hidden;
    text-align: center;
    font-size: 0;
  }

  td:first-child::after {
    content: "";

    position: absolute;
    inset: 0;
    background-image: var(--bg-img);
    background-size: cover;
    background-position: center;
    filter: blur(2px) brightness(50%);
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
