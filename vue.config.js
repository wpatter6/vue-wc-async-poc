const { exec } = require("child_process");

module.exports = {
  chainWebpack: config => {
    config.optimization.delete("splitChunks");
  },
  configureWebpack: {
    plugins: [
      {
        apply(compiler) {
          compiler.hooks.done.tap("copy-dist-plugin", stats =>
            exec("npm run copy-dist", (err, stdout, stderr) => {
              err ? console.error(stderr) : console.log(stdout);
            })
          );
        }
      }
    ]
  },
  filenameHashing: false
};
