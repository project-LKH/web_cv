const webpack = require("webpack");
const path = require("path");

module.exports = {
    mode: "production",
    entry: { main: path.resolve(__dirname, "src", "script.js") },
    output: {
        path: path.resolve(__dirname, "build"),
    },
};