module.exports = {
    entry: {
        bundle: "./scripts/index.js",
        form: "./scripts/form.js",
        search: "./scripts/search_bar.js",
        delete: "./scripts/delete_movie.js",
        edit: "./scripts/edit.js"
    },
    output: {
        path: __dirname + "/public",
        filename: "[name].js", // genera bundle.js y form.js
    },
};

// Si agrego un entry, tengo que compilar (comando: npx webpack)