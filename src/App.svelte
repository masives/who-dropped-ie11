<script lang="ts">
  import Cards from './Cards.svelte';
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
  <p>
    If you know more and want to expand this list
    <a href="https://github.com/masives/who-dropped-ie11" target="_blank" rel="noopener noreferrer">please submit a pull request at github</a>.
  </p>
</header>
<main>
  <Cards />
</main>
