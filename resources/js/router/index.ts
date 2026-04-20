import { createRouter, createWebHistory } from "vue-router";
import { bookRoutes } from "../domains/books/routes.js";
import { authorRoutes } from "../domains/authors/routes.js";


export const router = createRouter({
    history: createWebHistory(),
    routes: [...bookRoutes, ...authorRoutes],
});