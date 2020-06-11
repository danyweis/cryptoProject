<template>
  <div class>
    <table class="allTimeInfo">
      <caption>All-time info</caption>
      <thead>
        <tr>
          <th>All-time high *</th>
          <th>All-time high in %</th>
          <th>All-time high date</th>
          <th>All-time low *</th>
          <th>All-time low in %</th>
          <th>All-time low date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>{{ '$ ' + coinUrl.market_data.ath.usd }}</th>
          <th>{{ Math.round(coinUrl.market_data.ath_change_percentage.usd * 100) / 100 + '%' }}</th>
          <th>{{ coinUrl.market_data.ath_date.usd.slice(0,10) }}</th>
          <th>{{ '$ ' + coinUrl.market_data.atl.usd }}</th>
          <th>{{ Math.round(coinUrl.market_data.atl_change_percentage.usd * 100) / 100 + '%' }}</th>
          <th>{{ coinUrl.market_data.atl_date.usd.slice(0,10) }}</th>
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
