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
   @observable cardsInfo:Array<{
      id:number,
      imgUrl:string,
      title:string,
      words:string,
      price:number,
      unit:string
   }> = [{
      id:1,
      imgUrl:'https://image-c.weimobwmc.com/wrz/01db7d6156174910ab0c18988fc2010f.png',
      title:'手剥橙子生鲜薄皮橙子新西兰产',
      words:'来自新西兰的新鲜薄皮香甜橙子',
      price:24,
      unit:'盒'
   },{
      id:2,
      imgUrl:'https://image-c.weimobwmc.com/wrz/5bc3503c89f344208294475100bd66bc.png',
      title:'圣女果 小番茄 约1kg 沙拉生食',
      words:'圣女果 小番茄 约1kg 沙拉生食',
      price:24,
      unit:'盒'
   },{
      id:3,
      imgUrl:'https://image-c.weimobwmc.com/wrz/a7b8996288e8470096c7d454777a92fc.png',
      title:'水果礼盒',
      words:'圣女果 小番茄 约1kg 沙拉生食',
      price:24,
      unit:'盒'
   },{
      id:4,
      imgUrl:'https://image-c.weimobwmc.com/wrz/b3049971c469489f97ba883323ce7800.png',
      title:'手剥橙子生鲜薄皮橙子新西兰产',
      words:'手剥橙子生鲜薄皮橙子新西兰产',
      price:24,
      unit:'盒'
   },{
      id:5,
      imgUrl:'https://image-c.weimobwmc.com/wrz/a7b8996288e8470096c7d454777a92fc.png',
      title:'水果礼盒',
      words:'圣女果 小番茄 约1kg 沙拉生食',
      price:24,
      unit:'盒'
   },{
      id:6,
      imgUrl:'https://image-c.weimobwmc.com/wrz/b3049971c469489f97ba883323ce7800.png',
      title:'手剥橙子生鲜薄皮橙子新西兰产',
      words:'手剥橙子生鲜薄皮橙子新西兰产',
      price:24,
      unit:'盒'
   },{
      id:7,
      imgUrl:'https://image-c.weimobwmc.com/wrz/a7b8996288e8470096c7d454777a92fc.png',
      title:'水果礼盒',
      words:'圣女果 小番茄 约1kg 沙拉生食',
      price:24,
      unit:'盒'
   },{
      id:8,
      imgUrl:'https://image-c.weimobwmc.com/wrz/01db7d6156174910ab0c18988fc2010f.png',
      title:'手剥橙子生鲜薄皮橙子新西兰产',
      words:'来自新西兰的新鲜薄皮香甜橙子',
      price:24,
      unit:'盒'
   },{
      id:9,
      imgUrl:'https://image-c.weimobwmc.com/wrz/a7b8996288e8470096c7d454777a92fc.png',
      title:'水果礼盒',
      words:'圣女果 小番茄 约1kg 沙拉生食',
      price:24,
      unit:'盒'
   }]
   @action changeSeleted = (id: number) => {
      this.selected = this.selected.map((item) => {
         return {
            id: item.id,
            selected: item.id === id
         }
      })
   }
}


export default PageModel;
