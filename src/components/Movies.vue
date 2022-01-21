<template>
    <section class="movieDetails">
        <Warnings v-if="foundMovie" />
        <h1 class="movieDetails-heading" v-else>No movies to display</h1>
        <main class="movie-list">
            <MovieDetails :fetchedMovies="fetchedMovies"/>
        </main>
    </section>
</template>

<script lang="ts">
    import MovieDetails from './MovieDetails.vue';
    import Warnings from './Warnings.vue';

    export default {
        props: ['fetchedMovies', 'movie_id', 'foundMovie'],
        components: { MovieDetails, Warnings },
        name: 'Movies'
    }
</script>