module.exports = {
    entry: {
        bundle: "./scripts/index.js",
        form: "./scripts/form.js",
        search_bar: "./scripts/search_bar.js",
        delete: "./scripts/delete_movie.js",
        edit: "./scripts/edit.js"
    },
    output: {
        path: __dirname + "/public",
        filename: "[name].js", // genera bundle.js y form.js
    },
};

// No olvidarse compilar cada vez que toque un script (comando: npx webpack)