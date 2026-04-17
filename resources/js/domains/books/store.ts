import { computed, ref } from "vue";
import axios from "axios";

export type Book = {
    id: number,
    title: string,
    description: string,
}

const books = ref([]);

export const getAllBooks = computed(() => books.value);


export const fetchBooks = async () => {
    const {data} = await axios.get('/api/books');
    if(!data) return
    books.value = data;
}