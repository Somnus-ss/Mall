<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    name: "Scroll",
    props:{
      probeType:{
        type:Number,
        default:0
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      }
    },
    data(){
      return {
        scroll:null
      }
    },
    mounted() {
      // 1.创建BSscroll对象
      this.scroll = new BScroll(this.$refs.wrapper,{
        click:true,
        probeType: this.probeType,//滚动类型0/1/2/3
        pullUpLoad:this.pullUpLoad //上拉加载更多
      })

      // 2.监听滚动的位置
      if (this.probeType === 2 || this.probeType === 3){
        this.scroll.on('scroll', (position) => {
          // console.log(position);
          this.$emit('scroll', position)
        })
      }

      // 3.监听scroll滚动到底部
      if (this.pullUpLoad){
        this.scroll.on('pullingUp', () => {
          // console.log('监听到滚动到底部');
          this.$emit('pullingUp')
        })
      }
    },
    methods:{
      //点击回到顶部的scroll函数
      scrollTo(x, y, time = 300){
        this.scroll && this.scroll.scrollTo && this.scroll.scrollTo(x, y, time)
      },
      //刷新图片拖动scrollHeight的高度
      refresh(){
        // console.log('=====');
        this.scroll && this.scroll.refresh()
      },
      //上拉加载更多图片
      finishPullUp(){
        this.scroll && this.scroll.finishPullUp()
      },
      getScrollY(){
        return this.scroll ? this.scroll.y : 0
      }
    }
  }
</script>

<style scoped>

</style>
