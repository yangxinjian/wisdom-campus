<template>
  <div id="app">
    <slideBar class="slideBar"></slideBar>
    <div class="main">
    	<myHeader></myHeader>
    	<router-view class="router-view-wrapper"></router-view>
    </div>
  </div>
</template>

<script>
import slideBar from './components/slideBar/slideBar.vue'
import myHeader from './components/myHeader/myHeader.vue'
export default {
  name: 'app',
  components: {
    slideBar,
    myHeader
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
#app
	display: flex
	.slideBar
		flex: 0 0 180px
	.main
		flex: 1
</style>
