module.exports = {
  entry: './src/index.js',
  output: {
    filename: "download.min.js",
    library: 'download',
    libraryTarget: "umd",
    globalObject: "this",
    libraryExport: "default"
  }
}
