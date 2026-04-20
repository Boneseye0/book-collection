<script setup lang="ts">

import { ref } from 'vue';
import { fetchAuthors, getAllAuthors } from '../../authors/store';

fetchAuthors()

const props = defineProps({ book: Object});

const emit = defineEmits(['submit']);

const form = ref({...props.book})

const handleSubmit = () => emit('submit', form.value)

</script>

<template>
    <form @submit.prevent="handleSubmit">
        <label>Title:</label>
        <input v-model="form.title" type="text" required/>

        <label>Summary:</label>
        <textarea v-model="form.description" required></textarea>
        <label>Author:</label>
        <select v-model="form.author_id" required>
            <option v-for="author in getAllAuthors" :key="author.id" :value="author.id">
                {{ author.name }}
            </option>
        </select>

        <button type="submit">Save</button>
    </form>
</template>