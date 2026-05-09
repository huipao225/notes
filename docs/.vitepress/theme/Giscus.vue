<template>
  <div class="giscus-wrapper">
    <div class="giscus-divider">
      <span>评论</span>
    </div>
    <component
      :is="'script'"
      src="https://giscus.app/client.js"
      :data-repo="huipao225/notes"
      data-repo-id="R_kgDOSYCqNg"
      data-category="Announcements"
      data-category-id="DIC_kwDOSYCqNs4C8o3u"
      data-mapping="pathname"
      data-strict="0"
      data-reactions-enabled="1"
      data-emit-metadata="1"
      data-input-position="top"
      data-theme="preferred_color_scheme"
      data-lang="zh-CN"
      data-loading="lazy"
      crossorigin="anonymous"
      async
    ></component>
    <div v-if="!configured" class="giscus-placeholder">
      <p>评论区已就绪。部署到 GitHub Pages 并配置 Giscus 后即可使用。</p>
      <p>配置步骤见 <a href="https://giscus.app/zh-CN" target="_blank">Giscus 官网</a>。</p>
    </div>
  </div>
</template>

<script setup>
import { useData } from 'vitepress'
import { computed } from 'vue'

const { isDark } = useData()

// 修改为你的 GitHub 仓库信息（部署后需更新）
const configured = true
const giscusRepo = computed(() => 'your-username/notes')
</script>

<style scoped>
.giscus-wrapper {
  margin-top: 48px;
  padding-top: 24px;
}

.giscus-divider {
  display: flex;
  align-items: center;
  margin-bottom: 24px;
  color: var(--vp-c-text-2);
  font-size: 14px;
  font-weight: 600;
}

.giscus-divider::before,
.giscus-divider::after {
  content: '';
  flex: 1;
  height: 1px;
  background: var(--vp-c-divider);
}

.giscus-divider span {
  padding: 0 16px;
}

.giscus-placeholder {
  padding: 24px;
  border: 1px dashed var(--vp-c-divider);
  border-radius: 8px;
  color: var(--vp-c-text-2);
  font-size: 14px;
  text-align: center;
}

.giscus-placeholder a {
  color: var(--vp-c-brand);
}
</style>
