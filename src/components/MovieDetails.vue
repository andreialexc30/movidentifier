<template>
        <article class="movie-list_info">
            <div class="movie-art">
                <!-- TODO: Movie picture -->
                <img src="../assets/temp.jpg" alt="movie" class="movie-art_img">
                <div class="movie-art_controls">
                    <button class="movie-art_controls-btn">
                        <img src="../assets/watchlater.svg" alt="" class="control-btn_icon">
                    </button>
                    <button class="movie-art_controls-btn">
                        <img src="../assets/plus-circle.svg" alt="" class="control-btn_icon">
                    </button>
                </div>
            </div>
            <div class="movie-details">
                <h1 class="movie-details_title">{{ movieTitle }}</h1>
                <h2 class="movie-details_director">{{ movieDirector }}</h2>
                <h3 class="movie-details_date">{{ movieDate }}</h3>
                <ul class="movie-details_genres" v-for="genre in movieGenres">
                    <li class="movie-details_genres-item">{{ genre }}</li>
                    <li class="movie-details_genres-item">Adventure</li>
                    <li class="movie-details_genres-item">Western</li>
                </ul>
                <p class="movie-details_synopsis">{{ movieSynopsis }}</p>
            </div>
        </article>
</template>
<script lang="ts">
    export default {
        props: ['movieTitle', 'movieDirector', 'movieDate', 'movieSynopsis', 'movieGenres']
    }
</script>