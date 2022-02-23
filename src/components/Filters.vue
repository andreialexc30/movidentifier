<template>
    <div class="searchQuery_Filters-categories">
        <button id="sortBtn" @click="sortMovie()" class="sortMoviesBtn">Sort: A-Z</button>
        <select name="Genres" id="genres" class="genresFilter" @click="filterByGenre()">
            <option value="All">All</option>
            <option value="Action">Action</option>
            <option value="Adventure">Adventure</option>
            <option value="Animation">Animation</option>
            <option value="Comedy">Comedy</option>
            <option value="Crime">Crime</option>
            <option value="Documentary">Documentary</option>
            <option value="Drama">Drama</option>
            <option value="Family">Family</option>
            <option value="Fantasy">Fantasy</option>
            <option value="History">History</option>
            <option value="Horror">Horror</option>
            <option value="Music">Music</option>
            <option value="Mystery">Mystery</option>
            <option value="Romance">Romance</option>
            <option value="ScienceFiction">ScienceFiction</option>
            <option value="Thriller">Thriller</option>
            <option value="TVMovie">TVMovie</option>
            <option value="War">War</option>
            <option value="Western">Western</option>
        </select>
    </div>
</template>
<script src="../typescript/dropdown.ts"></script>