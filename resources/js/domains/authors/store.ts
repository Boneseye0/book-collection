import { computed, ref } from "vue"
import axios from "axios";
import { deleteRequest, getRequest, postRequest, putRequest } from "../../services/http";

export type Author = {
    id: number,
    name: string,
};

const authors = ref<Author[]>([]);


export const getAllAuthors = computed(() => authors.value);

export const getAuthorById = (id:number) => computed(() => authors.value.find(author => author.id == id ));

export const fetchAuthors = async () => {
    const { data } = await getRequest('/authors');
    if(!data) return
    authors.value = data;
};

export const createAuthor = async (newAuthor:Author) => {
    const { data } = await postRequest('/authors', newAuthor);
    // const { data } = await axios.post('/api/authors', newAuthor);
    if(!data) return
    authors.value = data;
};

export const updateAuthor = async (id:number, updatedAuthor:Author) => {
    const { data } = await putRequest(`/authors/${id}`, updatedAuthor)
    // const { data } = await axios.put(`/api/authors/${id}`, updatedAuthor);
    if (!data) return;
    authors.value = data;
};

export const deleteAuthor = async (id:number) => {
    await deleteRequest(`/authors/${id}`)
    // await axios.delete(`/api/authors/${id}`);
    authors.value = authors.value.filter(author => author.id !== id);
}; //amend with books