<template>
  <div class="bottom-bar">
    <div class="check-content">
      <check-button :is-checked="isSelectAll" class="check-button" @click.native="checkClick"/>
      <span>全选</span>
    </div>

    <div class="price">
      合计:{{totalPrice}}
    </div>

    <div class="calculate" @click="calcClick">
      去结算:({{checkLength}})
    </div>
  </div>
</template>

<script>
  import CheckButton from "./CheckButton";

  export default {
    name: "CartBottomBar",
    components:{
      CheckButton
    },
    computed:{
      totalPrice(){
        return '￥' + this.$store.state.cartList.filter(item => {
          return item.checked
        }).reduce((preValue, item) => {
          return preValue + item.price * item.count
        },0).toFixed(2)
      },
      checkLength(){
        return this.$store.state.cartList.filter(item => item.checked).length
      },
      isSelectAll(){
        if (this.$store.state.cartList.length === 0) return false
        // 1.方法一filter
        // return !(this.$store.state.cartList.filter(item => !item.checked).length)
        // 2.方法二find
        return !this.$store.state.cartList.find(item => !item.checked)
        // 3.方法三some
        // 4.方法四every
        // 5.普通遍历
        /*
        for(let item of this.$store.state.cartList){
          if (!item.checked){
            return false
          }
        }
        return false
        */
      }
    },
    methods:{
      checkClick(){
        // console.log('000');
        if (this.isSelectAll){//全部选中
          this.$store.state.cartList.forEach(item => item.checked = false)
        }else {//部分或全部不选中
          this.$store.state.cartList.forEach(item => item.checked = true)
        }
      },
      calcClick(){
        if(!this.isSelectAll){
          this.$toast.show('请选择购买的商品',2000)
        }
      }
    }
  }
</script>

<style scoped>
  .bottom-bar{
    display: flex;
    height: 40px;
    background-color: #eee;
    position: relative;
    line-height: 40px;

    font-size: 14px;
  }

  .check-content{
    display: flex;
    align-items: center;
    margin-left: 10px;
  }

  .check-button{
    width: 20px;
    height: 20px;
    line-height: 20px;
    margin-right: 5px;
  }

  .price{
    margin-left: 20px;
  }

  .calculate{
    margin-left: auto;
    width: 90px;
    background-color: #ff8198;
    color: #fff;
    text-align: center;
  }
</style>
