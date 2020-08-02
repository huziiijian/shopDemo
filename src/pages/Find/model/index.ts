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
      id: number
      imgUrl: string,
      title: string
    }> = [{
      id: 1,
      imgUrl: 'https://image-c.weimobwmc.com/wrz/a22b288c160c497a9674e1b870aff995.png',
      title: '单独独立包装 厄瓜多尔进口自营生鲜水果'
    },{
      id: 2,
      imgUrl: 'https://image-c.weimobwmc.com/wrz/7b6889df8c0a4072aa147be6624678ca.png',
      title: '单独独立包装 厄瓜多尔进口自营生鲜水果'
    },{
      id: 3,
      imgUrl: 'https://image-c.weimobwmc.com/wrz/a22b288c160c497a9674e1b870aff995.png',
      title: '单独独立包装 厄瓜多尔进口自营生鲜水果'
    },{
      id: 4,
      imgUrl: 'https://image-c.weimobwmc.com/wrz/7b6889df8c0a4072aa147be6624678ca.png',
      title: '单独独立包装 厄瓜多尔进口自营生鲜水果'
    }]
}


export default PageModel;
