<template>
  <div>
    <MainMenu />
    <main>
      <slot />
    </main>
  </div>
</template>

<script lang="ts" setup>
import MainMenu from '../components/dashboard/MainMenu.vue'
</script>

<style scoped>
main {
  padding: 1rem;
}
</style>
