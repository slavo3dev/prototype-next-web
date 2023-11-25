module.exports = {
  images: {
    domains: ["assets.coingecko.com"],
  },
  future: {
    webpack5: true,
  },
  webpack: function (config, options) {
    config.experiments = {};
    config.experiments.layers = true;
    return config;
  },
};
