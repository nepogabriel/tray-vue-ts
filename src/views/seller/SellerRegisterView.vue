<script setup lang="ts">
import DefaultLayout from '../../layouts/DefaultLayout.vue'
import { ref, onMounted } from 'vue';
import axios from 'axios';
import type { RegisterSellerInterface } from '@/types/RegisterSeller';

const form = ref<RegisterSellerInterface>({
  name: '',
  email: ''
});

const submitForm = async () => {
  try {
    const payload = {
      name: form.value.name,
      email: form.value.email
    }

    const response = await axios.post(
      'http://localhost:8181/api/seller',
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
  <DefaultLayout>
    <div class="container">
      <h1 class="text-white text-center mb-5">Cadastrar Vendedor</h1>

      <form @submit.prevent="submitForm">
        <div class="mb-3">
          <label for="seller-name" class="form-label">Nome:</label>
          <input
            v-model="form.name"
            type="name" class="form-control" id="seller-name" placeholder="Fulano Cicrano">
        </div>

        <div class="mb-3">
          <label for="seller-email" class="form-label">E-mail:</label>
          <input
            v-model="form.email"
            type="email" class="form-control" id="seller-email" placeholder="name@example.com">
        </div>

        <button type="submit" class="btn btn-success">Cadastrar</button>
      </form>
    </div>
  </DefaultLayout>
</template>

<style scoped>

</style>
