import { ref } from "vue";

export default function paramsValidate() {
    const email = ref<string>('')
    const message = ref<string>('')
    const name = ref<string>('')

    return {
        email,
        message,
        name
    }
}