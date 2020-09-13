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
  width 100%
  min-height 100%
  padding 40px 0
  margin 0
</style>
