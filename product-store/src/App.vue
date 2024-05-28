<template>
  <Toast/>
  <nav>
    <h1>Gerenciador de Produtos</h1>
    <div class="page-links">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
  </nav>
  <router-view />
</template>

<script>
import Toast from 'primevue/toast';

export default {
  components: { Toast }
}
</script>