module.exports = {
  images: {
    domains: ['assets.coingecko.com'],
  },
    webpack: (config, { isServer }) => {
      // Fixes npm packages that depend on `fs` module
      if (!isServer) {
        config.node = {
          fs: 'empty',
          net: 'empty'
        }
      }
  
      return config
    }
  }