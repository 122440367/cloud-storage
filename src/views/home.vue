<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'BfMain',
  setup() {
    const router = useRouter()

    function onLogin() {
      // 跳转到登录页
      router.push({ path: '/login' })
    }

    function onRegister() {
      // 跳转到注册页
      console.log('home onRegister')
      router.push({ path: '/register' })
    }

    return { onLogin, onRegister }
  }
})
</script>

<template>
  <div class="login-page">
    <h1>欢迎来到Cloud Storage，请先</h1>

    <div class="actions">
      <button class="btn primary" type="button" @click="onLogin">登录</button>
      <button class="btn secondary" type="button" @click="onRegister">注册</button>
    </div>
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
  margin: 0 0 16px 0;
}

.actions {
  display: flex;
  gap: 12px;
  margin-top: 8px;
}

.btn {
  padding: 10px 18px;
  border-radius: 6px;
  border: 1px solid transparent;
  cursor: pointer;
  font-size: 14px;
}

.btn.primary {
  background-color: #409eff;
  color: #fff;
}

.btn.primary:hover {
  background-color: #66b1ff;
}

.btn.secondary {
  background-color: transparent;
  color: #409eff;
  border-color: #409eff;
}

.btn.secondary:hover {
  background-color: rgba(64, 158, 255, 0.08);
}
</style>
