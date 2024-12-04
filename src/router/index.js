import { createRouter, createWebHistory } from "vue-router";
import { HomeView, OrdersView, ShiftView, EmployeeView } from "@/views";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/orders",
    name: "orders",
    component: OrdersView,
  },
  {
    path: "/shift",
    name: "shift",
    component: ShiftView,
  },
  {
    path: "/employee",
    name: "employee",
    component: EmployeeView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
