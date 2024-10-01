const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "~": path.resolve(__dirname, "src"),
    },
  },
  devServer: {
    // Disable error overlay on dev
    client: {
      overlay: false,
    },
  },
  output: {
    publicPath: "/",
  },
};
