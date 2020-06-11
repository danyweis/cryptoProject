<template>
  <div class>
    <table class="changes">
      <caption>Change info</caption>
      <thead>
        <tr>
          <th>24h</th>
          <th>7d</th>
          <th>14d</th>
          <th>30d</th>
          <th>60d</th>
          <th>200d</th>
          <th>1year</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th
            :style="percentageColor(coinUrl.market_data.price_change_percentage_24h)"
            v-html="showPercentage(coinUrl.market_data.price_change_percentage_24h)"
          ></th>
          <th
            :style="percentageColor(coinUrl.market_data.price_change_percentage_7d)"
            v-html="showPercentage(coinUrl.market_data.price_change_percentage_7d)"
          ></th>
          <th
            :style="percentageColor(coinUrl.market_data.price_change_percentage_14d)"
            v-html="showPercentage(coinUrl.market_data.price_change_percentage_14d)"
          ></th>
          <th
            :style="percentageColor(coinUrl.market_data.price_change_percentage_30d)"
            v-html="showPercentage(coinUrl.market_data.price_change_percentage_30d)"
          ></th>
          <th
            :style="percentageColor(coinUrl.market_data.price_change_percentage_60d)"
            v-html="showPercentage(coinUrl.market_data.price_change_percentage_60d)"
          ></th>
          <th
            :style="percentageColor(coinUrl.market_data.price_change_percentage_200d)"
            v-html="showPercentage(coinUrl.market_data.price_change_percentage_200d)"
          ></th>
          <th
            :style="percentageColor(coinUrl.market_data.price_change_percentage_1y)"
            v-html="showPercentage(coinUrl.market_data.price_change_percentage_1y)"
          ></th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import percentageMixin from "../mixins/precentageMixins.js";

export default {
  props: ["coinUrl"],
  data: function() {
    return {};
  },

  mixins: [percentageMixin]
};
</script>

<style>
</style>
