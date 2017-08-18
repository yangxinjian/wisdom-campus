<template>
  <div class="slideBar-wrapper">
  <el-row class="tac">
    <div class="logo">
      <span class="name">
      智
      </span>
      <span class="circle">
      </span>
      <span class="e-name">HIYSZ</span>
    </div>
      <el-menu :router="routerVal" :default-active="activeUrl" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
        <el-menu-item index="/convenience">
        	<i class="el-icon-message"></i>
        	便捷工作
        </el-menu-item>
        <el-submenu index="/photo">
          <template slot="title">
          	<i class="el-icon-message">
          	</i>申报审批
          </template>
          <el-menu-item-group>
            <el-menu-item index="/photo">随手拍审批</el-menu-item>
            <el-menu-item index="/apply">申请审批</el-menu-item>
            <el-menu-item index="/declare-place-on-file">审批归档</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="/news">
        	<i class="el-icon-message"></i>
        	新闻管理
        </el-menu-item>
        <el-submenu index="/students-information">
          <template slot="title">
          	<i class="el-icon-message"></i>
          	人员管理
          </template>
          <el-menu-item-group>
            <el-menu-item index="/students-information">学生信息列表
            </el-menu-item>
            <el-menu-item index="/teachers-information">教师信息列表
            </el-menu-item>
            <el-menu-item index="/jurisdiction">权限设置
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="/apply-for-buy">
          <template slot="title">
          	<i class="el-icon-message"></i>
          	危险化学品
          </template>
          <el-menu-item-group>
            <el-menu-item index="/apply-for-buy">购买申请</el-menu-item>
            <el-menu-item index="/apply-for-abandon">废弃申请</el-menu-item>
            <el-menu-item index="/use-state">使用情况</el-menu-item>
            <el-menu-item index="/chemicals-place-on-file">处理列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="/map"><i class="el-icon-message"></i>校园地图</el-menu-item>
      </el-menu>
    </el-col>
    </el-col>
  </el-row>
  </div>
</template>
<script>
export default {
  name: 'slidebar',
  data () {
    return {
      routerVal: true
    }
  },
  computed: {
    activeUrl () {
      return this.$route.path
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      this.$router.push('/convenience')
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.slideBar-wrapper
  position: reletive
  left: 0
  width: 180px
  height: 700px
  background: #313747
  .logo
  	background: #222632
  	height: 60px
  	text-align: center
  	color: #fff
  	line-height: 60px
  .name
  	font-size: 33px
  	display: inline-block
  	margin-right: 5px
  	font-weight: 300
  	font-family: serif
  .circle
  	width: 10px
  	height: 10px
  	margin-bottom: 7px
  	border-radius: 50%
  	background: #f49100
  	display: inline-block
  	margin-right: 5px
  .e-name
  	font-family: initial
  	font-weight: 300
  	display: inline-block
  	vertical-align: top
  	letter-spacing: 4px
  	font-size: 16px
  .el-menu
  	background: #313747
  .el-menu-item, .el-submenu__title
  	color: #71757f
  	letter-spacing: 2px
  .el-submenu .el-menu-item
  	min-width: 180px
  .isActive:hover
  	background: #222632
  .el-menu-item-group__title
  	padding-top: 0
</style>