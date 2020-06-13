<template>
  <div class="tableFlow">
    <table class="allTimeInfo">
      <caption>All-time info</caption>
      <thead>
        <tr>
          <th>
            <nobr>All-time high</nobr>
          </th>
          <th>
            <nobr>All-time high in %</nobr>
          </th>
          <th>
            <nobr>All-time high date</nobr>
          </th>
          <th>
            <nobr>All-time low</nobr>
          </th>
          <th>
            <nobr>All-time low in %</nobr>
          </th>
          <th>
            <nobr>All-time low date</nobr>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>
            <nobr>{{ '$ ' + coinUrl.market_data.ath.usd }}</nobr>
          </th>
          <th>
            <nobr>{{ Math.round(coinUrl.market_data.ath_change_percentage.usd * 100) / 100 + '%' }}</nobr>
          </th>
          <th>
            <nobr>{{ coinUrl.market_data.ath_date.usd.slice(0,10) }}</nobr>
          </th>
          <th>
            <nobr>{{ '$ ' + coinUrl.market_data.atl.usd }}</nobr>
          </th>
          <th>
            <nobr>{{ Math.round(coinUrl.market_data.atl_change_percentage.usd * 100) / 100 + '%' }}</nobr>
          </th>
          <th>
            <nobr>{{ coinUrl.market_data.atl_date.usd.slice(0,10) }}</nobr>
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
  }
};
</script>

<style>
</style>
