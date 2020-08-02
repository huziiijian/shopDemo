import { observable, computed, action } from "mobx";
import {
    history,
    qs,
} from 'src/utils';
import Service from '../service'


import LifeCycle, {LifeCycleProps} from 'src/utils/VM/lifeCycle'
interface Params  {
}
interface Query  {
}
class PageModel extends LifeCycle <Params, Query>{
    constructor(props:LifeCycleProps<Params, Query>){
        super(props)

    }
    @observable showLoading = true;
    @observable cardInfo: Array<{
      id: number,
      imgUrl: string,
      title: string,
      info:string,
      price:number,
      unit:string
    }> = [{
      id: 1,
      imgUrl: 'https://image-c.weimobwmc.com/wrz/dcc75c9ca80f4f08b42eb637ba56799c.png',
      title: '手剥橙子生鲜薄皮橙子新西兰',
      info:'手剥橙子生鲜薄皮橙子新西兰',
      price:34,
      unit:'盒'
    },{
      id: 2,
      imgUrl: 'https://image-c.weimobwmc.com/wrz/d29b316000b34e419f6f8ff1578f727e.png',
      title: '手剥广东龙眼生鲜薄皮龙眼',
      info:'手剥广东龙眼生鲜薄皮龙眼',
      price:24,
      unit:'盒'
    },{
      id: 3,
      imgUrl: 'https://image-c.weimobwmc.com/wrz/75fe9ac7e0684d6f8353c45fe64f20b8.png',
      title: '手剥广东龙眼生鲜薄皮龙眼',
      info:'手剥广东龙眼生鲜薄皮龙眼',
      price:14,
      unit:'盒'
    },{
      id: 4,
      imgUrl: 'https://image-c.weimobwmc.com/wrz/75fe9ac7e0684d6f8353c45fe64f20b8.png',
      title: '手剥广东龙眼生鲜薄皮龙眼',
      info:'手剥广东龙眼生鲜薄皮龙眼',
      price:4,
      unit:'盒'
    }];
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
