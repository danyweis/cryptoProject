<template>
  <div class="header">
    <div class="tableFlow">
      <table id="headerData">
        <tr>
          <th>
            <nobr>
              Market Cap:
              <span>{{ ' $ ' + global.market_cap_usd.toLocaleString() }}</span>
              <span
                class
                :style="percentageColor(global.market_cap_change_24h)"
                v-html="showPercentage(global.market_cap_change_24h)"
              ></span>
            </nobr>
          </th>
          <th v-if="updateDetail">
            <nobr>
              24h Vol:
              <span>{{ ' $ ' + global.volume_24h_usd.toLocaleString() }}</span>
              <span
                :style="percentageColor(global.volume_24h_change_24h)"
                v-html="showPercentage(global.volume_24h_change_24h)"
              ></span>
            </nobr>
          </th>
          <th>
            <nobr>
              BTC Dominance:
              <span>{{ global.bitcoin_dominance_percentage + ' % ' }}</span>
            </nobr>
          </th>
          <th v-if="updateDetail">
            <nobr>
              Market Cap ATH:
              <span>{{ ' $ ' + global.market_cap_ath_value.toLocaleString() }}</span>
            </nobr>
          </th>
        </tr>
      </table>
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
        .catch(error => this.errorMessage(error));
    },
    globalInfo: function(data) {
      this.global = data;
      console.log(this.global);
    },
    errorMessage: function(err) {
      console.error(err);
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
#headerData {
  width: 100%;
  margin-left: 0;
}
</style>
