<template>
    <div class="shopping-cart">
        <div class="shopping-cart_wrapper">
            <h1 class="shopping-cart_title">
                Rent a Movie
                <div class="items">
                    <span class="number-of-items">0</span>
                    items
                </div>
            </h1>
            <div class="shopping-cart_details">
                <MovieCard />
                <MovieCard />
            </div>
        </div>
        <Sidebar />
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