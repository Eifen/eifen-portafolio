<template>
    <div class="homepage-container">
        <div class="homepage-container-header">
            <Header></Header>
        </div>
        <div class="homepage-container-aside">
            <Aside></Aside>
        </div>
        <div class="homepage-container-body">

            <Body></Body>
        </div>
        <div class="homepage-container-footer">
            <Footer @open-modal="activeModal()"></Footer>
        </div>
    </div>
    <Modals v-if="controlModal" x-large @close-modal="activeModal()">
        <template #modal-header>Formulario de Contacto</template>
        <template #default>
            <div class="labels">Nombre del cliente</div>
            <Inputs first-icon="fa-solid fa-user" placeholder-string="Ingrese su nombre o el de la empresa" type="input"
                v-model="name">
                <template #input-error>
                    <span v-if="!nameCondition(name) && name.length > 0">{{ ErrorMessage.LENGTH }} 50.
                        Longitud Actual: {{
                            name.length }}</span>
                </template>
            </Inputs>
            <div class="labels">Correo del remitente</div>
            <Inputs first-icon="fa-solid fa-user" placeholder-string="Ingrese su correo" type="input" v-model="email">
                <template #input-error>
                    <span v-if="!emailCondition(email) && email.length > 0">{{ ErrorMessage.EMAIL }}</span>
                </template>
            </Inputs>
            <div class="labels">Mensaje a enviar</div>
            <TextAreas first-icon="fa-solid fa-message" placeholder-string="Ingrese su mensaje de contacto" :rows="5"
                v-model="message" @get-value="">
                <template #input-error>
                    <span v-if="!stringCondition(message) && message.length > 0">{{ ErrorMessage.LENGTH }} 1000.
                        Longitud Actual: {{
                            message.length }}</span>
                </template>
            </TextAreas>
            <button v-if="trueCondition()" type="button" class="button" @click="axiosSend(toAxios())"
                :disabled="isPresss">
                <template v-if="!isPresss">
                    <FontAwesome string-icon="fa-solid fa-mail-reply"></FontAwesome>
                    Enviar mensaje
                </template>
                <template v-else>
                    <FontAwesome string-icon="fa-solid fa-spinner" i-spin></FontAwesome>
                    Enviando correo...
                </template>
            </button>
            <div v-if="messageButton.length > 0" class="success-button">{{ messageButton }}</div>
            <div v-else-if="errorButton.length > 0" class="error-button">{{ errorButton }}</div>
        </template>
    </Modals>
</template>
<!-- SCRIPT -->
<script setup lang="ts">
import Header from './Header.vue';
import Body from './Body.vue';
import Footer from './Footer.vue';
import Aside from './Aside.vue';
import Modals from '../components/Modals.vue';
import Inputs from '../components/Inputs.vue';
import TextAreas from '../components/TextAreas.vue';
import FontAwesome from '../components/FontAwesome.vue';
import modalControl from '../hooks/modal/modalControl';
import paramsValidate from '../hooks/contact/paramsValidate';
import emailValidate from '../hooks/contact/emailValidate';
import stringValidate from '../hooks/contact/stringValidate';
import { ErrorMessage } from '../enum/errorMessage.enum';
import buttonConfig from '../hooks/buttonConfig';
import mailPrepare from '../hooks/contact/mailPrepare';
import type ISendMail from '../interfaces/nodemailer/sendMail.interface';
import axios from 'axios';
import { watch } from 'vue';
import { server } from '../common/server';

//Hooks
const { activeModal, controlModal } = modalControl()
const { email, message, name } = paramsValidate()
const { isPresss, messageButton, errorButton } = buttonConfig()

//Conditions
const emailCondition = (value: string) => emailValidate(value)
const stringCondition = (value: string) => stringValidate(value, 1000)
const nameCondition = (value: string) => stringValidate(value, 50)
const trueCondition = () => emailCondition(email.value) && stringCondition(message.value) && nameCondition(name.value)

//Handles
const toAxios = () => mailPrepare({
    email: email.value,
    name: name.value,
    message: message.value
})

async function axiosSend(payload: ISendMail) {
    try {
        console.log(server)
        isPresss.value = true
        const response = await axios.post(server, payload)
        isPresss.value = false
        messageButton.value = response.data
        setTimeout(() => {
            activeModal();
        }, 1000);
    } catch (error) {
        errorButton.value = 'Ha ocurrido un error, intente más tarde...'
        isPresss.value = false
        console.error(error)
        setTimeout(() => {
            activeModal();
        }, 1000);
    }
}

function eraser() {
    email.value = ''
    name.value = ''
    message.value = ''
    messageButton.value = ''
    errorButton.value = ''
}

//Watch
watch(controlModal, () => {
    eraser()
})

</script>