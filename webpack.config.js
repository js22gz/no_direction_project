/*
  "scripts": {
    "start": "webpack-dev-server --hot --progress --colors",
    "build": "webpack --progress --colors"
  },
*/
/*
   "scripts": {
        "build": "browserify --debug -t [reactify --es6] src/index.js > bundle.js"
    },
*/

var webpack = require('webpack');  
var path = require('path');

module.exports = {

  entry: {
    js: "./src/index",
    html: "./index.html"
  },
    output: {
        filename: "bundle.js"
    },
module: {
     loaders: [
      {
        test: /.js?$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
            {
        test: /\.html$/,
        loader: "file?name=[name].[ext]",
      },

    ]
}
};