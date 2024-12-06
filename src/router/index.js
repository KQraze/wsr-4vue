import { createRouter, createWebHistory } from "vue-router";
import { HomeView, OrdersView, ShiftView, EmployeeView } from "@/views";
import { useStore } from "vuex";

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

router.beforeEach((to) => {
  const store = useStore();

  const authPages = ["orders", "shift", "employee"];

  // todo fix
  const isAuth = !!store.getters.token;
  const isAvailable =
    (["shift", "employee"].includes(to.name) && store.getters.isAdmin) ||
    authPages.includes(to.name);

  if (!isAuth || !isAvailable) {
    return { name: "home" };
  }
});

export default router;
