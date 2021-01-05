<script lang="ts">
  import Card from './Card.svelte';
  import data from './data';
  console.log({ data });
</script>

<style>
  header {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
  }
  .trollface-img {
    height: auto;
    max-width: 300px;
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
</style>

<svelte:head>
  <title>Who dropped ie11</title>
</svelte:head>
<header>
  <img class="trollface-img" src="/trollface.png" alt="internet explorer trollface" />
  <h1>Who dropped ie11</h1>
  <p>
    Inspired by the blog post
    <a href="https://css-tricks.com/a-business-case-for-dropping-internet-explorer/" target="_blank" rel="noopener noreferrer">A Business
      Case for Dropping Internet Explorer</a>
    I decided to make a simple app to list companies, frameworks and libraries that has dropped support for ie11.
  </p>
  <p>Below each company you can find an article/announcement/helpdesk reply confirming dropped support.</p>
  <p>If you know more and want to expand this list please submit a pull request at github.</p>
</header>
<main>
  <div class="cards-grid">
    {#each data as card}
      <Card {card} />
    {/each}
  </div>
</main>
