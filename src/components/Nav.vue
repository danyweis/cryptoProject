<template>
  <div class="">
    <nav class="switch">
      <div class="choiceMinMax darkBGFont">
        <p>Max</p>
        <div class="checkBox">
          <div class="checkContainer">
            <input
              type="checkbox"
              v-on:change="clickE"
              name="minMax"
              id="minMax"
            />
            <div class="checkSwitch"></div>
          </div>
        </div>
        <p>Min</p>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data: function() {
    return {}
  },
  methods: {
    clickE: function(value) {
      this.$emit('updateC', value)
      console.log(value.target.checked)
    },
  },
}
</script>

<style></style>
