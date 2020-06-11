<template>
  <div class="container">
    <i class="server far fa-dot-circle"></i>
    <head-header :updateDetail="updateDetail"></head-header>

    <nav class="switch">
      <div class="choiceMinMax darkBGFont">
        <p>Max</p>
        <div class="checkBox">
          <div class="checkContainer">
            <input type="checkbox" v-on:change="updateCheckBox" name="minMax" id="minMax" />
            <div class="checkSwitch"></div>
          </div>
        </div>
        <p>Min</p>
      </div>
    </nav>
    <crypto-list :updateDetail="updateDetail"></crypto-list>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import List from "./components/List.vue";

export default {
  data: function() {
    return {
      updateDetail: ""
    };
  },
  components: {
    headHeader: Header,
    cryptoList: List
  },
  methods: {
    updateCheckBox: function(value) {
      this.updateDetail = value.target.checked;
    }
  },
  created: function() {
    updateCheckBox();
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+TC&display=swap");
.container {
  font-family: "Noto Sans TC", sans-serif;
  position: relative;
  color: #d3ebff;
  background-image: linear-gradient(45deg, #032d5e, #001d93, #032d5e);
}
.server {
  font-size: 20px;
  position: absolute;
  top: 2px;
  right: 2px;
}

.switch {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  width: 100%;
}

.choiceMinMax {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  width: 120px;
  margin: 20px 50px;
}

.checkBox {
  width: 50px;
  height: 20px;
  background-color: #0085a9;
  border-radius: 20px;
  -webkit-box-shadow: -2px -2px 3px rgba(255, 255, 255, 0.4) inset,
    2px 2px 3px rgba(0, 0, 0, 0.5) inset;
  box-shadow: -2px -2px 3px rgba(255, 255, 255, 0.4) inset,
    2px 2px 3px rgba(0, 0, 0, 0.5) inset;
  position: relative;
}

#minMax {
  width: 50px;
  height: 25px;
  opacity: 0;
}

.checkSwitch {
  position: absolute;
  top: 1px;
  right: 1px;
  height: 18px;
  width: 18px;
  border-radius: 50%;
  background-color: #001d3e;
  -webkit-box-shadow: -2px -2px 3px rgba(0, 0, 0, 0.6) inset,
    2px 2px 3px 0px rgba(255, 255, 255, 0.6) inset;
  box-shadow: -2px -2px 3px rgba(0, 0, 0, 0.6) inset,
    2px 2px 3px 0px rgba(255, 255, 255, 0.6) inset;
}

#minMax + .checkSwitch {
  -webkit-transform: translateX(-1px);
  transform: translateX(-1px);
  -webkit-transition: linear 150ms;
  transition: linear 150ms;
}

#minMax + .listOfCoinInsideGrid {
  font-size: 5em;
}

#minMax:checked + .checkSwitch {
  -webkit-transform: translateX(-29px);
  transform: translateX(-29px);
  -webkit-transition: linear 150ms;
  transition: linear 150ms;
}
</style>
