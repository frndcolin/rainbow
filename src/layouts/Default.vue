<template lang="pug">
  #page
    slot
</template>

<style lang='stylus'>
*, *:before, *:after
  box-sizing border-box

body
  font-family -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif
  margin 0
  padding 0
  line-height 1.5
  width 100vw
  height 100vh

#page
  width 90%
  min-height 100%
  display flex
  justify-content center
  align-items center
  border 1px solid blue
  padding 40px
</style>
