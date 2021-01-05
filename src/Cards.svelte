<script lang="ts">
  import data from './data';
  import Lazy from 'svelte-lazy';
</script>

<style>
  ul,
  li {
    margin: 0;
    padding: 0;
    text-indent: 0;
    list-style-type: none;
  }

  .cards-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 1rem;
    row-gap: 1rem;
  }

  @media (max-width: 1024px) {
    .cards-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (max-width: 800px) {
    .cards-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 500px) {
    .cards-grid {
      grid-template-columns: 1fr;
    }
  }
  .card-wrapper {
    padding: 1rem;
    text-align: center;
  }

  .logo-wrapper {
    width: 100%;
  }

  .logo-wrapper img {
    max-width: 100%;
    max-height: 3rem;
  }

  p {
    margin-top: 0;
  }
</style>

<!-- change to list to make more semantical -->
<ul class="cards-grid">
  {#each data as card}
    <li class="card-wrapper">
      <div class="logo-wrapper">
        <Lazy height="3rem"><img src={card.logo} alt={`${card.name} logo`} /></Lazy>
      </div>
      <p>{card.name}</p>
      <a href={card.article} target="_blank" rel="noopener noreferrer">Article link</a>
    </li>
  {/each}
</ul>
