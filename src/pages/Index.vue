<template lang="pug">
  layout
    section
      #message
        h1.message
          span(v-for='(l, i) in title.split("")' :key='i')
            span(:style='calcColor(i)') {{ l }}
    section
      #scene--wrapper
        .scene
          .sun
          .rainbow-line--wrap(v-for='n in 5' :class="[`rainbow-line--wrap-${n}`]")
            .rainbow-line
          .ground
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
      colorOne: '#FF0300',
      colorTwo: '#FF7900',
      colorThree: '#44cc17',
      colorFour: '#304FFF',
      colorFive: '#7B20A3',
      title: 'HAPPY BIRTHDAY TEAGAN!!',
      rainbows: []
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


<style lang="stylus">
:root
  --color-one #FF0300
  --color-two #FF7900
  --color-three #44cc17
  --color-four #304FFF
  --color-five #7B20A3

.debug
  border 1px solid red

section
  display block
  width 100%
.message
  text-align center
  padding 20px 0 60px 0
  font-size 48px
  letter-spacing 0.1em
  text-shadow 2px 2px 8px rgba(0, 0, 0, 0.15)
// loader
#scene--wrapper
  background #ffffff
  position relative
  box-sizing border-box
  height 400px
// loader inner
.scene
  bottom 0
  height 400px
  left 0
  margin auto
  position absolute
  right 0
  top 0
  width 400px
.sun
  display block
  height 64px
  width 64px
  content ''
  background yellow
  position absolute
  top -40px
  right -20px
  border-radius 100%
  z-index 999
.ground
  border-top 4px solid green
  background #fff
  width 150%
  position absolute
  height 220px
  top 50%
  left -25%
// loader line wrap
.rainbow-line--wrap
  box-sizing border-box
  height 100%
  left 0
  position absolute
  top 0
  transform-origin 50% 50%
  transform rotate(-45deg)
  animation-name spin
  animation-duration 12s
  animation-iteration-count infinite
  animation-timing-function linear
  width 100%
  // loader line
  .rainbow-line
    border 16px solid transparent
    border-radius 100%
    box-sizing border-box
    height 100px
    left 0
    margin 0 auto
    position absolute
    right 0
    top 0
    width 100px
  &-1 .rainbow-line
    border-top-color var(--color-one)
    border-right-color var(--color-one)
    height 400px
    width 400px
    top 8px
  &-2 .rainbow-line
    border-top-color var(--color-two)
    border-right-color var(--color-two)
    height 360px
    width 360px
    top 28px
    left 2px
  &-3 .rainbow-line
    border-top-color var(--color-three)
    border-right-color var(--color-three)
    height 320px
    width 320px
    top 48px
    left 4px
  &-4 .rainbow-line
    border-top-color var(--color-four)
    border-right-color var(--color-four)
    height 280px
    width 280px
    top 68px
    left 4px
  &-5 .rainbow-line
    border-top-color var(--color-five)
    border-right-color var(--color-five)
    height 240px
    width 240px
    top 88px
    left 4px
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


// spin
@keyframes spin {
  0%, 15% {
    transform rotate(-45deg)
  }
  100% {
    transform rotate(315deg)
  }
}
</style>
