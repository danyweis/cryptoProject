<template>
  <div class>
    <br />
    <p>Last hash :</p>
    <div>{{hashInfo}}</div>
    <p>Previous hash :</p>
    <div>{{previousHash}}</div>
    <div class="block">
      <div class="blockIn">
        <p>Block height :</p>
        {{heightInfo}}
      </div>
      <div class="blockIn">
        <p>Block reward in BTC :</p>
        {{blockReward}}
      </div>
    </div>

    <br />
    <hr />
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      urlBitcoin: "https://api-r.bitcoinchain.com/v1/status",
      previousHash: "",
      hashInfo: "",
      heightInfo: "",
      blockReward: "",
      lastBlock: "",
      test: ""
    };
  },
  methods: {
    getBitcoinData: function() {
      fetch(this.urlBitcoin)
        .then(resp => resp.json())
        .then(theData => this.bitcoinHashInfo(theData));
    },
    bitcoinHashInfo: function(data) {
      this.previousHash = data.prev_hash;
      this.hashInfo = data.hash;
      this.blockReward = data.next_block_reward;
      this.heightInfo = data.height;
    }
  },
  created: function() {
    this.getBitcoinData();
  }
};
</script>

  <style>
.block {
  display: flex;
}
.blockIn {
  margin-right: 20px;
}
</style>
