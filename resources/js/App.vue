<template>
    <nav>
        <RouterLink :to="{name: 'books.overview'}">Book Overzicht</RouterLink> |
        <RouterLink :to="{name: 'books.create'}">New Boek</RouterLink> - -
        <RouterLink :to="{name: 'authors.overview'}">Author Overzicht</RouterLink> |
        <RouterLink :to="{name: 'authors.create'}">New Author</RouterLink>
    </nav>
    <RouterView></RouterView>

</template>



<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';





</script>