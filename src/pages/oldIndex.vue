<template lang='pug'>
  layout
    section#animation
      h1
        span(v-for='(l, i) in title.split("")' :key='i')
          span(:style='calcColor(i)') {{ l }}
      .rainbow-wrapper
        .rainbow.raindbow-one
        .rainbow.raindbow-two
      #block
        .squares
          .square
            input(type="color" @input='updateColorOne' :value='colorOne' id="color-one")
          .square
            input(type="color" @input='updateColorTwo' :value='colorTwo' id="color-two")
          .square
            input(type="color" @input='updateColorThree' :value='colorThree' id="color-three")
          .square
            input(type="color" @input='updateColorFour' :value='colorFour' id="color-four")
          .square
            input(type="color" @input='updateColorFive' :value='colorFive' id="color-five")
    section#static-rainbows
      static-rainbow(v-for='(r, i) in rainbows' :colors='r.colors' :key='i')
</template>

<script>
import StaticRainbow from '../components/StaticRainbow'

export default {
  components: {StaticRainbow},
  metaInfo: {
    title: 'HAPPY BIRTHDAY TEAGAN!!'
  },
  data() {
    return {
      colorOne: '#FF7900',
      colorTwo: '#FFFF01',
      colorThree: '#13DD17',
      colorFour: '#304FFF',
      colorFive: '#7B20A3',
      title: 'HAPPY BIRTHDAY TEAGAN!!',
      rainbows: []
    }
  },
  methods: {
    addRainbow () {
      const colors = [this.colorOne, this.colorTwo, this.colorThree, this.colorFour, this.colorFive]
      this.rainbows.push({ colors })
    },
    calcColor (n) {
      const nums = ['one', 'two', 'three', 'four', 'five']
      const select = n % 4
      const num = nums[select]
      return { color: `var(--color-${num})`}
    },
    updateColorOne (e) {
      this.colorOne = e.target.value
      const root = document.documentElement
      root.style.setProperty('--color-one', e.target.value)
    },
    updateColorTwo (e) {
      this.colorTwo = e.target.value
      const root = document.documentElement
      root.style.setProperty('--color-two', e.target.value)
    },
    updateColorThree (e) {
      this.colorThree = e.target.value
      const root = document.documentElement
      root.style.setProperty('--color-three', e.target.value)
    },
    updateColorFour (e) {
      this.colorFour = e.target.value
      const root = document.documentElement
      root.style.setProperty('--color-four', e.target.value)
    },
    updateColorFive (e) {
      this.colorFive = e.target.value
      const root = document.documentElement
      root.style.setProperty('--color-five', e.target.value)
    }
  }
}
</script>

<style lang='stylus' scoped>
anim = spin 6s linear infinite 0.02s
.debug-red
  border 1px solid red
.debug-blue
  border 1px solid blue
.debug-green
  border 1px solid green
#animation
  position relative
  width 100%
  margin 0
  height 600px
  display flex
  flex-direction column
  justify-content flex-start
  padding 40px 0 0 0
  h1
    text-align center
    font-size 64px
    padding 0
    margin 0
.rainbow-wrapper
  position relative
  width 300px
  margin 80px auto 0 auto
.rainbow
  display block
  position absolute
  top 0
  left 0
  height 300px
  width 300px
  margin 0
  border 24px solid transparent
  border-right-color var(--color-three)
  border-top-color var(--color-three)
  border-radius: 50%
  animation anim
  &.raindbow-two
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
    // animation spin 6s linear forwards 0.02s
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
#block
  width 100%
  height 38%
  margin 0
  position absolute
  bottom 0
  left 0
  background #ffffff
  border-top 4px solid green
.squares
  width 300px
  margin 40px auto
  display flex
  justify-content space-around
.square
  margin 0 8px
input[type='color']
  width 40px
  height 40px
@keyframes spin {
  from {
    -webkit-transform rotate(0deg)
    transform rotate(0deg)
    -webkit-transform rotate(0deg)
    transform rotate(0deg)
  }
  to {
    -webkit-transform rotate(359deg)
    transform rotate(359deg)
    -webkit-transform rotate(359deg)
    transform rotate(359deg)
  }
}

#static-rainbows
  padding 40px
  width 100%
  display block
  height 400px
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
