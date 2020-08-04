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
    @observable cardsInfo: Array<{
      id: number,
      orderNo: string,
      status: number,
      imgUrl: string,
      title: string,
      info: string,
      price: number,
      unit: string,
    }> = [{
      id: 1,
      orderNo: '724553654245533',
      status: 2,
      imgUrl: 'https://image-c.weimobwmc.com/wrz/dcc75c9ca80f4f08b42eb637ba56799c.png',
      title: '手剥橙子生鲜薄皮橙子新西',
      info: '手剥橙子生鲜薄皮橙子新西rgergr',
      price: 34,
      unit: '盒',
    },{
      id: 2,
      orderNo: '765245534245533',
      status: 1,
      imgUrl: 'https://image-c.weimobwmc.com/wrz/d29b316000b34e419f6f8ff1578f727e.png',
      title: '手剥橙子生鲜薄皮橙子新西rgergr',
      info: '手剥橙子生鲜薄皮橙子新西rgergr',
      price: 34,
      unit: '盒',
    },{
      id: 3,
      orderNo: '245532455324553',
      status: 3,
      imgUrl: 'https://image-c.weimobwmc.com/wrz/75fe9ac7e0684d6f8353c45fe64f20b8.png',
      title: '手剥橙子生鲜薄皮橙子新西rgergr',
      info: '手剥橙子生鲜薄皮橙子新西rgergr',
      price: 34,
      unit: '盒',
    },{
      id: 4,
      orderNo: '333542455324553',
      status: 2,
      imgUrl: 'https://image-c.weimobwmc.com/wrz/d29b316000b34e419f6f8ff1578f727e.png',
      title: '手剥橙子生鲜薄皮橙子新西rgergr',
      info: '手剥橙子生鲜薄皮橙子新西rgergr',
      price: 34,
      unit: '盒',
    },{
      id: 5,
      orderNo: '332455335245534',
      status: 4,
      imgUrl: 'https://image-c.weimobwmc.com/wrz/d29b316000b34e419f6f8ff1578f727e.png',
      title: '手剥橙子生鲜薄皮橙子新西rgergr',
      info: '手剥橙子生鲜薄皮橙子新西rgergr',
      price: 34,
      unit: '盒',
    }
   ];
   @action onJump = (route:string) => {
      if (route === '') history.go(-1);
   }
}


export default PageModel;
