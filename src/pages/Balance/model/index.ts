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
   @observable type = 1;
   @action recharge = (type: number):string => {
      if(type === 1) return '19';
      if(type === 2) return '50';
      if(type === 3) return '80';
      if(type === 4) return '150';
      return '0';
   }
   @action onJump = (route: string) => {
      if (route === '') history.go(-1);
   }
}


export default PageModel;
