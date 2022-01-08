<template>
    <div class="shopping-cart">
        <h1 class="shopping-cart_title">Rent a Movie</h1>
        <div class="shopping-cart_details">
            <MovieCard />
            <Sidebar />
        </div>
    </div>
</template>

<script lang="ts">
    import MovieCard from './MovieCard.vue';
    import Sidebar from './Sidebar.vue';

    export default {
        components: { MovieCard, Sidebar },
        name: 'Cart',
    }
</script>