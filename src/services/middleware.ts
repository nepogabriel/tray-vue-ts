import { getCookie, setCookie } from 'typescript-cookie'
import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'

export default{
  auth(
    to: RouteLocationNormalized,
    from: RouteLocationNormalized,
    next: NavigationGuardNext
  ) {
    const token: string | undefined = getCookie('my_api_token');

    // Aplicar consulta da validade do Token

    if (!token) {
      next('/login');
    }

    next();
  },
  redirectIfAuthenticated(
    to: RouteLocationNormalized,
    from: RouteLocationNormalized,
    next: NavigationGuardNext
  ) {
    const token: string | undefined = getCookie('my_api_token');

    if (!token) {
      next();
    }

    next('/');
  }
}
