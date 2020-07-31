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
      message: string,
      id: number
   } = {
         phone: '15316059673',
         message: '0',
         id: 153
      }
   @action getInputValue = (e: string,type:string) => {
      type === 'phone' ? this.userInfo.phone = e : this.userInfo.message = e;
      console.log(this.userInfo)
   }
   @action Login = () => {
      console.log(`发送电话和验证码给后端判断是否登陆成功`)
      this.userInfo.message === '9673' ? this.onJump('home') : console.log(`验证失败`);
   }
   @action onJump = (route: string) => {
      if (route === 'home') history.push('/home/intro?userId=' + this.userInfo.id)
   }
}


export default PageModel;
