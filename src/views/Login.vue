<script setup lang="ts">
// Não é necessário definir name no script setup
// Reactive data
// const someData = ref<string>('');

// Methods
// const someMethod = () => {
//   // lógica do método
// };

// Computed properties
// const computedValue = computed(() => {
//   return someData.value.toUpperCase();
// });

// Lifecycle hooks
// onMounted(() => {
//   // lógica de inicialização
// });

import { reactive } from 'vue'
import axios from 'axios'

interface FormLogin {
  email: string
  password: string
}

const form = reactive<FormLogin>({
  email: '',
  password: ''
})

async function submitForm() {
    console.log('here');
  try {
    const response = await axios.post('localhost:8181/api/login', {
      email: form.email,
      password: form.password
    })
    console.log('Sucesso:', response.data)
  } catch (error) {
    console.error('Erro ao enviar:', error)
  }
}
</script>

<template>
    <main class="form-signin w-100 m-auto">
        <form @submit.prevent="submitForm">
            <h1 class="h3 mb-3 fw-normal">Acesse sua conta</h1>

            <div class="form-floating">
                <input 
                    v-model="form.email"
                    type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                <label for="floatingInput">E-mail</label>
            </div>
            
            <div class="form-floating">
                <input 
                    v-model="form.password"
                    type="password" class="form-control" id="floatingPassword" placeholder="Password">
                <label for="floatingPassword">Senha</label>
            </div>
            
            <button class="btn btn-info w-100 py-2" type="submit">Entrar</button>
        </form>
    </main>
</template>

<style scoped>
.form-signin {
  max-width: 330px;
  padding: 1rem;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>