<script setup lang="ts">
import { useASStore } from '@/stores/ASStore';
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';

const router = useRouter();
const store = useASStore();

const { configuration, controllerInstance } = storeToRefs(store);

const goBackToConfig = () => {
    router.push({ name: 'home' });
};
</script>

<template>
  <div class="dashboard-container">
    <div class="dashboard-card">
      <h2 class="card-title">Authorization Server Configuration</h2>

      <div v-if="configuration.as_url" class="config-details">
        <div class="info-item">
          <span class="info-label">Server URL:</span>
          <p class="info-value">{{ configuration.as_url }}</p>
        </div>
        
        <div class="info-item">
          <span class="info-label">Server Type:</span>
          <p class="info-value">{{ configuration.as_type }}</p>
        </div>

        <div class="info-item">
          <span class="info-label">Controller Identification:</span>
          <p class="info-value">{{ controllerInstance.identify() }}</p>
        </div>

        <button @click="goBackToConfig" class="back-button">
          Go Back and Change Settings
        </button>
      </div>

      <div v-else class="no-config">
        <p>No authorization server has been configured yet.</p>
        <button @click="goBackToConfig" class="back-button">
          Go to Configuration
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.dashboard-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  min-height: 100%;
}

.dashboard-card {
  width: 100%;
  max-width: 600px;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  padding: 2.5rem;
  text-align: center;
}

.card-title {
  font-size: 1.75rem;
  color: #2c3e50;
  margin-bottom: 2rem;
  font-weight: 600;
}

.config-details {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.info-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.info-label {
  font-size: 1rem;
  font-weight: bold;
  color: #555;
  text-transform: uppercase;
}

.info-value {
  font-size: 1.15rem;
  color: #007bff;
  word-break: break-all;
  margin: 0;
}

.back-button {
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: bold;
  color: #fff;
  background-color: #6c757d;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
}

.back-button:hover {
  background-color: #5a6268;
}

.no-config {
  font-style: italic;
  color: #777;
}

.no-config .back-button {
  margin-top: 1rem;
}
</style>
