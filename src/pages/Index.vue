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
</template>

<script>
export default {
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
      title: 'HAPPY BIRTHDAY TEAGAN!!'
    }
  },
  methods: {
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

<style lang='stylus'>
anim = spin 6s linear infinite 0.02s
:root
  --color-one #FF7900
  --color-two #FFFF01
  --color-three #13DD17
  --color-four #304FFF
  --color-five #7B20A3

#animation
  position relative
  width 100%
  margin 0 auto
  height 400px
  padding 40px 0 0 0
  h1
    text-align center
    font-size 64px
    margin 0
.rainbow-wrapper
  position absolute
  left 50%
  width 300px
  margin-top 120px
  transform translateX(-50%)
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
  transform translateY(-50%)
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
    // animation spin 6s linear forwards 0.02s
#block
  width 100%
  height 300px
  margin 0 auto
  position absolute
  top 93%
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
</style>
