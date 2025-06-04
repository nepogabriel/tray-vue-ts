<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';
import type { RegisterUserInterface } from '@/types/RegisterUser';

const form = ref<RegisterUserInterface>({
  name: '',
  email: '',
  password: ''
});

const submitForm = async () => {
  try {
    const payload = {
      name: form.value.name,
      email: form.value.email,
      password: form.value.password
    }

    const response = await axios.post(
      'http://localhost:8181/api/register',
      payload,
      {
        headers: {
          'Content-Type': 'application/json',
          'Access': 'application/json',
        }
      }
    );

    if (response.data.success)
      alert('Vendedor cadastrado com sucesso!');
  } catch (error) {
    console.error('Erro ao cadastrar vendedor:', error);
  }
};
</script>

<template>
  <div class="container">
    <h1 class="text-white text-center my-5">Cadastrar Vendedor</h1>

    <form @submit.prevent="submitForm">
      <div class="mb-3">
        <label for="user-name" class="form-label">Nome:</label>
        <input
          v-model="form.name"
          type="name" class="form-control" id="user-name" placeholder="Digite seu nome completo">
      </div>

      <div class="mb-3">
        <label for="user-email" class="form-label">E-mail:</label>
        <input
          v-model="form.email"
          type="email" class="form-control" id="user-email" placeholder="name@example.com">
      </div>

      <div class="mb-3">
        <label for="user-password" class="form-label">Password:</label>
        <input
          v-model="form.password"
          type="password" class="form-control" id="user-password">
      </div>

      <button type="submit" class="btn btn-success">Cadastrar</button>
      <router-link to="/login" class="btn btn-success ms-2">Voltar para Login</router-link>
    </form>
  </div>
</template>

<style scoped>

</style>
