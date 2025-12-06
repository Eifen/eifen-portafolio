import { ref } from "vue";

export default function buttonConfig() {
    const isPresss = ref<boolean>(false)
    const messageButton = ref<string>('')
    const errorButton = ref<string>('')
    const aMessage = ref<string>('')
    const phone = import.meta.env['VITE_PHONE']

    return {
        isPresss,
        messageButton,
        errorButton,
        phone,
        aMessage
    }
}