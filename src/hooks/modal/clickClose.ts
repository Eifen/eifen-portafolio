import { ref } from "vue";

export default function clickCose() {
    const styleId = ref('');

    /**
     * Funcion que configura una alerta en caso que se quiera cerrar el modal sin presionar el lugar adecuado
     */
    const changeStyle = () => {
        styleId.value = 'no-click';
        setTimeout(() => {
            styleId.value = ''
        }, 150);
    }

    return { styleId, changeStyle }
}