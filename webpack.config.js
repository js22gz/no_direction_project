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