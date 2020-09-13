<template lang="pug">
  .static-rainbow--wrapper
    .static-rainbow.static-rainbow--outer
    .static-rainbow.static-rainbow--inner
    .static-ground
</template>

<script>
export default {
  props: {
    colors: {
      type: Array,
      default: () => {}
    }
  },
  computed: {
    color1 () {
      return { borderRightColor: this.colors[0], borderTopColor: this.colors[0] }
    },
    color2 () {
      return { borderRightColor: this.colors[1], borderTopColor: this.colors[1] }
    },
    color3 () {
      return { borderRightColor: this.colors[2], borderTopColor: this.colors[2] }
    },
    color4 () {
      return { borderRightColor: this.colors[3], borderTopColor: this.colors[3] }
    },
    color5 () {
      return { borderRightColor: this.colors[4], borderTopColor: this.colors[4] }
    }
  }
}
</script>

<style lang="stylus" scoped>
.static-rainbow--wrapper
  position relative
  padding 40px
  width 300px
  height 155px
  margin 40px auto 120px auto
.static-ground
  display block
  content ' '
  border-top 6px solid green
  width 500px
  position absolute
  bottom 0
  left -100px
.static-rainbow
  display block
  position absolute
  top 0
  left 0
  height 300px
  width 300px
  margin 0
  border 24px solid transparent
  border-radius: 50%
  transform rotate(-45deg)
  &.static-rainbow--inner
    border-right-color var(--color-three)
    border-top-color var(--color-three)
  &.static-rainbow--outer
    width 400px
    height 400px
    left -48px
    top -48px
    z-index -1
    border-right-color var(--color-one)
    border-top-color var(--color-one)
    &:before
      display none
    &:after
      border 48px solid transparent
      border-right-color var(--color-two)
      border-top-color var(--color-two)
  &:before
    content ""
    position absolute
    top 0
    right 0
    bottom 0
    left 0
    border 48px solid transparent
    border-radius 50%
    border-right-color var(--color-five)
    border-top-color var(--color-five)
  &:after
    content ""
    position absolute
    top 0
    right 0
    bottom 0
    left 0
    border 24px solid transparent
    border-radius 50%
    border-right-color var(--color-four)
    border-top-color var(--color-four)
</style>
