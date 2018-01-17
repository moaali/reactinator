module.exports = {
  test    : /\.(js|jsx)$/,
  exclude : /(node_modules|public\/)/,
  use     : ['babel-loader'],
};
