import { useStorPinia } from "~/store/index";

export default defineNuxtRouteMiddleware((to, from) => {
  const usePinia = useStorPinia();
  const permissionToDashboardPage = usePinia.permissionToDashboard;

  if (to.name === "dashboard" && permissionToDashboardPage) {
    console.log("میتوانید وارد صفحه داشبورد شوید");
    // next();
  } else {
    // هدایت کاربر به صفحه خطا
    console.log("شما اجازه ورود به صفحه داشبورد را ندارید  !");
    return navigateTo("/auth/login");

  }
});
