<template>
  <div>
<!--    <button @click="fetchData">データを取得</button>-->
    <div v-if="data">レスポンス: {{ data }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// 例えば、別のコンポーネントまたはサービス内で
import { useAuthStore } from '@/stores/auth';
import axios from 'axios';

const authStore = useAuthStore();

const data = ref<string | null>(null);


axios.get('http://localhost:8080/protected-endpoint', {
  headers: {
    'Authorization': `Bearer ${authStore.token}`
  }
})
.then(response => {
  // レスポンス処理
  data.value = response.data;
})
.catch(error => {
  // エラー処理
  console.log(error);
});

// const fetchData = async () => {
//   try {
//     const response = await axios.post('http://localhost:8080/api/data', { sampleData: 'Hello' });
//     data.value = response.data;
//   } catch (error) {
//     console.error('エラー発生:', error);
//   }
// };
</script>