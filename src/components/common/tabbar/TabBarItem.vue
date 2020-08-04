<template>
  <div class="tab-bar-item" @click="itemClick">
<!--    <img src="../../assets/img/home.svg" alt="">-->
<!--    <div>首页</div>-->
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
<!--    <div :class="{active:isActive}"><slot name="item-text"></slot></div>-->
    <div :style="activeStyle"><slot name="item-text"></slot></div>


  </div>
</template>

<script>
    export default {
      name: "TabBarItem",
      props:{
        path:String,
        activeColor:{
          type:String,
          default:'red'
        }
      },
      data(){
          return {
            // isActive:true
          }
      },
      computed:{
        isActive(){
          // home -> item1(/home) = true
          // home -> item1(/category) = true
          // home -> item1(/cart) = true
          // home -> item1(/profile) = true
          return this.$route.path.indexOf(this.path) !== -1
        },
        activeStyle(){
          return this.isActive ? {color:this.activeColor} : {}
        }
      },
      methods:{
        itemClick(){
          // console.log('itemClick');
          this.$router.push(this.path)
        }
      }
    }
</script>

<style scoped>
  .tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 12px;
    margin-bottom: -3px;
  }

  .tab-bar-item img{
    width: 24px;
    height: 24px;
    vertical-align: middle;
  }

  /*.active{*/
  /*  color: blue;*/
  /*}*/
</style>
