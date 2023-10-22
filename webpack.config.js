const path = require('path');

const outputPath = path.resolve(__dirname, 'dist')

module.exports = {
  entry: './src/index.tsx',
  devtool: 'inline-source-map',
  mode: "development",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    path: outputPath,
    filename: 'main.js',
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 3000,
    contentBase: outputPath
  },
  performance: {
    maxEntrypointSize: 500000,
    maxAssetSize: 500000,
  },
};