<template>
    <section class="movieDetails">
        <h1 class="movieDetails-heading">
            We found the following movies
            <img src="../assets/check-green.svg" alt="" class="heading-icon">
        </h1>
        <main class="movie-list">
            <MovieDetails />
            <MovieDetails />
            <MovieDetails />
        </main>
    </section>
</template>

<script lang="ts">
    import MovieDetails from './MovieDetails.vue';

    export default {
        components: { MovieDetails },
        name: 'Movies'
    }
</script>