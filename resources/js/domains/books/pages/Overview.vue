<template>
    <table>
        <thead>
            <tr>
                <th>Title</th>
                <th>Summary</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="book in getAllBooks" :key="book.id">
                <td>{{ book.title }}</td>
                <td>{{ book.description }}</td>
            </tr>
        </tbody>
    </table>
    
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { fetchBooks, getAllBooks } from '../store';



fetchBooks()
</script>