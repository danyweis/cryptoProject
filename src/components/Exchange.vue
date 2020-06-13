<template>
  <div class="tableFlow">
    <!-- <div class="legend positionCenter">
      <h3>Trust factor:</h3>
      <i class="green fas fa-check"></i> 75% - 100%
      <i class="yellow fas fa-exclamation"></i> 50% - 74.9%
      <i class="red fas fa-times"></i> 0% - 49.9%
      <i class="orange fas fa-question"></i> No information
    </div>-->
    <table>
      <thead>
        <tr>
          <th>
            <nobr>Exchange</nobr>
          </th>
          <th>
            <nobr>Trading pair</nobr>
          </th>
          <th>
            <nobr>Last Price</nobr>
          </th>
          <th>
            <nobr>Volume</nobr>
          </th>
          <th>
            <nobr>Fee spread</nobr>
          </th>
          <th>
            <nobr>Trading URL</nobr>
          </th>
          <th>
            <nobr>Trusted</nobr>
          </th>
        </tr>
      </thead>
      <tbody v-for="(exchange, index)  in coinUrl.tickers" :key="index">
        <tr>
          <!-- NAME OF THE EXCHANGE -->
          <td>
            <nobr>{{ exchange.market.name }}</nobr>
          </td>
          <!-- THE TRAIDING PAIRS -->
          <td>
            <nobr>{{ exchange.base + '/' + exchange.target }}</nobr>
          </td>
          <!-- LAST PRICE IN TARGET CURRENCY -->
          <td>
            <nobr>{{ exchange.last + " " + exchange.target }}</nobr>
          </td>
          <!-- VOLUME IN BASE CURRENCY -->
          <td>
            <nobr>{{ exchange.volume.toLocaleString() + " " + exchange.base}}</nobr>
          </td>
          <!-- FEE TO PAY -->
          <td>
            <nobr>{{ (Math.round(exchange.bid_ask_spread_percentage * 100) / 100 ) + " %"}}</nobr>
          </td>
          <!-- LNK TO THE TRADING PAIR ON THE EXCHANGE -->
          <td>
            <nobr>
              <a
                v-if="exchange.trade_url"
                :href="exchange.trade_url"
                target="_blank"
              >{{exchange.market.name + ' for ' + exchange.base + '/' + exchange.target}}</a>
              <p v-else>-</p>
            </nobr>
          </td>
          <!-- IF TRUSTED -->
          <th>
            <nobr v-html="trustIcon(exchange.trust_score)"></nobr>
          </th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: ["coinUrl"],
  data: function() {
    return {};
  },
  methods: {
    // trust: function(trusted) {
    //   console.log("now " + trusted);
    //   if (trusted == null) {
    //     return "color: orange";
    //   } else {
    //     return `color: ${trusted}`;
    //   }
    // },

    trustIcon: function(trustIcon) {
      if (trustIcon == "green") {
        return '<i class="green fas fa-check"></i>';
      } else if (trustIcon == "yellow") {
        return '<i class="yellow fas fa-exclamation"></i>';
      } else if (trustIcon == "red") {
        return '<i class="red fas fa-times"></i>';
      } else {
        return '<i class="orange fas fa-question"></i>';
      }
    }
  }
};
</script>

<style>
.green {
  color: green;
}
.yellow {
  color: yellow;
}
.red {
  color: red;
}
.orange {
  color: orange;
}
</style>
