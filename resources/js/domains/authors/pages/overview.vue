<template>
    <table>
        <thead>
            <tr>
                <th>ID || </th>
                <th>Naam</th>  
            </tr>
        </thead>
        <tbody>
            <tr v-for="author in getAllAuthors" :key="author.id">
                <td>{{ author.id }}</td>
                <td>{{ author.name }}</td>
                <td><RouterLink :to="{ name: 'authors.edit', params: { id: author.id } }">Edit - </RouterLink></td>
                <td><button @click="deleteAuthor(author.id)">DELETE</button></td>
            </tr>
        </tbody>
    </table>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { deleteAuthor, fetchAuthors, getAllAuthors } from '../store';



fetchAuthors()

</script>