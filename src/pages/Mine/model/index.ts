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
   @observable orderLists: Array<{
      id:number,
      imgUrl: string,
      info: string
   }> = [{
      id:1,
      imgUrl: 'https://image-c.weimobwmc.com/wrz/f3bf8074e4e047098312a3f9d9d95756.png',
      info: '代付款'
   },
   {
      id:2,
      imgUrl: 'https://image-c.weimobwmc.com/wrz/09012c43dba8469fa2900a8fda214169.png',
      info: '代发货'
   }, {
      id:3,
      imgUrl: 'https://image-c.weimobwmc.com/wrz/0d3f84bb24ee417e8a7a3c20d52719d0.png',
      info: '配送中'
   }, {
      id:4,
      imgUrl: 'https://image-c.weimobwmc.com/wrz/61c2bc20676c4fbfb695fa3d1e015969.png',
      info: '待评价'
   }, {
      id:5,
      imgUrl: 'https://image-c.weimobwmc.com/wrz/0a3aa16f6c22489d91da9026be5d3141.png',
      info: '售后退款'
   }];
   @observable serviceLists: Array<{
      id:number,
      imgUrl: string,
      info: string
   }> = [{
      id:1,
      imgUrl: 'https://image-c.weimobwmc.com/wrz/8973ed5a01534902ae68f513361da58a.png',
      info: '邀请得好礼'
   },
   {
      id:2,
      imgUrl: 'https://image-c.weimobwmc.com/wrz/561bf916717b4bfb98b2e0e8253b8ee8.png',
      info: '拼团更实惠'
   }, {
      id:3,
      imgUrl: 'https://image-c.weimobwmc.com/wrz/c9714ad8b7984a3e9036be0e6f76edf4.png',
      info: '邀请得现金'
   }, {
      id:4,
      imgUrl: 'https://image-c.weimobwmc.com/wrz/f72e68a1c6ed449ab08d093b147043e6.png',
      info: '邀请得会员'
   }, {
      id:5,
      imgUrl: 'https://image-c.weimobwmc.com/wrz/e143a26dc82943ef951a402e00c6bb6b.png',
      info: '积分商城'
   }, {
      id:6,
      imgUrl: 'https://image-c.weimobwmc.com/wrz/fda0c3931b6e4c9786876321a68f1452.png',
      info: '签到得红包'
   },{
      id:7,
      imgUrl: 'https://image-c.weimobwmc.com/wrz/8973ed5a01534902ae68f513361da58a.png',
      info: '邀请得好礼'
   },
   {
      id:8,
      imgUrl: 'https://image-c.weimobwmc.com/wrz/561bf916717b4bfb98b2e0e8253b8ee8.png',
      info: '拼团更实惠'
   }, {
      id:9,
      imgUrl: 'https://image-c.weimobwmc.com/wrz/c9714ad8b7984a3e9036be0e6f76edf4.png',
      info: '邀请得现金'
   }, {
      id:10,
      imgUrl: 'https://image-c.weimobwmc.com/wrz/f72e68a1c6ed449ab08d093b147043e6.png',
      info: '邀请得会员'
   }, {
      id:11,
      imgUrl: 'https://image-c.weimobwmc.com/wrz/e143a26dc82943ef951a402e00c6bb6b.png',
      info: '积分商城'
   }, {
      id:12,
      imgUrl: 'https://image-c.weimobwmc.com/wrz/fda0c3931b6e4c9786876321a68f1452.png',
      info: '签到得红包'
   }]
}


export default PageModel;
