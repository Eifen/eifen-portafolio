import { ref } from "vue";

export default function buttonConfig() {
    const isPresss = ref<boolean>(false)
    const messageButton = ref<string>('')
    const errorButton = ref<string>('')

    return {
        isPresss,
        messageButton,
        errorButton
    }
}