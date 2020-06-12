<template>
  <div class="devBox">
    <h2 class="devHeader">Developer Information</h2>
    <div class="developmentInfo">
      <div class="dataLeft">
        <div class="dev">
          <span>Forks :</span>
          <span>{{ coinUrl.developer_data.forks }}</span>
        </div>
        <div class="dev">
          <span>Stars :</span>
          <span>{{ coinUrl.developer_data.stars }}</span>
        </div>
        <div class="dev">
          <span>Watches :</span>
          <span>{{ coinUrl.developer_data.subscribers }}</span>
        </div>
        <div class="dev">
          <span>Total Issues :</span>
          <span>{{ coinUrl.developer_data.total_issues }}</span>
        </div>
      </div>
      <div class="dataRight">
        <div class="dev">
          <span>Closed Issues :</span>
          <span>{{ coinUrl.developer_data.closed_issues }}</span>
        </div>
        <div class="dev">
          <span>Merged pull requests :</span>
          <span>{{ coinUrl.developer_data.pull_requests_merged }}</span>
        </div>
        <div class="dev">
          <span>Contributors :</span>
          <span>{{ coinUrl.developer_data.pull_request_contributors }}</span>
        </div>
        <div class="dev">
          <span>4 Weeks Commits :</span>
          <span>{{ coinUrl.developer_data.commit_count_4_weeks }}</span>
        </div>
      </div>
    </div>
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
.developmentInfo {
  width: 90%;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
.dataLeft,
.dataRight {
  line-height: 200%;
  width: 40%;
  margin: 10px 20px;
}
.dev {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.devHeader {
  text-align: center;
}
.devBox {
  padding: 20px;
}
</style>
