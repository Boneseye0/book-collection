<template>
    <table>
        <thead>
            <tr>
                <th>Title</th>
                <th>Summary</th>
                <th>actions</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="book in books" :key="book.id">
                <td>{{ book.title }}</td>
                <td>{{ book.description }}</td>
                <td><RouterLink :to="{ name: 'books.edit', params: { id: book.id } }">edit</RouterLink></td>
                <td><button @click="deleteBook(book.id)">DELETE</button></td>
            </tr>
        </tbody>
    </table>
    
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { fetchBooks, getAllBooks, deleteBook, bookStore } from '../store';
import { RouterLink } from 'vue-router';


bookStore.actions.getAll()

const books = bookStore.getters.all

// fetchBooks()
</script>