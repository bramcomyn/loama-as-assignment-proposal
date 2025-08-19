<script setup lang="ts">
</script>

<template>
  <div class="app-container">
    <header class="app-header">
      <h1 class="main-title">LOAMA Dynamic AS Assigner</h1>
    </header>
    <main class="app-main">
      <router-view></router-view>
    </main>
  </div>
</template>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f0f2f5;
  color: #333;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.app-header {
  padding: 2rem 1rem;
  text-align: center;
}

.main-title {
  font-size: 2.5rem;
  font-weight: 600;
  color: #2c3e50;
  margin: 0;
}

.app-main {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}
</style>

<style>
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  box-sizing: border-box;
}
</style>