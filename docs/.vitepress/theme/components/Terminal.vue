<template>
  <div class="terminal">
    <div class="terminal-header">
      <div class="terminal-button red"></div>
      <div class="terminal-button yellow"></div>
      <div class="terminal-button green"></div>
    </div>
    <div class="terminal-content">
      <pre class="terminal-text"><slot /></pre>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const terminalText = ref(null);

onMounted(() => {
  if (terminalText.value) {
    // 获取内部的HTML内容
    const content = terminalText.value.innerHTML;
    // 分割每行
    const lines = content.split('\n');
    // 重新拼接为HTML
    terminalText.value.innerHTML = lines.join('<br>');
  }
});
</script>

<style scoped>
.terminal {
  background-color: #2d2d2d;
  border-radius: 6px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.3);
  margin: 20px 0;
  overflow: hidden;
  width: 100%;
}

.terminal-header {
  background-color: #424242;
  padding: 10px;
  display: flex;
  gap: 6px;
}

.terminal-button {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.red { background-color: #FF5F56; }
.yellow { background-color: #FFBD2E; }
.green { background-color: #27C93F; }

.terminal-content {
  padding: 15px;
  color: #fff;
  font-family: monospace;
  overflow-x: auto;
}

.terminal-text {
  margin: 0;
  word-wrap: break-word;
  overflow-wrap: break-word;
  max-width: 100%;
  font-size: 14px;
  line-height: 1.5;
  background-color: transparent;
  border: none;
  white-space: pre-wrap;
}
</style>