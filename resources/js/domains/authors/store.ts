import { computed, ref } from "vue"
import axios from "axios";

export type Author = {
    id: number,
    name: string,
}

const authors = ref<Author[]>([]);


export const getAllAuthors = computed(() => authors.value);

export const fetchAuthors = async () => {
    const {data} = await axios.get('/api/authors');
    if(!data) return
    authors.value = data;
}