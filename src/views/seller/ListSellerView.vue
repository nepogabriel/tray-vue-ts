<script setup lang="ts">
import DefaultLayout from '../../layouts/DefaultLayout.vue'
import { ref, onMounted } from 'vue';
import type { SellerInterface } from '../../types/Seller';
import { requestSellers, sendEmail } from '@/services/sellerService';

const sellers = ref<SellerInterface[]>([]);

const getSellers = async () => {
  try {
    sellers.value = await requestSellers();
  } catch (error) {
    console.error('Erro ao buscar vendas:', error);
  }
};

function clickEmail(seller_id: number) {
  sendEmail(seller_id);
}

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
            <th scope="col" class="fw-bold">Relatório</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="seller in sellers" :key="seller.id">
            <th scope="row">{{ seller.id }}</th>
            <td>{{ seller.name }}</td>
            <td>{{ seller.email }}</td>
            <td><a @click="clickEmail(seller.id)" class="btn btn-success">Enviar</a></td>
          </tr>
        </tbody>
      </table>
    </div>
  </DefaultLayout>
</template>

<style>

</style>
