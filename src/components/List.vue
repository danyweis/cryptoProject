<template>
  <!-- Part of the full list of the coins in a table -->
  <div class="tableBox">
    <div class="tableFlow">
      <table>
        <!-- updateDetail is if the switch min/max is swiched -->
        <thead v-if="updateDetail">
          <tr>
            <th>Rank</th>
            <th colspan="3">Name</th>
            <th>Price</th>
            <th>1h</th>
            <th>24h</th>
            <th>24vol</th>
            <th>MCap</th>
          </tr>
        </thead>
        <!-- FOR LOOP  -->
        <tbody v-for="(coin, index) in coins" :key="coin.market_cap_rank">
          <!-- updateDetail switch on min font size  2em -->
          <tr :style="[!updateDetail? {'font-size': '2em'}:{}]">
            <td>
              <nobr>{{ '# ' + (index + 1) }}</nobr>
            </td>
            <!-- @CLICK WE OPEN THE PAGE WITH THE INFO OF THE PARTICULAR INFO -->
            <td @click="whatCoin(coin.id)" class="clickSymbol">{{ coin.symbol.toUpperCase() }}</td>
            <!-- COIN ICON SHOWN IF ON MAX-->
            <td v-if="updateDetail">
              <img class="coinIcon" :src="coin.image" alt="coin icon" />
            </td>
            <!-- @CLICK WE OPEN THE PAGE WITH THE INFO OF THE PARTICULAR INFO -->
            <td @click="whatCoin(coin.id)" class="clickSymbol" v-if="updateDetail">
              <nobr>{{coin.name}}</nobr>
            </td>
            <!-- PRICE -->
            <td>
              <nobr>{{'$' + coin.current_price}}</nobr>
            </td>
            <!-- CHANGE 1H -->
            <td>
              <nobr
                :style="percentageColor(coin.price_change_percentage_1h_in_currency)"
                v-html="showPercentage(coin.price_change_percentage_1h_in_currency)"
              ></nobr>
            </td>
            <!-- CHANGE 24H SHOWN IF ON MAX-->
            <td v-if="updateDetail">
              <nobr
                :style="percentageColor(coin.price_change_percentage_24h)"
                v-html="showPercentage(coin.price_change_percentage_24h)"
              ></nobr>
            </td>
            <!-- VOLUME SHOWN IF ON MAX-->
            <td v-if="updateDetail">
              <nobr>{{ '$ ' + coin.total_volume.toLocaleString() }}</nobr>
            </td>
            <!-- MARKET CAP SHOWN IF ON MAX-->
            <td v-if="updateDetail">
              <nobr>{{ '$ ' + coin.market_cap.toLocaleString()}}</nobr>
            </td>
          </tr>
        </tbody>
      </table>
      <!-- OPEN THE PAGE ABOUT THE INFO OF THE COIN -->
      <coin-info v-if="!coinUrl == ''" :coinUrl="coinUrl" v-on:urlEmpty="coinInfo"></coin-info>
    </div>
  </div>
</template>

<script>
import CoinInfo from "./CoinInfo.vue";
import percentageMixin from "../mixins/precentageMixins.js";

export default {
  props: ["updateDetail"],
  components: {
    coinInfo: CoinInfo
  },
  data: function() {
    return {
      urlGeko:
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h",
      coins: "",
      coinUrl: "",
      language: "?localization=false",
      coinInfoUrl: "https://api.coingecko.com/api/v3/coins/"
    };
  },
  methods: {
    // fetch the data for the next api call for the coins
    coinInfo: function() {
      fetch(this.urlGeko)
        .then(resp => resp.json())
        .then(data => this.coinData(data));
      // .catch((error) => errorMessage(error))
      this.coinUrl = "";
      console.log("Fetch");
    },
    coinData: function(data) {
      this.coins = data;
      console.log(data);
    },

    whatCoin: function(data) {
      fetch(this.coinInfoUrl + data + this.language)
        .then(resp => resp.json())
        .then(data => (this.coinUrl = data));
    }
  },
  mixins: [percentageMixin],
  created: function() {
    this.coinInfo();
  }
};
</script>

<style>
.coinIcon {
  max-height: 20px;
  filter: drop-shadow(1px 1px 1px #d3ebff);
}
.tableBox {
  min-width: 90%;
}
table {
  border-collapse: collapse;
  width: 90%;
  margin-left: 5%;
}
th,
td {
  padding: 10px;
  border-bottom: #f0f8ff30 solid 1px;
}
.clickSymbol:hover {
  cursor: pointer;
  font-weight: bold;
  color: #fff;
  text-decoration: underline;
  /* font-size: 1.05em; */
}
</style>
