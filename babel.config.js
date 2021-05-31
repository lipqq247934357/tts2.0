const isProd = process.env.NODE_ENV === "production";
let p = [];
if (isProd) {
  p = [["transform-remove-console", { exclude: ["error", "warn"] }]];
}
module.exports = {
  presets: [
    [
      "@vue/babel-preset-jsx",
      {
        compositionAPI: true
      }
    ],
    [
      "@vue/cli-plugin-babel/preset",
      {
        jsx: "@vue/babel-preset-jsx"
      }
    ]
  ],
  plugins: p
};