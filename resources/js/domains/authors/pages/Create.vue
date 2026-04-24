<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { Author, createAuthor } from '../store';
import Form from '../components/Form.vue';

const router = useRouter()
const author = ref({
    name: '',
})

const handleSubmit = async (data:Author) => {
    await createAuthor(data);
    router.push({name: 'authors.overview'})
}
</script>

<template>
    <div>
        <h2>New Author to be added</h2>
        <Form :author="author" @submit="handleSubmit"></Form>
    </div>
</template>