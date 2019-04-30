const { exec } = require("child_process");

module.exports = {
  chainWebpack: config => {
    config.optimization.delete("splitChunks");
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": "src"
      }
    },
    plugins: [
      {
        apply(compiler) {
          compiler.hooks.done.tap("copy-dist-plugin", stats =>
            exec("npm run copy-dist")
          );
        }
      }
    ]
  },
  filenameHashing: false
};
