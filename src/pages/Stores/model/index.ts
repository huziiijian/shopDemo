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
   @observable cardsInfo: Array<{
      id: number,
      imgUrl: string,
      title: string,
      word: string,
      distance: string
   }> = [{
      id: 1,
      imgUrl: 'https://image-c.weimobwmc.com/wrz/5afbf31cc834491486cd71eefca33751.png',
      title: '上海千库分店1',
      word: '上海市千库区千库路千库分店',
      distance: '3.5'
   }, {
      id: 2,
      imgUrl: 'https://image-c.weimobwmc.com/wrz/3038975e5bae48e28c6f66b228e857f8.png',
      title: '上海千库分店2',
      word: '上海市千库区千库路千库分店',
      distance: '3.0'
   }, {
      id: 3,
      imgUrl: 'https://image-c.weimobwmc.com/wrz/3038975e5bae48e28c6f66b228e857f8.png',
      title: '上海千库分店3',
      word: '上海市千库区千库路千库分店',
      distance: '2.5'
   }, {
      id: 4,
      imgUrl: 'https://image-c.weimobwmc.com/wrz/5afbf31cc834491486cd71eefca33751.png',
      title: '上海千库分店4',
      word: '上海市千库区千库路千库分店',
      distance: '2.0'
   }]
   @action onJump = (key: string) => {
      if (key === '') history.go(-1);
      else history.push('/home/intro?title=' + key);
   }
}


export default PageModel;
