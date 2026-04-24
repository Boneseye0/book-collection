<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { Author, fetchAuthors, getAuthorById, updateAuthor } from '../store';
import Form from '../components/Form.vue';

const router = useRouter();
const route = useRoute();

fetchAuthors();

const author= getAuthorById(Number(route.params.id))

const handleSubmit = async (data:Author) => {
    await updateAuthor(Number(route.params.id), data);
    router.push({name: 'authors.overview'});
};

</script>

<template>
    <div>
        <h2>Author to Edit</h2>
        <Form v-if="author" :author="author" @submit="handleSubmit" />
    </div>
</template>