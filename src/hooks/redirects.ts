import { router } from "../router/router";

/**
 * Hook para redirigir
 * @param URLTo URL children a redirigir
 * @returns 
 */
export default function redirect(URLTo: string) {

    /**
     * Funcion que redirige a una URL dentro del routerView
     */
    const redirectTo = () => {
        router.push({ path: URLTo })
    }

    return {
        redirectTo
    }
}