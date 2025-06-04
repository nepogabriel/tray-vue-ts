<script setup lang="ts">
import DefaultLayout from '../../layouts/DefaultLayout.vue'
import { ref, onMounted } from 'vue';
import axios from 'axios';
import type { RegisterSaleInterface } from '@/types/RegisterSale';
import { requestSellers } from '@/services/sellerService';
import type { SellerInterface } from '@/types/Seller';
import { getCookie } from 'typescript-cookie';

const form = ref<RegisterSaleInterface>({
  seller_id: 0,
  value: 0,
  sale_date: '',
});

const sellers = ref<SellerInterface[]>([]);

const submitForm = async () => {
  try {
    const payload = {
      seller_id: form.value.seller_id,
      value: form.value.value,
      sale_date: form.value.sale_date,
    }

    console.log('DADOS: ', payload);

    const token = getCookie('my_api_token');

    const response = await axios.post(
      'http://localhost:8181/api/sale',
      payload,
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      }
    );

    if (response.data.success) {
      alert('Venda registrada com sucesso!');
    }
  } catch (error) {
    console.error('Erro ao registrar venda:', error);
  }
};

onMounted(async () => {
  try {
    sellers.value = await requestSellers();
  } catch (error) {
    console.error('Erro ao buscar vendedores:', error);
  }
});
</script>

<template>
  <DefaultLayout>
    <div class="container">
      <h1 class="text-white text-center mb-5">Registrar Venda</h1>

      <form  @submit.prevent="submitForm">
        <div class="mb-3">
          <label for="sale-total" class="form-label">Valor total:</label>
          <input v-model="form.value" type="number" class="form-control" id="sale-total">
        </div>

        <div class="mb-3">
          <label for="sale-date" class="form-label">Data:</label>
          <input v-model="form.sale_date" type="date" class="form-control" id="sale-date">
        </div>

        <div class="mb-3">
          <label for="sale-seller" class="form-label">Vendendor:</label>
          <select v-model="form.seller_id" class="form-select">
            <option v-for="seller in sellers" :key="seller.id" :value="seller.id">
              {{ seller.id }} - {{ seller.name }}
            </option>
          </select>
        </div>

        <button type="submit" class="btn btn-success">Registrar</button>
      </form>
    </div>
  </DefaultLayout>
</template>

<style scoped>

</style>
