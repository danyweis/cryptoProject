<template>
  <div class="tableBox">
    <table>
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
      <tbody v-for="(coin, index) in coins" :key="coin.market_cap_rank">
        <tr :style="[!updateDetail? {'font-size': '2em'}:{}]">
          <!-- <td>{{ '# ' + coin.market_cap_rank }}</td> -->
          <td>{{ '# ' + (index + 1) }}</td>
          <td @click="whatCoin(coin.id)" class="clickSymbol">{{ coin.symbol.toUpperCase() }}</td>
          <td v-if="updateDetail">
            <img class="coinIcon" :src="coin.image" alt="coin icon" />
          </td>
          <td @click="whatCoin(coin.id)" class="clickSymbol" v-if="updateDetail">{{coin.name}}</td>
          <td>{{'$ ' + coin.current_price}}</td>
          <td
            :style="percentageColor(coin.price_change_percentage_1h_in_currency)"
            v-html="showPercentage(coin.price_change_percentage_1h_in_currency)"
          ></td>
          <td
            v-if="updateDetail"
            :style="percentageColor(coin.price_change_percentage_24h)"
            v-html="showPercentage(coin.price_change_percentage_24h)"
          ></td>
          <td v-if="updateDetail">{{ '$ ' + coin.total_volume.toLocaleString() }}</td>
          <td v-if="updateDetail">{{ '$ ' + coin.market_cap.toLocaleString()}}</td>
        </tr>
      </tbody>
    </table>
    <coin-info v-if="!coinUrl == ''" :coinUrl="coinUrl" v-on:urlEmpty="coinInfo"></coin-info>
    <!-- <coin-info v-if="!coinUrl == ''" :coinUrl="coinUrl" v-on:urlEmpty="coinUrl = ''"></coin-info> -->
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
  display: flex;
  justify-content: center;
}
table {
  border-collapse: collapse;
  min-width: 80%;
}
td {
  padding: 5px;
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
