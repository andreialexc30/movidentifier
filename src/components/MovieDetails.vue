<template>
        <article class="movie-list_info" v-for="movieObject in fetchedMovies" :key="movieObject.id">
            <div class="movie-art">
                <img :src="movieObject.poster" alt="" class="movie-art_img">
                <div class="movie-art_controls">
                    <button class="movie-art_controls-btn" title="Add to Watch Later">
                        <img src="../assets/watchlater.svg" alt="" class="control-btn_icon">
                    </button>
                    <button class="movie-art_controls-btn" title="Add to Cart">
                        <img src="../assets/plus-circle.svg" alt="" class="control-btn_icon">
                    </button>
                </div>
            </div>
            <div class="movie-details">
                <h1 class="movie-details_title">{{ movieObject.title }}</h1>
                <h2 class="movie-details_director">{{ movieObject.status }}</h2>
                <h3 class="movie-details_date">{{ movieObject.release }}</h3>
                <ul class="movie-details_genres">
                    <li class="movie-details_genres-item" v-for="genre in movieObject.genres" :key="genre.name">{{ genre.name }}</li>
                </ul>
                <p class="movie-details_synopsis">{{ movieObject.synopsis }}</p>
            </div>
        </article>
</template>
<script lang="ts">
    export default {
        props: [
            'fetchedMovies',
            'movie_id'
        ],
    }
</script>