const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = [
  {
    entry: "./src/main.ts",
    output: {
      path: `${__dirname}/dist`,
      filename: "main.js"
    },
    target: "electron-main",
    node: {
      __dirname: false,
      __filename: false
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          include: /src/,
          use: [{ loader: "ts-loader" }]
        }
      ]
    }
  },
  {
    entry: "./src/renderer.tsx",
    output: {
      path: `${__dirname}/dist`,
      filename: "renderer.js"
    },
    target: "electron-renderer",
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          include: /src/,
          use: [{ loader: "ts-loader" }]
        }
      ]
    },
    plugins: [
      new HtmlWebPackPlugin({
        title: "Electron TypeScript Handson",
        template: "./src/index.html"
      })
    ]
  }
];
