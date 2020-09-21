import { observable, computed, action } from "mobx";
import {
   history,
   qs,
} from 'src/utils';
import Service from '../service'
import Store from '../../../store'


import LifeCycle, { LifeCycleProps } from 'src/utils/VM/lifeCycle'
interface Params {
}
interface Query {
}
class PageModel extends LifeCycle<Params, Query>{
   constructor(props: LifeCycleProps<Params, Query>) {
      super(props)
   }
   @computed get orderInfo() {
      return Store.orderInfo;
   }
   @computed get checkoutTypeCount() {
      return Store.checkoutTypeCount;
   }
   @computed get getTotal() {
      return Store.getTotal;
   }
   @observable showLoading = true;
   @observable allSelect = false;
   @observable allLikeCards: Array<{
      id: number
      imgUrl: string,
      title: string,
      intro: string,
      price: number
   }> = [{
      id: 1,
      imgUrl: 'https://image-c.weimobwmc.com/wrz/dcc75c9ca80f4f08b42eb637ba56799c.png',
      title: '手剥橙子生鲜薄皮好吃又便宜f，欢迎品rfrf尝',
      intro: '手剥橙子生鲜薄皮好吃又便宜，欢迎品尝frfr',
      price: 34
   }, {
      id: 2,
      imgUrl: 'https://image-c.weimobwmc.com/wrz/d29b316000b34e419f6f8ff1578f727e.png',
      title: '手剥橙子生鲜薄皮好吃又便宜，欢迎品frf尝',
      intro: '手剥橙子生鲜薄皮好吃又便宜，欢迎品尝',
      price: 34
   }, {
      id: 3,
      imgUrl: 'https://image-c.weimobwmc.com/wrz/75fe9ac7e0684d6f8353c45fe64f20b8.png',
      title: '手剥橙子生鲜薄皮好吃又便宜，欢迎品尝',
      intro: '手剥橙子生鲜薄皮好吃又便宜，欢迎品尝',
      price: 34
   }, {
      id: 4,
      imgUrl: 'https://image-c.weimobwmc.com/wrz/dcc75c9ca80f4f08b42eb637ba56799c.png',
      title: '手剥橙子生鲜薄皮好吃又便宜，欢迎品尝',
      intro: '手剥橙子生鲜薄皮好吃又便宜，欢迎品尝',
      price: 34
   }, {
      id: 5,
      imgUrl: 'https://image-c.weimobwmc.com/wrz/dcc75c9ca80f4f08b42eb637ba56799c.png',
      title: '手剥橙子生鲜薄皮好吃又便宜，欢迎品尝',
      intro: '手剥橙子生鲜薄皮好吃又便宜，欢迎品尝',
      price: 34
   }, {
      id: 6,
      imgUrl: 'https://image-c.weimobwmc.com/wrz/dcc75c9ca80f4f08b42eb637ba56799c.png',
      title: '手剥橙子生鲜薄皮好吃又便宜，欢迎品尝',
      intro: '手剥橙子生鲜薄皮好吃又便宜，欢迎品尝',
      price: 34
   }
      ];
   @action editGood = (goodId: number, type: string) => {
      const orderInfo: Array<{
         goodId: number,
         goodImg: string,
         goodPrice: number,
         selectedNum: number,
         title: string,
         des: string,
         unit: string,
         isSelected?: boolean
      }> = [];

      // 增删商品种类
      if (type === 'del') {
         this.orderInfo.forEach(
            (goodsItem) => goodId != goodsItem.goodId ?
               orderInfo.push(goodsItem) : null
         )
         Store.orderInfo = orderInfo
      };
      if (type === 'select') {
         Store.orderInfo = this.orderInfo.map((goodsItem) => {
            return {
               ...goodsItem,
               isSelected: goodId === goodsItem.goodId ?
                  true : goodsItem.isSelected
            }
         })
      };
      if (type === 'cancelSelect') {
         Store.orderInfo = this.orderInfo.map((goodsItem) => {
            return {
               ...goodsItem,
               isSelected: goodId === goodsItem.goodId ?
                  false : goodsItem.isSelected
            }
         })
      };

      // 单种商品增删选择数量
      if (type === 'add') Store.orderInfo.forEach(
         (goodsItem) => goodId === goodsItem.goodId ?
            ++goodsItem.selectedNum : null
      );
      if (type === 'minus') Store.orderInfo.forEach(
         (goodsItem) => goodId === goodsItem.goodId ?
            --goodsItem.selectedNum : null
      );

      // 将选择后的订单商品组成checkoutInfo
      const checkoutInfo: Array<{
         goodId: number,
         goodImg: string,
         goodPrice: number,
         selectedNum: number,
         title: string,
         des: string,
         unit: string,
         isSelected?: boolean;
      }> = [];
      this.orderInfo.forEach((goodsItem) => goodsItem.isSelected ?
         checkoutInfo.push(goodsItem) : null
      )
      Store.checkoutInfo = checkoutInfo;

      // 判断是否全部选择
      this.orderInfo.length === checkoutInfo.length ?
         this.allSelect = true : this.allSelect = false;
   }
   @action setAllSelect = (boolean: boolean) => {
      this.allSelect = boolean
      if (boolean) {
         Store.checkoutInfo = this.orderInfo
      }
      else {
         Store.checkoutInfo = [];
         Store.orderInfo = this.orderInfo.map((item) => {
            console.log(item.isSelected)
            return { ...item, isSelected: false }
         })
      }
   }
   @action onJump = (key: string) => {
      if (key === 'confirmOrder') history.push('/confirmOrder')
   }
}


export default PageModel;
