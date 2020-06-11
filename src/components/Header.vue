<template>
  <div class="header">
    <div class="headerData">
      <div>
        Market Cap:
        <span>{{ '$' + global.market_cap_usd.toLocaleString() }}</span>
        <span
          class
          :style="percentageColor(global.market_cap_change_24h)"
          v-html="showPercentage(global.market_cap_change_24h)"
        ></span>
      </div>

      <div v-if="updateDetail">
        24h Vol:
        <span>{{ '$' + global.volume_24h_usd.toLocaleString() }}</span>
        <span
          :style="percentageColor(global.volume_24h_change_24h)"
          v-html="showPercentage(global.volume_24h_change_24h)"
        ></span>
      </div>

      <div>
        BTC Dominance:
        <span>{{ global.bitcoin_dominance_percentage + '%' }}</span>
      </div>

      <div v-if="updateDetail">
        Market Cap ATH:
        <span>{{ '$' + global.market_cap_ath_value.toLocaleString() }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import percentageMixin from "../mixins/precentageMixins.js";

export default {
  props: ["updateDetail"],
  components: {},
  data: function() {
    return {
      globalURL: "https://api.coinpaprika.com/v1/global",
      global: ""
    };
  },
  methods: {
    getGlobalData: function() {
      // fetch general data from coinpaprika
      fetch(this.globalURL)
        .then(resp => resp.json())
        .then(globalMarketData => this.globalInfo(globalMarketData))
        // throw an error if server issue
        .catch(error => errorMessage(error));
    },
    globalInfo: function(data) {
      this.global = data;
      console.log(this.global);
    }
  },
  mixins: [percentageMixin],
  created: function() {
    this.getGlobalData();
  },
  mounted: function() {
    console.log("yes");
    console.log(this.updateDetail);
  }
};
</script>

<style>
.headerData {
  display: flex;
  justify-content: space-evenly;
}
</style>
