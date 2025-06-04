<template>
  <nav class="navbar navbar-expand-lg bg-dark text-white">
    <div class="container-fluid">
        <router-link to="/" class="navbar-brand link-logo-menu text-white">
             Dashboard
        </router-link>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <router-link to="/" class="nav-link fw-bold text-white">Vendas</router-link>
                </li>

                <li class="nav-item">
                    <router-link to="/sale-register" class="nav-link fw-bold text-white">Registrar venda</router-link>
                </li>

                <li class="nav-item">
                    <router-link to="/seller-register" class="nav-link fw-bold text-white">Cadastrar vendendor</router-link>
                </li>

                <li class="nav-item">
                    <router-link to="/list-seller" class="nav-link fw-bold text-white">Vendedores</router-link>
                </li>
            </ul>
        </div>
    </div>
  </nav>
</template>

<script lang="ts" setup>
//
</script>

<style scoped>

</style>
