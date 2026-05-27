module.exports = {
    entry: {
        bundle: "./scripts/index.js",
        form: "./scripts/form.js"
    },
    output: {
        path: __dirname + "/public",
        filename: "[name].js", // genera bundle.js y form.js
    },
};