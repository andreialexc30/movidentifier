<template>
    <form class="searchQuery_form">
        <div class="searchQuery_form-wrapper">
            <input class="searchQuery_input" type="text" placeholder="Type your movie here" />
            <button class="input-submit_btn" @click="searchMovie()">Search</button>
        </div>
        <Filters />
    </form>
</template>

<script lang="ts">
    import Filters from './Filters.vue';
    import Movies from './Movies.vue';

    export default {
        props: ['searchMovie'],
        components: { Filters, Movies },
        name: 'SearchQuery'
    }
</script>