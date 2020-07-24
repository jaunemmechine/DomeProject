export default [
    {
        path: "/",
        name: "Dashboard",
        component: () => import("../views/Dashboard")
    },
    {
        path: "/servers",
        name: "Servers",
        component: () => import("../views/Servers")
    },
    {
        path: "/history",
        name: "History",
        component: () => import("../views/History")
    },
    {
        path: "/action",
        name: "Action",
        component: () => import("../views/Action")
    }
];
