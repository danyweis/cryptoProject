<template>
  <div class="">
    <table>
      <thead>
        <tr>
          <th>Rank</th>
          <th>Name</th>
          <th>Price</th>
          <th>1h</th>
          <th>24h</th>
          <th>24vol</th>
          <th>MCap</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(coin, index) in coins">
          <th>{{ coin.market_cap_rank }}</th>
          <th>Name</th>
          <th>Price</th>
          <th>1h</th>
          <th>24h</th>
          <th>24vol</th>
          <th>MCap</th>
        </tr>
      </tbody>
    </table>

    <!-- <div class="coinInfo">
      <div class="maximalInfo headOfList">
        <div class="headOfListLink">
          <a href="#" class="rank">#</a>
        </div>
        <div class="headOfListLink">
          <a href="#" class="name">Name</a>
        </div>
        <div class="headOfListLink">
          <a href="#" class="price">Price</a>
        </div>
        <div class="headOfListLink">
          <a href="#" class="change1h">1h</a>
        </div>
        <div class="headOfListLink">
          <a href="#" class="change24">24h</a>
        </div>
        <div class="headOfListLink">
          <a href="#" class="vol24">24h vol</a>
        </div>
        <div class="headOfListLink">
          <a href="#" class="marketCap">Market Cap</a>
        </div>
      </div>
      <div class="test">
        <div class="listOfCoin">
          <div class="listOfCoinInsideGrid">
            <p class="rank">#</p>
          </div>
          <div class="listOfCoinInsideGrid listOfCoinInsideGridName minim">
            <a href="#" class="symbol">BTC</a>
            <img src="" alt="" class="maximalInfo coinIMG" />
            <a href="#" class="coinName maximalInfo">Bitcoin</a>
          </div>
          <div class="listOfCoinInsideGrid">
            <p class="price">Price</p>
          </div>
          <div class="listOfCoinInsideGrid">
            <p class="change1h">1h</p>
          </div>
          <div class="listOfCoinInsideGrid maximalInfo">
            <p class="change24">24h</p>
          </div>
          <div class="listOfCoinInsideGrid maximalInfo">
            <p class="vol24">24h vol</p>
          </div>
          <div class="listOfCoinInsideGrid maximalInfo">
            <a href="#" class="coinMarketCap">Market Cap</a>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      urlGeko:
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h',
      coins: '',
    }
  },
  methods: {
    // fetch the data for the next api call for the coins
    coinInfo: function() {
      fetch(this.urlGeko)
        .then((resp) => resp.json())
        .then((data) => this.coinData(data))
      // .catch((error) => errorMessage(error))
    },
    coinData: function(data) {
      this.coins = data
      console.log(data)
    },
  },
  created: function() {
    this.coinInfo()
  },
}
</script>

<style></style>
