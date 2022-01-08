<template>
  <Cart v-if="toggleCart" />
  <section class="searchQuery">
    <header class="header">
      <!-- App Name -->
      <div class="header-details">
        <h1 class="section-heading">Movidentifier <img src="./assets/film-solid.svg" alt="" class="heading-icon"></h1>
        <h2 class="section-subheading">Navigate the web in search of a great movie</h2>
      </div>
      <!-- Navigation TBA -->
      <!-- <nav id="nav">
        <router-link></router-link>
        <router-link></router-link>
      </nav> -->
      <button @click="toggleCartDisplay" class="shopping_cart-BTN">
        <img src="./assets/cart.svg" class="shopping_cart-BTN-icon"/>
      </button>
    </header>
    <!-- Search for movies -->
      <SearchQuery />
  </section>
  <Movies />
  <!-- <router-view/> -->
</template>

<script src="./typescript/importComp.ts"></script>