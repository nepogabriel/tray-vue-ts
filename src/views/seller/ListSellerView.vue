<script setup lang="ts">
import DefaultLayout from '../../layouts/DefaultLayout.vue'
import { ref, onMounted } from 'vue';
import axios from 'axios';
import type { SellerInterface } from '../../types/Seller';
import type { ApiResponse } from '@/types/ApiResponse';

const sellers = ref<SellerInterface[]>([]);

const getSellers = async () => {
  try {
    const response = await axios.get<ApiResponse<SellerInterface[]>>('http://localhost:8181/api/seller');
    sellers.value = response.data.data;
  } catch (error) {
    console.error('Erro ao buscar vendas:', error);
  }
};

onMounted(() => {
  getSellers();
});
</script>

<template>
  <DefaultLayout>
    <div class="sales-table">
      <h1 class="text-white text-center mb-5">Lista de Vendedores</h1>

      <table class="table table-dark">
        <thead>
          <tr>
            <th scope="col" class="fw-bold">#</th>
            <th scope="col" class="fw-bold">Nome</th>
            <th scope="col" class="fw-bold">E-mail</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="seller in sellers" :key="seller.id">
            <th scope="row">{{ seller.id }}</th>
            <td>{{ seller.name }}</td>
            <td>{{ seller.email }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </DefaultLayout>
</template>

<style>

</style>
