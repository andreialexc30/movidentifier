<template>
    <section class="movieDetails">
        <h1 class="movieDetails-heading">
            We found the following movies
            <img src="../assets/check-green.svg" alt="" class="heading-icon">
        </h1>
        <main class="movie-list">
            <MovieDetails :movieTitle="this.movie.movieTitle"
                :movieDirector="this.movie.movieDirector"
                :movieDate="this.movie.movieDate"
                :movieSynopsis="this.movie.movieSynopsis"
                :movieGenres="this.movie.movieGenres"
             />
        </main>
    </section>
</template>

<script lang="ts">
    import MovieDetails from './MovieDetails.vue';

    export default {
        props: ['movie'],
        components: { MovieDetails },
        name: 'Movies',
        mounted() {
            // console.log(this.movie);
        }
    }
</script>