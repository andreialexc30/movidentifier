<template>
    <form class="searchQuery_form">
        <div class="searchQuery_form-wrapper">
            <input class="searchQuery_input" type="text" placeholder="Type your movie here" />
            <button class="input-submit_btn" @click.prevent="searchMovie()">Search</button>
        </div>
        <Filters :fetchedMovies="fetchedMovies" />
    </form>
</template>

<script lang="ts">
    import Filters from './Filters.vue';
    import Movies from './Movies.vue';

    export default {
        props: ['searchMovie', 'fetchedMovies'],
        components: { Filters, Movies },
        name: 'SearchQuery'
    }
</script>