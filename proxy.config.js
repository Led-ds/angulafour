const proxy = [
    {
      context: '/WS/rest/',
      target: 'http://192.168.0.184:6060',
      pathRewrite: {'^/api': ''}
    }
  ];
  module.exports = proxy;