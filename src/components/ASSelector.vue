<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { ControllerType } from '@/types/IASController';
import { useASStore } from '@/stores/ASStore';

const router = useRouter();
const store = useASStore();

const as_url = ref('http://localhost:4000/uma/policies');
const as_type = ref(ControllerType.ODRL);

const continueWithSettings = () => {
    store.setConfiguration({ as_url: as_url.value, as_type: as_type.value });
    router.push({ name: 'dashboard' });
};
</script>

<template>
    <div class="as-config-container">
        <div class="config-section">
            <h2 class="section-title">AS URL is set to <span class="highlight">{{ as_url }}</span></h2>
            <label for="as-url-input" class="label">Enter your AS URL:</label>
            <input 
                id="as-url-input"
                class="text-input"
                v-model="as_url" 
                placeholder="edit me"
            />
        </div>

        <div class="config-section">
            <h2 class="section-title">AS Type is set to <span class="highlight">{{ as_type }}</span></h2>
            <label for="as-type-select" class="label">Select your AS type:</label>
            <select id="as-type-select" class="select-input" v-model="as_type">
                <option :value="ControllerType.GOOGLE">Google Drive</option>
                <option :value="ControllerType.SOLID">SOLID</option>
                <option default :value="ControllerType.ODRL">ODRL</option>
            </select>
        </div>

        <button class="continue-button" @click="continueWithSettings">
            Continue with these settings
        </button>
    </div>
</template>

<style scoped>
.as-config-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    font-family: Arial, sans-serif;
    color: #333;
    padding: 2rem;
    background-color: #f8f9fa;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    max-width: 600px;
}

.config-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 0.5rem;
}

.section-title {
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
    text-align: center;
}

.highlight {
    font-weight: bold;
    color: #007bff;
}

.label {
    font-size: 1rem;
    margin-bottom: 0.25rem;
    text-align: center;
}

.text-input,
.select-input {
    width: 100%;
    padding: 0.75rem;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}

.text-input:focus,
.select-input:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.25);
}

.continue-button {
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    font-weight: bold;
    color: #fff;
    background-color: #28a745; /* A success green color */
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
}

.continue-button:hover {
    background-color: #218838;
}
</style>
