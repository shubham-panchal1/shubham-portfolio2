// postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {}, // This is the correct way to load Tailwind CSS as a PostCSS plugin for v3+
    autoprefixer: {},
    // If you explicitly added them back, keep these.
    // Otherwise, CRA/react-scripts might add them implicitly.
    // 'postcss-flexbugs-fixes': {},
    // 'postcss-preset-env': {
    //   autoprefixer: {
    //     flexbox: 'no-2009',
    //   },
    //   stage: 3,
    // },
  },
};