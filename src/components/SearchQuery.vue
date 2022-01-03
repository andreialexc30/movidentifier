<template>
    <form class="searchQuery_form">
        <input class="searchQuery_input" type="text" placeholder="Type your movie here" />
        <Filters />
    </form>
</template>

<script lang="ts">
import Filters from './Filters.vue';

export default {
    components: { Filters },
    name: 'SearchQuery'
}
</script>