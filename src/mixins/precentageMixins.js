export default {
  methods: {
    // GIVE THE COLOR TO THE PERCENTAGE
    percentageColor: function(percentage) {
      if (percentage < 0) {
        return 'color: #f4200b'
      } else {
        return 'color: #00ff3b'
      }
    },
    // ADD THE ARROW TO THE END OF THE PERCENTAGE
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
