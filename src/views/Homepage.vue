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
            <button v-if="trueCondition()" type="button" class="button" @click="wspConnect(toWsp())"
                :disabled="isPresss">
                <template v-if="!isPresss">
                    <FontAwesome string-icon="fa-solid fa-mail-reply"></FontAwesome>
                    Iniciar contacto
                </template>
                <template v-else>
                    <FontAwesome string-icon="fa-solid fa-spinner" i-spin></FontAwesome>
                    {{ messageButton }}
                </template>
            </button>
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
import FontAwesome from '../components/FontAwesome.vue';
import modalControl from '../hooks/modal/modalControl';
import paramsValidate from '../hooks/contact/paramsValidate';
import emailValidate from '../hooks/contact/emailValidate';
import stringValidate from '../hooks/contact/stringValidate';
import { ErrorMessage } from '../enum/errorMessage.enum';
import buttonConfig from '../hooks/buttonConfig';
import mailPrepare from '../hooks/contact/mailPrepare';
import { watch } from 'vue';

//Hooks
const { activeModal, controlModal } = modalControl()
const { email, message, name } = paramsValidate()
const { isPresss, messageButton, aMessage, phone } = buttonConfig()

//Conditions
const emailCondition = (value: string) => emailValidate(value)
const nameCondition = (value: string) => stringValidate(value, 50)
const trueCondition = () => emailCondition(email.value) && nameCondition(name.value)

//Handles
const toWsp = () => mailPrepare({
    email: email.value,
    name: name.value,
})

function wspConnect(payload: string) {
    isPresss.value = true
    aMessage.value = `http://wa.me/${phone}?text=${payload}`
    messageButton.value = "Se abrirá una pestaña en breves"
    setTimeout(() => {
        activeModal();
        isPresss.value = false;
        goWs()
    }, 2000);
}

function goWs() {
    const a = document.createElement('a')
    a.href = aMessage.value
    a.target = '_blank'
    a.style.display = 'none'
    //Creamos y borramos
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
}

function eraser() {
    email.value = ''
    name.value = ''
    message.value = ''
    messageButton.value = ''
    aMessage.value = ''
}

//Watch
watch(controlModal, () => {
    eraser()
})

</script>