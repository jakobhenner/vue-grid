<template>
  <div :class="[classes, gutters]" :style="style">
    <slot></slot>
  </div>
</template>

<script>
import gutter from '../mixins/gutter'

export default {
  mixins: [gutter],
  props: {
    columns: {
      type: Number,
      default: 12
    },
    size: Number,
    sizes: {
      type: Object,
      default () {
        return {}
      }
    },
    offset: Number,
    gutterless: Boolean,
    fit: Boolean,
    odd: Boolean
  },
  methods: {
    getColumnSize (size) {
      return size / this.columns * 100 + '%';
    }
  },
  computed: {
    style () {
      return {
        maxWidth: this.percentageSize,
        flex: this.percentageSize && `0 0 ${this.percentageSize}`,
        marginLeft: this.percentageOffset
      }
    },
    percentageSize () {
      if (!this.breakpointSize && !this.size) return
      return this.getColumnSize(this.breakpointSize || this.size)
    },
    percentageOffset () {
      if (!this.offset) return
      if (this.breakpoint && this.breakpoint.name === 'xs') return

      return this.getColumnSize(this.offset)
    },
    classes () {
      return {
        [this.$style.column]: true,
        [this.column.common]: this.size || this.fit,
        [this.column.fluid]: !this.size && !this.fit,
        [this.$style.gutterHorisontalNone]: this.gutterless
      }
    },
    breakpoint () {
      return this.$store && this.$store.getters['breakpoints/breakpoint']
    },
    breakpoints () {
      return this.$store && this.$store.getters['breakpoints/breakpoints']
    },
    columnBreakpoints () {
      if (!this.breakpoints) return
      return this.breakpoints
      .filter(breakpoint => this.sizes[breakpoint.name])
    },
    breakpointSize () {
      if (!this.columnBreakpoints) return
      const breakpoint = this.columnBreakpoints.find(breakpoint => breakpoint.name === this.breakpoint.name)
      if (breakpoint) return this.sizes[breakpoint.name]

      for (let i = 0; i < this.columnBreakpoints.length; i++) {
        const breakpoint = this.columnBreakpoints[i]
        if (this.breakpoint.size < breakpoint.size) {
          return this.sizes[breakpoint.name]
        }
      }

      // Otherwise, return default (if available)
      return this.sizes.default
    }
  }
}
</script>

<style module src="../css/common.css"></style>

<style module="column">
.common {
  box-sizing: border-box;
  flex-grow: 0;
  flex-shrink: 0;
  position: relative;
}
.fluid {
  flex-grow: 1;
  flex-basis: 0;
  max-width: 100%;
}
</style>
