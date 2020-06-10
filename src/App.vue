<template>
  <div class="container">
    <headHeader></headHeader>
    <navHeader></navHeader>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Nav from './components/Nav.vue'

export default {
  data: function() {
    return {}
  },
  components: {
    headHeader: Header,
    navHeader: Nav,
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC&display=swap');
.container {
  font-family: 'Noto Sans TC', sans-serif;
}
</style>
