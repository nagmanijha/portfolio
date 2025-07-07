/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './index.css',
    './src/**/*.{js,jsx,ts,tsx,vue,html}',
  ],
  safelist: [
    // Custom background elements
    'star',
    'meteor',
    // Animation utilities
    'animate-pulse-subtle',
    'animate-meteor',
    // Dynamic animation delays (adds unit suffix in React style)
    { pattern: /animation-delay/ },
  ],
  theme: {
    extend: {
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':       { transform: 'translateY(-10px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0.8' },
        },
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        meteor: {
          '0%':   { transform: 'rotate(215deg) translateX(0)', opacity: '1' },
          '70%':  { opacity: '1' },
          '100%': { transform: 'rotate(215deg) translateX(-500px)', opacity: '0' },
        },
      },
      animation: {
        'float':            'float 6s ease-in-out infinite',
        'pulse-subtle':     'pulseSubtle 4s ease-in-out infinite',
        'fade-in':          'fadeIn 0.7s ease-out forwards',
        'fade-in-delay-1':  'fadeIn 0.7s ease-out 0.2s forwards',
        'fade-in-delay-2':  'fadeIn 0.7s ease-out 0.4s forwards',
        'fade-in-delay-3':  'fadeIn 0.7s ease-out 0.6s forwards',
        'fade-in-delay-4':  'fadeIn 0.7s ease-out 0.8s forwards',
        'meteor':           'meteor 5s linear infinite',
      },
    },
  },
  plugins: [
    require('tw-animate-css'),
  ],
};
