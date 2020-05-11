const path = require('path');                       // paquet permettant l'accès au chemin absolu de l'output
const HtmlWebpackPlugin = require('html-webpack-plugin');  // constructeur appelant le plugin

module.exports = {
    entry: ['babel-polyfill', './src/js/index.js'],  // chemin relatif (./ signifie "dans le dossier courant")
    output: {
        path: path.resolve(__dirname, 'dist'),     // chemin absolu vers l'emplacement de notre fichier de sortie
        filename: 'js/bundle.js'                   // nom standard pour le fichier de sortie
    },
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',                // fichier final (dist/index.html)
            template: './src/index.html'           // fichier de départ
        })
    ],
    module: {                                     // loaders
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
};