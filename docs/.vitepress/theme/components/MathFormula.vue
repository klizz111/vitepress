<template>
  <div class="math-formula">
    <div v-if="title" class="formula-title">{{ title }}</div>
    <div class="formula-content" v-html="renderedFormula"></div>
    <div v-if="description" class="formula-description">{{ description }}</div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import katex from 'katex';

const props = defineProps({
  // 公式内容，支持LaTeX语法
  formula: {
    type: String,
    required: true
  },
  // 可选的公式标题
  title: {
    type: String,
    default: ''
  },
  // 可选的公式描述
  description: {
    type: String,
    default: ''
  },
  // 是否居中显示
  centered: {
    type: Boolean,
    default: true
  },
  // 是否使用显示模式(display mode)
  displayMode: {
    type: Boolean,
    default: true
  }
});

const renderedFormula = computed(() => {
  try {
    return katex.renderToString(props.formula, {
      displayMode: props.displayMode,
      throwOnError: false
    });
  } catch (e) {
    console.error('KaTeX渲染错误:', e);
    return `<span style="color: red;">公式渲染错误: ${e.message}</span>`;
  }
});
</script>

<style scoped>
.math-formula {
  margin: 1.5rem 0;
  padding: 0.5rem;
  border-radius: 6px;
  background-color: var(--vp-c-bg-soft);
}

.formula-title {
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.formula-content {
  overflow-x: auto;
}

.formula-content :deep(.katex-display) {
  margin: 0.5rem 0;
}

.formula-description {
  margin-top: 0.5rem;
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
}

/* 当centered为true时应用的样式 */
:deep(.katex-display) {
  display: flex;
  justify-content: center;
}
</style>