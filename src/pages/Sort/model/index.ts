import { observable, computed, action } from "mobx";
import {
   history,
   qs,
} from 'src/utils';
import Service from '../service'


import LifeCycle, { LifeCycleProps } from 'src/utils/VM/lifeCycle'
interface Params {
}
interface Query {
}
class PageModel extends LifeCycle<Params, Query>{
   constructor(props: LifeCycleProps<Params, Query>) {
      super(props)

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
         },
         {
            id: 12,
            title: '工艺创造'
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
   @action changeSeleted = (id: number) => {
      this.selected = this.selected.map((item) => {
         return {
            id: item.id,
            selected: item.id === id ? true : false
         }
      })
   }
}


export default PageModel;
