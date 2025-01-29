import { createRouter, createWebHistory } from "vue-router";
import EmployeeTable from "@/adapters/views/EmployeeTable.vue"; // Ensure the path is correct

const routes = [
    {
        path: "/employees", // Path to match
        name: "Employees",
        component: EmployeeTable, // Component to render
    },
    {
        path: "/", // Default route
        redirect: "/employees",
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
