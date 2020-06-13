<template>
  <!-- CHANGE OF THE COIN -->
  <div class="tableFlow">
    <table>
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
          <th>
            <nobr
              :style="percentageColor(coinUrl.market_data.price_change_percentage_24h)"
              v-html="showPercentage(coinUrl.market_data.price_change_percentage_24h)"
            ></nobr>
          </th>
          <th>
            <nobr
              :style="percentageColor(coinUrl.market_data.price_change_percentage_7d)"
              v-html="showPercentage(coinUrl.market_data.price_change_percentage_7d)"
            ></nobr>
          </th>
          <th>
            <nobr
              :style="percentageColor(coinUrl.market_data.price_change_percentage_14d)"
              v-html="showPercentage(coinUrl.market_data.price_change_percentage_14d)"
            ></nobr>
          </th>
          <th>
            <nobr
              :style="percentageColor(coinUrl.market_data.price_change_percentage_30d)"
              v-html="showPercentage(coinUrl.market_data.price_change_percentage_30d)"
            ></nobr>
          </th>
          <th>
            <nobr
              :style="percentageColor(coinUrl.market_data.price_change_percentage_60d)"
              v-html="showPercentage(coinUrl.market_data.price_change_percentage_60d)"
            ></nobr>
          </th>
          <th>
            <nobr
              :style="percentageColor(coinUrl.market_data.price_change_percentage_200d)"
              v-html="showPercentage(coinUrl.market_data.price_change_percentage_200d)"
            ></nobr>
          </th>
          <th>
            <nobr
              :style="percentageColor(coinUrl.market_data.price_change_percentage_1y)"
              v-html="showPercentage(coinUrl.market_data.price_change_percentage_1y)"
            ></nobr>
          </th>
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
