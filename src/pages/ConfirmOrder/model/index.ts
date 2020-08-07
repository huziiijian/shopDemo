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
   @observable showLoading = true;
   @observable orderInfo: Array<{
      goodId: number,
      goodImg: string,
      goodPrice: number,
      selectedNum: number
   }> = [{
      goodId: 1,
      goodImg: 'https://image-c.weimobwmc.com/wrz/dcc75c9ca80f4f08b42eb637ba56799c.png',
      goodPrice: 21,
      selectedNum: 1
   }, {
      goodId: 2,
      goodImg: 'https://image-c.weimobwmc.com/wrz/d29b316000b34e419f6f8ff1578f727e.png',
      goodPrice: 22,
      selectedNum: 2
   }, {
      goodId: 3,
      goodImg: 'https://image-c.weimobwmc.com/wrz/75fe9ac7e0684d6f8353c45fe64f20b8.png',
      goodPrice: 23,
      selectedNum: 3
   }, {
      goodId: 4,
      goodImg: 'https://image-c.weimobwmc.com/wrz/dcc75c9ca80f4f08b42eb637ba56799c.png',
      goodPrice: 24,
      selectedNum: 4
   }, {
      goodId: 5,
      goodImg: 'https://image-c.weimobwmc.com/wrz/75fe9ac7e0684d6f8353c45fe64f20b8.png',
      goodPrice: 25,
      selectedNum: 5
   }];
   @computed get checkoutInfo (){
      return Store.checkoutInfo
   }
   @computed get checkoutTypeCount() {
      return this.checkoutInfo.length;
   };
   @computed get getTotal() {
      return Store.getTotal;
   }
   @action recharge = (type: number): string => {
      if (type === 1) return '19';
      if (type === 2) return '50';
      if (type === 3) return '80';
      if (type === 4) return '100';
      return '0';
   }
   @action onJump = (route: string) => {
      if (route === '') history.go(-1);
   }
}


export default PageModel;
