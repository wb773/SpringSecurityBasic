<template>
  <div>
    <form @submit.prevent="login">
      <input v-model="username" type="text" placeholder="Username" />
      <input v-model="password" type="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import axios from 'axios';
import { useAuthStore } from '@/stores/auth';

const username = ref('');
const password = ref('');

const login = async () => {
  try {
    console.log("username: " + username.value + " password: " + password.value);
    const headerAuthorization = 'Basic ' + btoa(username.value + ':' + password.value);
    console.log("headerAuthorization" + headerAuthorization);
    const response = await axios.get('http://localhost:8080/login', {
      headers: {
        'Authorization': 'Basic ' + btoa(username.value + ':' + password.value)
      }
    });

    // レスポンスからトークンを取得
    const token = response.data.token; // トークンの位置はAPIの設計に依存します
    console.log("token: " + token);
    // Piniaストアにトークンを保存
    const authStore = useAuthStore();
    authStore.setToken(token);
    console.log("ログイン成功");
    return true; // ログイン成功
  } catch (error) {
    console.error('Login failed:', error);
    return false; // ログイン失敗
  }
};
</script>