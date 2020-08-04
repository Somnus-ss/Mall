import {
  ADD_COUNTER,
  ADD_TO_CART
} from "./mutation-types";

export default {
  // mutations唯一的目的就是修改state中状态
  // mutation的设计原则：其中的每个方法尽可能完成的事情比较单一一点
  /*
  addCart(state, payload){
    // payload新添加的商品
    // let oldProduct = null
    // for (let item of state.cartList){
    //   if (item.iid === payload.iid){
    //     oldProduct = item
    //   }
    // }
    // 1.查找之前数组中是否有该商品
    let oldProduct = state.cartList.find(item => item.iid === payload.iid)

    // 2.判断oldProduct
    if (oldProduct){
      oldProduct.count += 1
    }else {
      payload.count = 1
      state.cartList.push(payload)
    }
  }
   */

  [ADD_COUNTER](state, payload){
    payload.count ++
  },
  [ADD_TO_CART](state, payload){
    payload.checked = true
    state.cartList.push(payload)
  }
}
