<script setup lang="ts">
import DefaultLayout from '../../layouts/DefaultLayout.vue'
import { ref, onMounted } from 'vue';
import api from '@/api/axios';
import type { SaleInterface } from '../../types/Sale';
import type { ApiResponse } from '@/types/ApiResponse';

const sales = ref<SaleInterface[]>([]);

const getSales = async () => {
  try {
    const response = await api.get<ApiResponse<SaleInterface[]>>('/sale');
    sales.value = response.data.data;
  } catch (error) {
    console.error('Erro ao buscar vendas:', error);
  }
};

onMounted(() => {
  getSales();
});
</script>

<template>
  <DefaultLayout>
    <div class="sales-table">
      <h1 class="text-white text-center mb-5">Lista de Vendas</h1>

      <table class="table table-dark">
        <thead>
          <tr>
            <th scope="col" class="fw-bold">#</th>
            <th scope="col" class="fw-bold">Vendendor</th>
            <th scope="col" class="fw-bold">Total</th>
            <th scope="col" class="fw-bold">Comissão</th>
            <th scope="col" class="fw-bold">Data</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="sale in sales" :key="sale.id">
            <th scope="row">{{ sale.id }}</th>
            <td>{{ sale.id }}</td>
            <td>{{ sale.value }}</td>
            <td>{{ sale.commission }}</td>
            <td>{{ sale.sale_date }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </DefaultLayout>
</template>

<style>

</style>
