module.exports = {
  plugins: {
    autoprefixer: {},
    tailwindcss: {},
    "postcss-preset-env": {
      stage: 3,
      features: {
        "nesting-rules": true,
      },
    },
  },
};