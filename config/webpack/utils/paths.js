const path = require("path");
const fs = require("fs");

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
  appBuild: resolveApp("build"),
  appHtml: resolveApp("public/index.html"),
  appIndexJs: resolveApp("src/web/index.js"),
  appNodeModules: resolveApp("node_modules"),
  // custom directories to enable nice-looking absolute paths
  customDirSrc: resolveApp("src"),
  customDirWeb: resolveApp("src/web"),
  appPublic: resolveApp("public"),
};
