export default {
  methods: {
    percentageColor: function(percentage) {
      if (percentage < 0) {
        return 'color: #f4200b'
      } else {
        return 'color: #00ff3b'
      }
    },
    showPercentage(value) {
      if (value < 0) {
        return `${Math.round(value * 100) /
          100} % <i class="fas fa-sort-down"></i>`
      } else if (value > 0) {
        return `${Math.round(value * 100) /
          100} % <i class="fas fa-sort-up"></i>`
      } else {
        return `${Math.round(value * 100) / 100} %`
      }
    },
  },
}
