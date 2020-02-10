module.exports = [
  {
    mode: "development",
    entry: "./src/main.ts",
    target: "electron-main",
    module: {
      rules: [
        {
          test: /\.ts$/,
          include: /src/,
          use: [{ loader: "ts-loader" }]
        }
      ]
    },
    output: {
      path: `${__dirname}/dist`,
      filename: "main.js"
    }
  },
  {
    mode: "development",
    entry: "./src/renderer.tsx",
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
    output: {
      path: `${__dirname}/dist`,
      filename: "renderer.js"
    }
  }
];
