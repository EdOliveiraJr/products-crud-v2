<template>
  <div class="app">
    <Toast/>
    <nav>
      <div class="title">
        <img src="../public/logo.png"/>
        <h1>Gerenciador de Produtos</h1>
      </div>
      <div class="page-links">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div>
    </nav>
    <main>
      <router-view />
    </main>
    <Footer/>
  </div>
  </template>

<script>
import Footer from './components/Footer.vue'
import Toast from 'primevue/toast';

export default {
  name: 'App',
  components: { Footer, Toast }
}
</script>