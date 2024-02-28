<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import config from '@config/config.json';

interface ConfigSettings {
    theme_switcher: boolean;
    editorTheme: {
        dark: string;
        light: string;
    };
}

const { theme_switcher, editorTheme }: ConfigSettings = config.settings;
const themeSwitcher = theme_switcher;
const theme = ref('light'); // 預設值
const themeStatus = ref(false)

const updateDocumentClassTheme = () => {
    const path = document.querySelectorAll('.line');
    document.documentElement.classList.toggle('dark', themeStatus.value);
    document.documentElement.dataset.theme = themeStatus.value ? editorTheme.dark : editorTheme.light;
    path.forEach(e=>e.setAttribute("stroke", themeStatus.value ? "white":"black"))
    window.dispatchEvent(new Event('updateTheme'));
};

const switchTheme = () => {
    themeStatus.value ? localStorage.setItem('theme', 'dark'):localStorage.setItem('theme', 'light');
    updateDocumentClassTheme();
};

watch(theme, newValue => {
    themeStatus.value = newValue === 'dark';
    localStorage.setItem('theme', newValue);
    updateDocumentClassTheme();
});

onMounted(() => {
    const storedTheme = localStorage.getItem('theme');
    themeStatus.value = storedTheme === 'dark' || (!storedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);
    const path = document.querySelectorAll('.line');
    path.forEach(e=>e.setAttribute("stroke", themeStatus.value ? "white":"black"))
    updateDocumentClassTheme();
});
</script>

<template>
    <div class="theme-switcher mx-auto" v-if="themeSwitcher">
        <label class="switch">
            <input type="checkbox" v-model="themeStatus" @change="switchTheme" />
            <span class="slider"></span>
        </label>
    </div>
</template>
<style>

</style>
