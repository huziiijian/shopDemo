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
   @observable imgs = [{
      id:1,
      url:'https://image-c.weimobwmc.com/wrz/dcc75c9ca80f4f08b42eb637ba56799c.png'
   },{
      id:2,
      url:'https://image-c.weimobwmc.com/wrz/d29b316000b34e419f6f8ff1578f727e.png'
   },{
      id:3,
      url:'https://image-c.weimobwmc.com/wrz/75fe9ac7e0684d6f8353c45fe64f20b8.png'
   },{
      id:4,
      url:'https://image-c.weimobwmc.com/wrz/dcc75c9ca80f4f08b42eb637ba56799c.png'
   },{
      id:5,
      url:'https://image-c.weimobwmc.com/wrz/75fe9ac7e0684d6f8353c45fe64f20b8.png'
   }]
   @action onJump = (route: string) => {
      if (route === '') history.go(-1);
   }
}


export default PageModel;
