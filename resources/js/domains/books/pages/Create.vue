<template>
    <div>
        <h2>Nieuw toe te voegen Boek</h2>
        <Form :book="book" @submit="handleSubmit" />
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { Book, createBook } from '../store';
import { ref } from 'vue';
import Form from '../components/Form.vue';


const router = useRouter();

const book = ref({
    title: '',
    description: '',
    author_id: null
});

const handleSubmit = async (data:Book) => {
    await createBook(data);
    router.push({name: 'books.overview'});
};

</script>