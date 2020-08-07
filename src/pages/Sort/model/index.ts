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
   @computed get goodsInfo() {
      return Store.goodsInfo;
   }
   @observable showLoading = true;
   @observable typeLists: Array<{
      id: number,
      title: string
   }> = [
         {
            id: 1,
            title: '热卖'
         },
         {
            id: 2,
            title: '食品食材'
         },
         {
            id: 3,
            title: '酒水饮料'
         },
         {
            id: 4,
            title: '家居清洁'
         },
         {
            id: 5,
            title: '个人洗护'
         },
         {
            id: 6,
            title: '美妆护肤'
         },
         {
            id: 7,
            title: '品质生鲜'
         },
         {
            id: 8,
            title: '时令蔬果'
         },
         {
            id: 9,
            title: '粮油副食'
         },
         {
            id: 10,
            title: '母婴用品'
         },
         {
            id: 11,
            title: '保健用品'
         }
      ];
   @observable selected: Array<{
      id: number,
      selected: boolean
   }> = this.typeLists.map((item) => {
      return {
         id: item.id,
         selected: item.id === 1 ? true : false
      }
   })
   @observable selectItem = 1;
   @action changeSeleted = (id: number) => {
      this.selectItem = id
      this.selected = this.selected.map((item) => {
         return {
            id: item.id,
            selected: item.id === id
         }
      })
   }
   @action addGoods = (goodId: number, edit: boolean) => {
      // 注意observble声明的状态只能用action声明的方法去修改，不能直接在view层用普通函数修改 
      Store.goodsInfo = this.goodsInfo.map((goodsItem) => {
         return edit ? { // 判断是否点击过一次
            ...goodsItem,
            selectedNum: goodId === goodsItem.goodId ? 1 : goodsItem.selectedNum
         } : {
               ...goodsItem,
               selectedNum: goodId === goodsItem.goodId ? 0 : goodsItem.selectedNum
            }
      })
      const orderInfo: Array<{
         goodId: number,
         goodImg: string,
         goodPrice: number,
         selectedNum: number,
         title: string,
         des: string,
         unit: string
      }> = [];
      this.goodsInfo.forEach((goodsItem) => goodsItem.selectedNum ?
         orderInfo.push(goodsItem) : null
      )
      Store.orderInfo = orderInfo
   }
   @action onJump = (id: number) => {
      history.push('/goodInfo?id=' + id)
   }
}


export default PageModel;
