const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
//Boa parte do arquivo diz respeito do que eu vou exportar
//Vou exportar o objeto que vai conter conta a configuração que precisa para o projeto

module.exports = {
    entry: './src/index.jsx', //Ponto de entrada
    output: {
        path: __dirname + '/public', //Endereço de saída
        filename: './app.js' //Arquivo de saída
    },
    devServer: {  //Configuração do WebServer
        port: 8080,
        contentBase: './public'
    },
    resolve: {
        extensions: ['', '.js', '.jsx'], //Extensões que o webpack tem que reconhecer,
        alias: { 
            modules: __dirname + '/node_modules' //criar um apelido para node_modules
        }
    },
    plugins: [
        new ExtractTextPlugin('app.css') //Configuração do css. Arquivo que vai gerar
    ],
    module: { //Configuração dos modulos do webpack
        loaders: [{ //configuração dos loaders
            test: /.js[x]?$/, //Pega o tanto arquivos .js quanto .jsx
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react'], //quais são os preset que ele vai aplicar aos arquivos a partir desse loader
                plugins: ['transform-object-rest-spread'] // para usar os 3 pontinhos "..."
            }
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader') //vai passsa por esses outros plugins também
        }, {
            test: /\.woff|.woff2|.ttf|.eot|.svg*.*$/, //para o webpack interprepar fontes
            loader: 'file'
        }]
    }
}