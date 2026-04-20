<template>
    <nav>
        <RouterLink :to="{name: 'books.overview'}">Boeken Overzicht</RouterLink> |
        <RouterLink :to="{name: 'books.create'}">Nieuw Boek</RouterLink> - -
        <RouterLink :to="{name: 'authors.overview'}">Auteurs Overzicht</RouterLink>
    </nav>
    <RouterView></RouterView>

</template>



<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';





</script>