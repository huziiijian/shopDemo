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
   @observable inputConfig: {
      placeholder: string,
      type: string,
      message: string
   }[] = [
         { placeholder: `请输入手机号`, type: 'phone', message: '获取验证码' },
         { placeholder: `请输入验证码`, type: 'message', message: '' }
      ]
   @observable userInfo: {
      phone: string,
      message: number,
      id: number
   } = {
         phone: '15316059673',
         message: 9673,
         id: 153
      }
   @action getInputValue = (e: string) => {
      console.log(e)
   }
   @action onJump = (route: string) => {
      if (route === 'home') history.push('/home?userId=' + this.userInfo.id)
   }
}


export default PageModel;
