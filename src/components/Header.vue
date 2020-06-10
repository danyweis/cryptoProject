<template>
  <div class="headerData">
    <div class="minimumInfo marketCapUSD darkBGFont">
      Market Cap:
      <span class="marketCapUSDValue neutralFont">
        {{ '$' + global.market_cap_usd.toLocaleString() }}
      </span>
      <span class="" :style="percentageColor(global.market_cap_change_24h)">
        {{ global.market_cap_change_24h + '%' }}
      </span>
    </div>

    <div class="minimalInfo vol24usd darkBGFont">
      24h Vol:
      <span class="vol24Value neutralFont">
        {{ '$' + global.volume_24h_usd.toLocaleString() }}
      </span>
      <span
        class="vol24changeValue"
        :style="percentageColor(global.volume_24h_change_24h)"
      >
        {{ global.volume_24h_change_24h + '%' }}
      </span>
    </div>

    <div class="minimumInfo btcDominance darkBGFont">
      BTC Dominance:
      <span class="btcDominanceValue neutralFont">
        {{ global.bitcoin_dominance_percentage + '%' }}
      </span>
    </div>

    <div class="minimumInfo neutralFont serverResponse">
      <i class="far fa-dot-circle"></i>
    </div>

    <div class="maximalInfo marketCapATH darkBGFont">
      Market Cap ATH:
      <span class="marketCapATHValue neutralFont">
        {{ '$' + global.market_cap_ath_value.toLocaleString() }}
      </span>
    </div>

    <div class="">
      <i class="far fa-dot-circle"></i>
    </div>
    <theNav @updateC="dataR"></theNav>
  </div>
</template>

<script>
import Nav from './Nav.vue'
export default {
  components: {
    theNav: Nav,
  },
  data: function() {
    return {
      globalURL: 'https://api.coinpaprika.com/v1/global',
      global: '',
    }
  },
  methods: {
    getGlobalData: function() {
      // fetch general data from coinpaprika
      fetch(this.globalURL)
        .then((resp) => resp.json())
        .then((globalMarketData) => this.globalInfo(globalMarketData))
        // throw an error if server issue
        .catch((error) => errorMessage(error))
    },
    globalInfo: function(data) {
      this.global = data
      console.log(this.global)
    },
    percentageColor: function(percentage) {
      if (percentage < 0) {
        return 'color: #f4200b'
      } else {
        return 'color: #00ff3b'
      }
    },
    dataR: function(value) {
      alert(value)
    },
  },
  created: function() {
    this.getGlobalData()
  },
}
</script>

<style>
.headerData {
  display: flex;
  justify-content: space-evenly;
}

.far {
  height: 30px;
  width: 30px;
  font-size: 30px;
  color: aliceblue;
}
</style>
