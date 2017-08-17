<template>
  <div class="header-wrapper">
  	<div class="header-wrapper-top"></div>
  	<div class="header-wrapper-bottom">
  		<div class="accountImg">
  			<img src="../../assets/jindong.png">
  		</div>
  		<div class="accountName">靳东</div>
  		<div class="dropDown">
  			<el-row class="block-col-2">
				  <el-col :span="12">
				    <el-dropdown>
				      <span class="el-dropdown-link">
				        <i class="el-icon-caret-bottom el-icon--right"></i>
				      </span>
				      <el-dropdown-menu slot="dropdown">
				        <el-dropdown-item>黄金糕</el-dropdown-item>
				        <el-dropdown-item>狮子头</el-dropdown-item>
				        <el-dropdown-item>螺蛳粉</el-dropdown-item>
				        <el-dropdown-item>双皮奶</el-dropdown-item>
				        <el-dropdown-item>蚵仔煎</el-dropdown-item>
				      </el-dropdown-menu>
				    </el-dropdown>
				  </el-col>
				</el-row>
  		</div>
  	</div>
  </div>
</template>
<script>
export default {
  name: 'myHeader'
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
	.header-wrapper
		height: 60px
		width: 100%
		box-shadow: 0 3px 5px #d1d3d6
		.header-wrapper-top
			height: 13px
			background: #f9ae00
		.header-wrapper-bottom
			width: 100px
			height: 47px
			float: right
			.accountImg
				display: inline-block
				width: 30px
				height: 30px
				margin-top: 7px
				margin-right: 8px
				img
					width: 30px
					height: 30px
					border-radius: 50%
			.accountName
				display: inline-block
				color: #ababab
				font-size: 14px
				letter-spacing: 1px
				line-height: 47px
				vertical-align: top
</style>