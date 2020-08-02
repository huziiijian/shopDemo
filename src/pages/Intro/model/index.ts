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
   @observable typeInfo: {
      id: number,
      imgUrl: string,
      name: string
   }[] = [
         {
            id: 1,
            imgUrl: 'https://image-c.weimobwmc.com/wrz/cf509137ff1f4d42a264e3ff81162108.png',
            name: '食品食材'
         }, {
            id: 2,
            imgUrl: 'https://image-c.weimobwmc.com/wrz/8b89eeb5c25846fea419b6b17bba2f31.png',
            name: '酒水饮料'
         }, {
            id: 3,
            imgUrl: 'https://image-c.weimobwmc.com/wrz/99e7d7f642834e3dba7bebf52b192ff7.png',
            name: '家居清洁'
         }, {
            id: 4,
            imgUrl: 'https://image-c.weimobwmc.com/wrz/4fd214c1911543b499bb1b8ba73c01a3.png',
            name: '个人洗护'
         }, {
            id: 5,
            imgUrl: 'https://image-c.weimobwmc.com/wrz/73884e35ab824546b4428c3ae7666fbb.png',
            name: '美妆护发'
         }, {
            id: 6,
            imgUrl: 'https://image-c.weimobwmc.com/wrz/9a83d50b11ff4d369df9ced8c5959992.png',
            name: '品质生鲜'
         }, {
            id: 7,
            imgUrl: 'https://image-c.weimobwmc.com/wrz/b682c6107bc04356ac67f57025324879.png',
            name: '时令水果'
         }, {
            id: 8,
            imgUrl: 'https://image-c.weimobwmc.com/wrz/47b814aa31ae467a8cc42da202d3fc3c.png',
            name: '粮油副食'
         }, {
            id: 9,
            imgUrl: 'https://image-c.weimobwmc.com/wrz/df735c85af8344bf9e2f85462f461d0d.png',
            name: '母婴用品'
         }, {
            id: 10,
            imgUrl: 'https://image-c.weimobwmc.com/wrz/256d0df773e24bb48d70d083dc632351.png',
            name: '保健用品'
         }
      ]
   @observable hotSaleCardInfo: {
      id: number,
      imgUrl: string,
      intro: string,
      newPrice: number,
      oldPrice: number
   }[] = [{
      id: 1,
      imgUrl: 'https://image-c.weimobwmc.com/wrz/dcc75c9ca80f4f08b42eb637ba56799c.png',
      intro: '手剥橙子生鲜薄皮好吃',
      newPrice: 34,
      oldPrice: 88
   }, {
      id: 2,
      imgUrl: 'https://image-c.weimobwmc.com/wrz/d29b316000b34e419f6f8ff1578f727e.png',
      intro: '广东石龙眼3斤',
      newPrice: 22,
      oldPrice: 96
   }, {
      id: 3,
      imgUrl: 'https://image-c.weimobwmc.com/wrz/dcc75c9ca80f4f08b42eb637ba56799c.png',
      intro: '手剥橙子生鲜薄皮好吃',
      newPrice: 34,
      oldPrice: 88
   }, {
      id: 4,
      imgUrl: 'https://image-c.weimobwmc.com/wrz/d29b316000b34e419f6f8ff1578f727e.png',
      intro: '广东石龙眼3斤',
      newPrice: 22,
      oldPrice: 96
   }, {
      id: 5,
      imgUrl: 'https://image-c.weimobwmc.com/wrz/dcc75c9ca80f4f08b42eb637ba56799c.png',
      intro: '手剥橙子生鲜薄皮好吃',
      newPrice: 34,
      oldPrice: 88
   }, {
      id: 6,
      imgUrl: 'https://image-c.weimobwmc.com/wrz/d29b316000b34e419f6f8ff1578f727e.png',
      intro: '广东石龙眼3斤',
      newPrice: 22,
      oldPrice: 96
   }
      ];
   @observable guessLikes: {
      id: number,
      type: string,
      info: string
   }[] = [{
      id: 1,
      type: '美食特产',
      info: '补充能量'
   }, {
      id: 2,
      type: '家居清洁',
      info: '全场3折'
   }, {
      id: 3,
      type: '个人洗护',
      info: '全场3折'
   }, {
      id: 4,
      type: '美妆护肤',
      info: '全场3折'
   }, {
      id: 5,
      type: '美食特产',
      info: '补充能量'
   }, {
      id: 6,
      type: '美食特产',
      info: '补充能量'
   }, {
      id: 7,
      type: '美妆护肤',
      info: '全场3折'
   }, {
      id: 8,
      type: '美食特产',
      info: '补充能量'
   }, {
      id: 9,
      type: '美食特产',
      info: '补充能量'
   },
      ];
      @observable allLikeCards: Array<{
         id: number
         imgUrl: string,
         title: string,
         intro: string,
         price: number
      }> = [{
         id: 1,
         imgUrl: 'https://image-c.weimobwmc.com/wrz/dcc75c9ca80f4f08b42eb637ba56799c.png',
         title: '手剥橙子生鲜薄皮好吃又便宜，欢迎品尝',
         intro: '手剥橙子生鲜薄皮好吃又便宜，欢迎品尝',
         price: 34
      }, {
         id: 2,
         imgUrl: 'https://image-c.weimobwmc.com/wrz/d29b316000b34e419f6f8ff1578f727e.png',
         title: '手剥橙子生鲜薄皮好吃又便宜，欢迎品尝',
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
         ]
}


export default PageModel;
