<template>
    <div class="mobile-category_dropdown">
        <button v-on:click="toggleDropdown" class="dropdown_toggle">
            Categories
        </button>
        <ul class="dropdown_list">
            <li class="dropdown_list-item">
                <button class="Mobile-categories--pill category-All">All</button>
            </li>
            <li class="dropdown_list-item">
                <button class="Mobile-categories--pill category-Action">Action</button>
            </li>
            <li class="dropdown_list-item">
                <button class="Mobile-categories--pill category-Adventure">Adventure</button>
            </li>
            <li class="dropdown_list-item">
                <button class="Mobile-categories--pill category-Animation">Animation</button>
            </li>
            <li class="dropdown_list-item">
                <button class="Mobile-categories--pill category-Comedy">Comedy</button>
            </li>
            <li class="dropdown_list-item">
                <button class="Mobile-categories--pill category-Crime">Crime</button>
            </li>
            <li class="dropdown_list-item">
                <button class="Mobile-categories--pill category-Documentary">Documentary</button>
            </li>
            <li class="dropdown_list-item">
                <button class="Mobile-categories--pill category-Drama">Drama</button>
            </li>
            <li class="dropdown_list-item">
                <button class="Mobile-categories--pill category-Family">Family</button>
            </li>
            <li class="dropdown_list-item">
                <button class="Mobile-categories--pill category-Fantasy">Fantasy</button>
            </li>
            <li class="dropdown_list-item">
                <button class="Mobile-categories--pill category-History">History</button>
            </li>
            <li class="dropdown_list-item">
                <button class="Mobile-categories--pill category-Horror">Horror</button>
            </li>
            <li class="dropdown_list-item">
                <button class="Mobile-categories--pill category-Music">Music</button>
            </li>
            <li class="dropdown_list-item">
                <button class="Mobile-categories--pill category-Mystery">Mystery</button>
            </li>
            <li class="dropdown_list-item">
                <button class="Mobile-categories--pill category-Romance">Romance</button>
            </li>
            <li class="dropdown_list-item">
                <button class="Mobile-categories--pill category-ScienceFiction">Science-Fiction</button>
            </li>
            <li class="dropdown_list-item">
                <button class="Mobile-categories--pill category-Thriller">Thriller</button>
            </li>
            <li class="dropdown_list-item">
                <button class="Mobile-categories--pill category-TVMovie">TV Movie</button>
            </li>
            <li class="dropdown_list-item">
                <button class="Mobile-categories--pill category-War">War</button>
            </li>
            <li class="dropdown_list-item">
                <button class="Mobile-categories--pill category-Western">Western</button>
            </li>
        </ul>
    </div>
    <div class="searchQuery_Filters-categories">
        <button class="Filters-categories--pill category-All">All</button>
        <button class="Filters-categories--pill category-Action">Action</button>
        <button class="Filters-categories--pill category-Adventure">Adventure</button>
        <button class="Filters-categories--pill category-Animation">Animation</button>
        <button class="Filters-categories--pill category-Comedy">Comedy</button>
        <button class="Filters-categories--pill category-Crime">Crime</button>
        <button class="Filters-categories--pill category-Documentary">Documentary</button>
        <button class="Filters-categories--pill category-Drama">Drama</button>
        <button class="Filters-categories--pill category-Family">Family</button>
        <button class="Filters-categories--pill category-Fantasy">Fantasy</button>
        <button class="Filters-categories--pill category-History">History</button>
        <button class="Filters-categories--pill category-Horror">Horror</button>
        <button class="Filters-categories--pill category-Music">Music</button>
        <button class="Filters-categories--pill category-Mystery">Mystery</button>
        <button class="Filters-categories--pill category-Romance">Romance</button>
        <button class="Filters-categories--pill category-ScienceFiction">Science-Fiction</button>
        <button class="Filters-categories--pill category-Thriller">Thriller</button>
        <button class="Filters-categories--pill category-TVMovie">TV Movie</button>
        <button class="Filters-categories--pill category-War">War</button>
        <button class="Filters-categories--pill category-Western">Western</button>
    </div>
</template>
<script src="../typescript/dropdown.ts"></script>