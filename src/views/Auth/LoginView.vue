<script setup lang="ts">
import { reactive } from 'vue'
import { setCookie } from 'typescript-cookie'
import { useRouter } from 'vue-router'
import api from '@/api/axios'
import { useAuthStore } from '@/stores/auth'

const apiUrl = import.meta.env.VITE_API_URL;
const router = useRouter()

interface FormLogin {
  email: string
  password: string
}

const form = reactive<FormLogin>({
  email: '',
  password: ''
})

const authStore = useAuthStore();

async function login() {
  try {
    const payload = {
      email: form.email,
      password: form.password
    }

    const response = await api.post('/login', payload);
    const token = response.data.access_token;
    authStore.login(token);
    router.push('/');
  } catch (error) {
    console.error('Erro:', error);
  }
}
</script>

<template>
    <main class="form-signin w-100 m-auto">
        <form @submit.prevent="login">
            <h1 class="text-white text-center my-5">Acesse sua conta</h1>

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

            <button class="btn btn-success w-100 py-2 my-3" type="submit">Entrar</button>
            <router-link to="/register" class="btn btn-success w-100 py-2">Cadastre-se</router-link>
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
