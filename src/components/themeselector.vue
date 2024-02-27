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
    document.documentElement.classList.toggle('dark', themeStatus.value);
    document.documentElement.dataset.theme = themeStatus.value ? editorTheme.dark : editorTheme.light;
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
    theme.value = storedTheme || (themeStatus.value ? 'dark' : 'light');
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
/* The switch - the box around the slider */
.switch {
    display: block;
    --width-of-switch: 3.5em;
    --height-of-switch: 2em;
    /* size of sliding icon -- sun and moon */
    --size-of-icon: 1.4em;
    /* it is like a inline-padding of switch */
    --slider-offset: 0.3em;
    position: relative;
    width: var(--width-of-switch);
    height: var(--height-of-switch);
}

/* Hide default HTML checkbox */
.switch input {
    opacity: 0;
    width: 0;
    height: 0;
}

/* The slider */
.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #f4f4f5;
    transition: 0.4s;
    border-radius: 30px;
}

.slider:before {
    position: absolute;
    content: '';
    height: var(--size-of-icon, 1.4em);
    width: var(--size-of-icon, 1.4em);
    border-radius: 20px;
    left: var(--slider-offset, 0.3em);
    top: 50%;
    transform: translateY(-50%);
    background: linear-gradient(40deg, #ff0080, #ff8c00 70%);
    transition: 0.4s;
}

input:checked + .slider {
    background-color: #303136;
}

input:checked + .slider:before {
    left: calc(100% - (var(--size-of-icon, 1.4em) + var(--slider-offset, 0.3em)));
    background: #303136;
    /* change the value of second inset in box-shadow to change the angle and direction of the moon  */
    box-shadow:
        inset -3px -2px 5px -2px #8983f7,
        inset -10px -4px 0 0 #a3dafb;
}
</style>
