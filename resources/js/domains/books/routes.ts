import Create from "./pages/Create.vue";
import Overview from "./pages/Overview.vue";

export const bookRoutes = [
    { path: '/books', component: Overview, name: 'books.overview' },
    { path: '/books/create', component: Create, name: 'books.create'}
]