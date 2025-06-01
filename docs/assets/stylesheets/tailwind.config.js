// tailwind.config.js
module.exports = {
content: [],
// important: '.tw', // 🔥 Scope all Tailwind utilities to `.tw`
theme: {
    safelist: [
        'animate-fadeInSlideInLeft',
        'animate-fadeInSlideInRight',
        'opacity-0',
        'opacity-100'
    ],
    extend: {
    colors: {
        text: 'var(--md-default-fg-color)',
        background: 'var(--md-default-bg-color)',
        codebg: 'var(--md-code-bg-color)',
        
        md: {
        primary: {
            fg: {
            DEFAULT: primaryFgColor,
            light: primaryFgVariants.light,
            lighter: primaryFgVariants.lighter,
            lightest: primaryFgVariants.lightest,
            dark: primaryFgVariants.dark,
            darker: primaryFgVariants.darker,
            darkest: primaryFgVariants.darkest,
            },
            bg: {
            DEFAULT: primaryBgColor,
            light: primaryBgVariants.light,
            lighter: primaryBgVariants.lighter,
            lightest: primaryBgVariants.lightest,
            dark: primaryBgVariants.dark,
            darker: primaryBgVariants.darker,
            darkest: primaryBgVariants.darkest,
            },
        },

        accent: {
            bg: {
            DEFAULT: accentBgColor,
            light: accentBgVariants.light,
            lighter: accentBgVariants.lighter,
            lightest: accentBgVariants.lightest,
            dark: accentBgVariants.dark,
            darker: accentBgVariants.darker,
            darkest: accentBgVariants.darkest,
            },
            fg: {
            DEFAULT: accentFgColor,
            light: accentFgVariants.light,
            lighter: accentFgVariants.lighter,
            lightest: accentFgVariants.lightest,
            dark: accentFgVariants.dark,
            darker: accentFgVariants.darker,
            darkest: accentFgVariants.darkest,
            }
        },

        default: {
            bg: {
            DEFAULT: defaultBgColor,
            light: 'var(--md-default-bg-color--light)',
            lighter: 'var(--md-default-bg-color--lighter)',
            lightest: 'var(--md-default-bg-color--lightest)',
            dark: defaultBgVariants.dark,
            darker: defaultBgVariants.darker,
            darkest: defaultBgVariants.darkest,
            },
            fg: {
            DEFAULT: defaultFgColor,
            light: 'var(--md-default-fg-color--light)',
            lighter: 'var(--md-default-fg-color--lighter)',
            lightest: 'var(--md-default-fg-color--lightest)',
            dark: defaultFgVariants.dark,
            darker: defaultFgVariants.darker,
            darkest: defaultFgVariants.darkest,
            }
        },
        },
    },
    keyframes: {
    fadeInSlideInLeft: {
        '0%': { opacity: '0', transform: 'translateX(-40px)' },
        '100%': { opacity: '1', transform: 'translateX(0)' },
    },
    fadeInSlideInRight: {
        '0%': { opacity: '0', transform: 'translateX(+40px)' },
        '100%': { opacity: '1', transform: 'translateX(0)' },
    },
    fadeInSlideInUp1: {
        '0%': { opacity: '0', transform: 'translateY(+40px)' },
        '100%': { opacity: '1', transform: 'translateY(0)' },
    },
    fadeInSlideInUp2: {
        '0%': { opacity: '0', transform: 'translateY(+20px)' },
        '100%': { opacity: '1', transform: 'translateY(0)' },
    },
    fadeInSlideInUp1Delay: {
        '0%': { opacity: '0', transform: 'translateY(+40px)' },
        '50%': { opacity: '0', transform: 'translateY(+40px)' },
        '100%': { opacity: '1', transform: 'translateY(0)' },
    },
    },
    animation: {
        fadeInSlideInLeft: 'fadeInSlideInLeft 0.8s ease-out forwards',
        fadeInSlideInRight: 'fadeInSlideInRight 0.8s ease-out forwards',
        fadeInSlideInUp1: 'fadeInSlideInUp1 1.6s ease-out forwards',
        fadeInSlideInUp2: 'fadeInSlideInUp1 1.6s ease-out forwards',
        fadeInSlideInUp1Delay1: 'fadeInSlideInUp1Delay 3.2s ease-out forwards',
        fadeInSlideInUp1Delay2: 'fadeInSlideInUp1Delay 4.8s ease-out forwards',
    },
    },
plugins: [],
},
}