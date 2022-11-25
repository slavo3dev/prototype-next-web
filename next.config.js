module.exports = {
  images: {
    domains: ["assets.coingecko.com"],
  },
  future: {
    webpack5: true,
  },
  webpack: function (config, options) {
    config.experiments = {};
    return config;
  },
};
