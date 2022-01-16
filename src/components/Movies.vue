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
                :base_url="this.img.base_url"
                :size="this.img.size"
                :file_path="this.img.file_path"
             />
        </main>
    </section>
</template>

<script lang="ts">
    import MovieDetails from './MovieDetails.vue';

    export default {
        props: ['movie', 'img'],
        components: { MovieDetails },
        name: 'Movies'
    }
</script>