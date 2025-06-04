<script setup lang="ts">
import DefaultLayout from '../../layouts/DefaultLayout.vue'
import { ref, onMounted } from 'vue';
import axios from 'axios';
import type { SaleInterface } from '../../types/Sale';

// const sales = ref<SaleInterface[]>([]);

// const getSales = async () => {
//   try {
//     const response = await axios.get<ApiResponse<SaleInterface[]>>('http://localhost:8181/api/sale');
//     sales.value = response.data.data;
//   } catch (error) {
//     console.error('Erro ao buscar vendas:', error);
//   }
// };

// onMounted(() => {
//   getSales();
// });
</script>

<template>
  <DefaultLayout>
    <div class="container">
      <h1 class="text-white text-center mb-5">Registrar Venda</h1>

      <form class="">
        <div class="mb-3">
          <label for="sale-total" class="form-label">Valor total:</label>
          <input type="text" class="form-control" id="sale-total">
        </div>

        <div class="mb-3">
          <label for="sale-date" class="form-label">Data:</label>
          <input type="date" class="form-control" id="sale-date">
        </div>

        <div class="mb-3">
          <label for="sale-seller" class="form-label">Vendendor:</label>
          <input type="text" class="form-control" id="sale-seller">
        </div>

        <button type="submit" class="btn btn-success">Registrar</button>
      </form>
    </div>
  </DefaultLayout>
</template>

<style scoped>

</style>
