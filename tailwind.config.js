// tailwind.config.js
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      body: ['Potato Sans'],
      alt: ['BebasNeue'],
    },
    backgroundSize: {
      auto: 'auto',
      cover: 'cover',
      contain: 'contain',
      '70%': '70%',
      '50%': '50%',
    },
    borderRadius: {
      none: '0',
      sm: '0.125rem',
      DEFAULT: '0.25rem',
      md: '0.375rem',
      lg: '0.5rem',
      full: '9999px',
      theme: '10px',
    },
    extend: {
      colors: {
        shuttleGray: '#5F6165',
        activeNavElementAlt: '#927522',
        activeNavElement: '#ADD8E6',
        bgNotify: '#DF0000',
        milkWhite: '#FFF8DC', 
        milkCream: '#FAF0E6', 
      },
      scale: {
        '250': '2.5',
        '300': '3',   
        '200': '2.0',
        '180': '1.8',
        '190': '1.9',
      },
      keyframes: {
        scoreAnimation: {
          '0%': { opacity: 1, transform: 'translate(0, 0)' },
          '100%': { opacity: 0, transform: 'translate(var(--tx), var(--ty))' },
        },
        coinAnimation: {
          '0%, 100%': { transform: 'scale(1.5) translateX(0)' },
          '10%, 30%, 50%, 70%': { transform: 'scale(1.6) translateX(-1px)' },
          '20%, 40%, 60%, 80%': { transform: 'scale(1.4) translateX(1px)' },
        },
        swipeRightFadeOut: {
          '0%': { transform: 'translateX(0)', opacity: 1 },
          '100%': { transform: 'translateX(100%)', opacity: 0 },
        },
        catAnimation: {
          '0%': { transform: 'scale(1.25)' },
          '50%': { transform: 'scale(1.29)' },
          '100%': { transform: 'scale(1.25)' },
        },
        fadeInAnimation: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        pulseLightBefore: {
          '0%, 100%': { opacity: 0 },
          '50%': { opacity: 1 },
        },
        pulseLightAfter: {
          '0%, 100%': { transform: 'scale(1)', opacity: 0 },
          '50%': { transform: 'scale(1.5)', opacity: 1 },
        },
        milkWave: {
          '0%, 100%': {
            clipPath: 'polygon(0% 45%, 16% 44%, 33% 50%, 54% 60%, 70% 61%, 84% 59%, 100% 52%, 100% 100%, 0% 100%)',
          },
          '50%': {
            clipPath: 'polygon(0% 60%, 15% 65%, 34% 66%, 51% 62%, 67% 50%, 84% 45%, 100% 46%, 100% 100%, 0% 100%)',
          },
        },
      },
      animation: {
        scoreAnimation: 'scoreAnimation 1s ease-out forwards',
        coinAnimation: 'coinAnimation 0.5s ease-in-out infinite',
        swipeRightFadeOut: 'swipeRightFadeOut 0.5s ease-out forwards',
        catAnimation: 'catAnimation 0.5s ease-in-out forwards',
        fadein: 'fadeInAnimation 0.1s ease-in-out',
        pulseLightBefore: 'pulseLightBefore 2s infinite',
        pulseLightAfter: 'pulseLightAfter 2s infinite',
        milkWave: 'milkWave 3s ease-in-out infinite',
      },
      backgroundImage: {
        'hero-pattern': "url('catApp/catappback1.png')",
      },
      boxShadow: {
        energy:
          'inset 0px -2px 3px 0px #0000005c, inset 0px 2px 3px 0px #ffffff5c;',
        light: '0 0 32px 6px #ffff007a, inset 1px -2px 5px 0 #ffffff8f',
        milk: 'inset 0px -7px 6px 0px #FFF8DC, inset 0px 7px 6px 0px #FAF0E6',
      },

      transform: {
        'rotate-y-180': 'rotateY(180deg)',
      },
    },
  },
  plugins: [],
};
