<template>
  <div class="infoPage">
    <div class="informationBox">
      <div class="close" @click="$emit('urlEmpty')">
        <i class="far fa-times-circle"></i>
      </div>

      <div class="topRow">
        <div class="leftInfo">
          <img :src="coinUrl.image.large" :alt="coinUrl.name + ' logo'" class="logo" />
          <div class="nameDetails">
            <div class="name">
              <h2>{{ coinUrl.name }}</h2>
            </div>
            <div
              class="shortName"
            >{{'(' + coinUrl.symbol.toUpperCase() + ') ' + coinUrl.categories[0]}}</div>
            <div class="algo" v-if="coinUrl.hashing_algorithm">
              <div class="algorithm">{{ 'Hashing Algorithm: ' + coinUrl.hashing_algorithm }}</div>
              <div v-if="coinUrl.block_time_in_minutes" class="blockTime">
                {{
                ' Block time: ' + coinUrl.block_time_in_minutes + ' min'
                }}
              </div>
            </div>
          </div>
        </div>
        <div class="rightInfo">
          <div class="priceBlockCoinInfo">
            <div class="price">{{ '$ ' + coinUrl.market_data.current_price.usd}}</div>
          </div>
        </div>
      </div>
      <div>
        <div class="lowHigh">
          <div class="low">{{'24h low: $ ' + coinUrl.market_data.low_24h.usd }}</div>

          <div class="high">{{ '24h high: $ ' + coinUrl.market_data.high_24h.usd }}</div>
          <div class="flex">
            24h:
            <div
              class="percentage"
              :style="percentageColor(coinUrl.market_data.price_change_percentage_24h)"
              v-html="showPercentage(coinUrl.market_data.price_change_percentage_24h)"
            ></div>
          </div>
          <div class="flex">
            24h:
            <div
              :style="percentageColor(coinUrl.market_data.price_change_24h_in_currency.usd)"
            >{{' $ ' + coinUrl.market_data.price_change_24h_in_currency.usd }}</div>
          </div>
        </div>
      </div>

      <hr />
      <all-time :coinUrl="coinUrl"></all-time>

      <hr />
      <changes-info :coinUrl="coinUrl"></changes-info>
      <hr />
      <activety-info :coinUrl="coinUrl"></activety-info>
      <hr />
      <dev-data-info :coinUrl="coinUrl"></dev-data-info>
      <hr />
      <button class="exchange">Exchange Info</button>
      <i class="arrow fas fa-sort-down"></i>
    </div>
  </div>
</template>

<script>
import AllTime from "./AllTime.vue";
import Changes from "./Change.vue";
import Activety from "./Activety.vue";
import DevData from "./GithubInfo.vue";
import percentageMixin from "../mixins/precentageMixins.js";

export default {
  props: ["coinUrl"],
  data: function() {
    return {};
  },
  components: {
    allTime: AllTime,
    changesInfo: Changes,
    activetyInfo: Activety,
    devDataInfo: DevData
  },
  methods: {
    getCoinData: function() {
      fetch(coinUrl)
        .then(resp => reso.json())
        .then(data => console.log(data));
    }
  },
  mixins: [percentageMixin]
};
</script>

<style>
.infoPage {
  position: fixed;
  height: 100vh;
  width: 100%;
  top: 0;
  background-color: #00000070;
  /* color: black; */
}
.informationBox {
  height: 95%;
  width: 95%;
  background-image: linear-gradient(45deg, #032d5e, #001d93, #032d5e);

  margin: 2.5%;
  border-radius: 10px;
  position: relative;
  padding: 15px;
  overflow: auto;
}
.close {
  position: absolute;
  top: 5px;
  right: 5px;
  line-height: 100%;
  font-size: 20px;
  cursor: pointer;
}
.topRow {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: baseline;
}
.logo {
  height: 150px;
  margin-right: 20px;
  filter: drop-shadow(#ffffff70 2px 2px 3px);
}
.leftInfo {
  display: flex;
  align-items: baseline;
}
.rightInfo {
  margin-right: 20px;
}
.name {
  font-size: 2em;
}
.shortName {
  font-size: 1.2em;
}

.allTimeInfo,
.changes {
  width: 90%;
  margin: 20px 5%;
}
.flex {
  display: flex;
}
.lowHigh {
  margin: 25px 5px;
  display: flex;
  justify-content: space-evenly;
}

.priceBlockCoinInfo {
  display: flex;
  align-items: center;
}

.price {
  font-size: 2em;
}
.changePriceCoinInfo {
  margin-left: 10px;
}
caption {
  margin-bottom: 20px;
  font-size: 1.3em;
}
th {
  padding: 5px;
}
.exchange {
  padding: 10px;
  margin: 10px;
  font-size: 1.4em;
  background: transparent;
  border: none;
  color: #d3ebff;
  outline: 0;
}
.exchange:hover {
  color: #fff;
  text-decoration: underline;
}
.arrow {
  font-size: 1.4em;
}
</style>
