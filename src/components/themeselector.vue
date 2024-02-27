<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import config from '@config/config.json';

interface ConfigSettings {
    theme_switcher: boolean;
}

const { theme_switcher }: ConfigSettings = config.settings;
const themeSwitcher = theme_switcher;
const theme = ref('light'); // 預設值
const themeStatus = ref(false)

const updateDocumentClassTheme = () => {
    if (themeStatus.value ||
        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
};

const switchTheme = (event: Event) => {
    const target = event.target as HTMLSelectElement;
    const newValue = target;
    if (newValue) {
        localStorage.setItem('theme', 'dark');
    } else if (!newValue) {
        localStorage.setItem('theme', 'light');
    } else {
        localStorage.removeItem('theme');
    }
    updateDocumentClassTheme();
};

watch(theme, newValue => {
    if (newValue === 'system') {
        localStorage.removeItem('theme');
    } else {
        localStorage.setItem('theme', newValue);
    }
    updateDocumentClassTheme();
});

onMounted(() => {
    theme.value = localStorage.getItem('theme') || 'light';
    updateDocumentClassTheme();
});
</script>

<template>
    <div class="theme-switcher" v-if="themeSwitcher">
        <label class="switch">
            <input type="checkbox" v-model="themeStatus" @change="switchTheme($event)" />
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
