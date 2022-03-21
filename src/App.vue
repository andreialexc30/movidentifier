<template>
  <Cart v-if="toggleCart" />
  <section class="searchQuery">
    <header class="header">
      <!-- App Name -->
      <div class="header-details">
        <a href="/" class="header-redirect">
          <h1 class="section-heading">Movidentifier <img src="./assets/film-solid.svg" alt="" class="heading-icon"></h1>
        </a>
        <h2 class="section-subheading">Navigate the web in search of a great movie</h2>
      </div>
      <button @click="toggleCartDisplay" class="shopping_cart-BTN">
        <img src="./assets/cart.svg" class="shopping_cart-BTN-icon"/>
      </button>
    </header>
    <!-- Search for movies -->
      <SearchQuery :searchMovie="searchMovie"
      :fetchedMovies="fetchedMovies"
      :sortMovie="sortMovie"
      :filterByGenre="filterByGenre" />
  </section>
  <Movies :fetchedMovies="fetchedMovies"
    :movie_id="movie_id"
    :foundMovie="foundMovie"
  />
  <!-- <router-view /> -->
</template>

<script src="./typescript/api.ts"></script>