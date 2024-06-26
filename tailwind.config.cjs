/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
const config = require('./src/config/config.json');

module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Noto Sans CJK TC', 'Noto Sans TC', ...defaultTheme.fontFamily.sans],
        mono: [...defaultTheme.fontFamily.mono],
        serif: [...defaultTheme.fontFamily.serif],
			},
      height: {
        'logo': `${config.site.logo_height}px`,
        'mlogo':`${config.site.mlogo_height}px`,
      },
      width: {
        'logo': `${config.site.logo_width}px`,
        'mlogo':`${config.site.mlogo_width}px`,
      },
      typography: {
        lg:{
          css: {
            h2:{
              'margin': '1.5rem 0'
            },
            h3:{
              'margin': '1rem 0'
            },
            ul:{
              'margin': '0.5rem 0'
            }
          },
        },
        DEFAULT: {
          css: {
            'h2':{
              'margin-top': '10px'
            },
            'h2 code':{
              'color': 'black'
            },
            'h3 code':{
              'color': 'black'
            },
            'code':{
              'background': '#d3cedd',
              'border-radius': '4.8px',
              'padding': '4px 6px',
              'border': '0.1px solid #a29baf',
              'color': 'black'
            },
            'code::before': {
              content: 'none',
            },
            'code::after': {
              content: 'none',
            },
          },
        },
      },
		},
	},
	plugins: [
    function ({ addComponents }) {
      addComponents({
        '.article': {
          '::selection': {
            'background-color': '#a29baf',
            'color': '#fff',
          },
          'a': {
            'background-image': 'linear-gradient(transparent 70%, #a29baf 0)',
            'text-decoration': 'none',
          },
        },
      });
    },
    require("@tailwindcss/typography"),
    require('tailwindcss-fluid-type')({
      // your fluid type settings
      // works only with unitless numbers
      // This numbers are the defaults settings
      settings: {
        fontSizeMin: 1.125, // 1.125rem === 18px
        fontSizeMax: 1.25, // 1.25rem === 20px
        ratioMin: 1.125, // Multiplicator Min
        ratioMax: 1.2, // Multiplicator Max
        screenMin: 20, // 20rem === 320px
        screenMax: 96, // 96rem === 1536px
        unit: 'rem', // default is rem but it's also possible to use 'px'
        prefix: '', // set a prefix to use it alongside the default font sizes
        extendValues: true, // When you set extendValues to true it will extend the default values. Set it to false to overwrite the values.
      },
      // Creates the text-xx classes
      // This are the default settings and analog to the tailwindcss defaults
      // Each `lineHeight` is set unitless and we think that's the way to go especially in context with fluid type.
      values: {
        xs: [-2, 1.6],
        sm: [-1, 1.6],
        base: [0, 1.6],
        lg: [1, 1.6],
        xl: [2, 1.5],
        '2xl': [3, 1.5],
        '3xl': [4, 1.5],
        '4xl': [5, 1.5],
        '5xl': [6, 1.5],
        '6xl': [7, 1.5],
        '7xl': [8, 1.5],
        '8xl': [9, 1.5],
        '9xl': [10, 1.5],
      },
    }),
    require.resolve("prettier-plugin-astro")],
	darkMode: "class",
};