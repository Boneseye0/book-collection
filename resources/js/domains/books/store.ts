import { computed, ref } from "vue";
import axios, { all } from "axios";
import { deleteRequest, getRequest, postRequest, putRequest } from "../../services/http";
import { storeModuleFactory } from "../../services/store";

export type Book = {
    id: number,
    title: string,
    description: string,
};


export const bookStore = storeModuleFactory('books')


const books = ref<Book[]>([]);
// export const getAllBooks = computed(() => books.value);

export const getBookById = (id:number) => computed(() => books.value.find(book => book.id == id ));

export const fetchBooks = async () => {
    const { data } = await getRequest('/books');
    // const {data} = await axios.get('/api/books');
    if(!data) return
    books.value = data;
};


export const createBook = async (newBook:Book) => {
    const { data } = await postRequest(`/books/`, newBook);
    // const {data} = await axios.post('/api/books', newBook);
    if(!data) return
    books.value = data;
};

export const updateBook = async (id:number, updatedBook:Book) => {
    const { data } = await putRequest(`/books/${id}`, updatedBook)
    // const { data } = await axios.put(`/api/books/${id}`, updatedBook);
    if (!data) return;
    books.value = data;
};

export const deleteBook = async (id:number) => {
    await deleteRequest(`/books/${id}`);
    books.value = books.value.filter(book => book.id !== id);
};