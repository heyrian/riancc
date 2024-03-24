<script setup lang="ts">
    import { onMounted,ref } from 'vue';
    import config from '@config/config.json';

    // 解构你的 config.giscus 对象
    const { switcher, repo, repo_id, category, category_id, dis_title } = config.giscus;
    const comment = ref(null);
    // 创建一个方法用于初始化 Giscus
    const initGiscus = () => {
        const script = document.createElement('script');
        script.src = 'https://giscus.app/client.js';
        script.setAttribute('data-repo', repo);
        script.setAttribute('data-repo-id', repo_id);
        script.setAttribute('data-category', category);
        script.setAttribute('data-category-id', category_id);
        script.setAttribute('data-mapping', dis_title);
        script.setAttribute('data-strict', '0');
        script.setAttribute('data-reactions-enabled', '1');
        script.setAttribute('data-emit-metadata', '0');
        script.setAttribute('data-input-position', 'top');
        script.setAttribute(
            'data-theme',
            localStorage.theme === 'dark' ? 'dark' : localStorage.theme === 'light' ? 'light' : 'preferred_color_scheme'
        );
        script.setAttribute('data-lang', 'en');
        script.setAttribute('data-loading', 'lazy');
        script.crossOrigin = 'anonymous';
        script.async = true;
        comment.value.appendChild(script);
    };

    // 使用 onMounted 生命周期钩子来初始化 Giscus
    onMounted(() => {
        initGiscus();
        window.addEventListener('updateTheme', () => {
            initGiscus();
        });
    });
    
</script>

<template>
    <div v-if="switcher" class="mx-auto prose dark:prose-invert mt-20" ref="comment">
        <!-- Giscus 评论组件的容器 -->
    </div>
</template>