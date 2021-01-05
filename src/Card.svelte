<script lang="ts">
  import type { Entry } from './types';

  export let card: Entry;
</script>

<style>
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

<div class="card-wrapper">
  <div class="logo-wrapper"><img src={card.logo} alt={`${card.name} logo`} /></div>
  <p>{card.name}</p>
  <a href={card.article} target="_blank" rel="noopener noreferrer">Article link</a>
</div>
