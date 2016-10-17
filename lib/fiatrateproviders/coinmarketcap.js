var provider = {
  name: 'CoinMarketCap',
  url: 'https://api.coinmarketcap.com/v1/ticker/zcoin/',
  parseFn: function(raw) {
    return [{
      code: 'USD',
      value: raw[0].price_usd,
    }];
  }
};

module.exports = provider;
