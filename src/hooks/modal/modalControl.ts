import { ref } from "vue"

export default function modalControl() {
    const controlModal = ref<boolean>(false)


    function activeModal() {
        controlModal.value = !controlModal.value
    }

    return {
        controlModal,
        activeModal
    }
}