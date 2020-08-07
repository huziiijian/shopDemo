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
   id:number
}
class PageModel extends LifeCycle<Params, Query>{
   constructor(props: LifeCycleProps<Params, Query>) {
      super(props)

   }
   @observable showLoading = true;
   @computed get goodInfo () {
      let goodInfo: { // 订单所有信息
         goodId: number,
         goodImg: string,
         goodPrice: number,
         selectedNum: number,
         title: string,
         des: string,
         unit: string,
         typeId?: number
      } = {
         goodId: 1,
         goodImg: 'https://image-c.weimobwmc.com/wrz/01db7d6156174910ab0c18988fc2010f.png',
         goodPrice: 21,
         selectedNum: 0,
         title: '手剥橙子生鲜薄皮橙子新西兰产',
         des: '手剥橙子生鲜薄皮橙子新西兰产',
         unit: '盒',
         typeId: 1
      }
      Store.goodsInfo.forEach((item)=>{
         item.goodId === Number(history.location.search.slice(-1)) ?
         goodInfo = {...item} : null;
      })
      return goodInfo
   }
   @action onJump = (route: string) => {
      if (route === '') history.go(-1)
   }
}


export default PageModel;
