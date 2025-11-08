<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'LoginView',
})
</script>

<template>
  <div class="login-page">
    <h1>注册页面</h1>
    <p>注册页面</p>
  </div>
</template>


<style scoped>
.login-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background-color: #f7f3ea;
  color: #2c3e50;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;
}

.login-page h1 {
  font-size: 24px;
  margin: 0 0 8px 0;
}

.login-page p {
  color: #555;
}
</style>
