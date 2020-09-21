import { observable, computed, action } from "mobx";

class Store {
   constructor() {
   }
   @observable goodsInfo: Array<{ // 所有商品信息
      goodId: number,
      goodImg: string,
      goodPrice: number,
      selectedNum: number,
      title: string,
      des: string,
      unit: string,
      typeId?: number
   }> = [{
      goodId: 1,
      goodImg: 'https://image-c.weimobwmc.com/wrz/01db7d6156174910ab0c18988fc2010f.png',
      goodPrice: 21,
      selectedNum: 0,
      title: '手剥橙子生鲜薄皮橙子新西兰产',
      des: '手剥橙子生鲜薄皮橙子新西兰产',
      unit: '盒',
      typeId: 1
   }, {
      goodId: 2,
      goodImg: 'https://image-c.weimobwmc.com/wrz/5bc3503c89f344208294475100bd66bc.png',
      goodPrice: 22,
      selectedNum: 0,
      title: '手剥橙子生鲜薄皮橙子新西兰产',
      des: '手剥橙子生鲜薄皮橙子新西兰产',
      unit: '箱',
      typeId: 1
   }, {
      goodId: 3,
      goodImg: 'https://image-c.weimobwmc.com/wrz/a7b8996288e8470096c7d454777a92fc.png',
      goodPrice: 23,
      selectedNum: 0,
      title: '水果礼盒',
      des: '圣女果 小番茄 约1kg 沙拉生食',
      unit: '盒'
   }, {
      goodId: 4,
      goodImg: 'https://image-c.weimobwmc.com/wrz/b3049971c469489f97ba883323ce7800.png',
      goodPrice: 24,
      selectedNum: 0,
      title: '水果礼盒',
      des: '圣女果 小番茄 约1kg 沙拉生食',
      unit: '箱',
      typeId: 1
   }, {
      goodId: 5,
      goodImg: 'https://image-c.weimobwmc.com/wrz/a7b8996288e8470096c7d454777a92fc.png',
      goodPrice: 25,
      selectedNum: 0,
      title: '水果礼盒',
      des: '圣女果 小番茄 约1kg 沙拉生食',
      unit: '盒',
      typeId: 1
   }, {
      goodId: 6,
      goodImg: 'https://image-c.weimobwmc.com/wrz/b3049971c469489f97ba883323ce7800.png',
      goodPrice: 26,
      selectedNum: 0,
      title: '圣女果 小番茄 约1kg 沙拉生食',
      des: '圣女果 小番茄 约1kg 沙拉生食',
      unit: '箱',
      typeId: 1
   }, {
      goodId: 7,
      goodImg: 'https://image-c.weimobwmc.com/wrz/a7b8996288e8470096c7d454777a92fc.png',
      goodPrice: 27,
      selectedNum: 0,
      title: '圣女果 小番茄 约1kg 沙拉生食',
      des: '圣女果 小番茄 约1kg 沙拉生食',
      unit: '盒',
      typeId: 3
   }, {
      goodId: 8,
      goodImg: 'https://image-c.weimobwmc.com/wrz/01db7d6156174910ab0c18988fc2010f.png',
      goodPrice: 28,
      selectedNum: 0,
      title: '圣女果 小番茄 约1kg 沙拉生食',
      des: '圣女果 小番茄 约1kg 沙拉生食',
      unit: '箱',
      typeId: 5
   }, {
      goodId: 9,
      goodImg: 'https://image-c.weimobwmc.com/wrz/a7b8996288e8470096c7d454777a92fc.png',
      goodPrice: 29,
      selectedNum: 0,
      title: '手剥橙子生鲜薄皮橙子新西兰产',
      des: '手剥橙子生鲜薄皮橙子新西兰产',
      unit: '盒',
      typeId: 4
   }, {
      goodId: 10,
      goodImg: 'https://image-c.weimobwmc.com/wrz/01db7d6156174910ab0c18988fc2010f.png',
      goodPrice: 30,
      selectedNum: 0,
      title: '手剥橙子生鲜薄皮橙子新西兰产',
      des: '手剥橙子生鲜薄皮橙子新西兰产',
      unit: '箱',
      typeId: 3
   }, {
      goodId: 11,
      goodImg: 'https://image-c.weimobwmc.com/wrz/b3049971c469489f97ba883323ce7800.png',
      goodPrice: 31,
      selectedNum: 0,
      title: '手剥橙子生鲜薄皮橙子新西兰产',
      des: '手剥橙子生鲜薄皮橙子新西兰产',
      unit: '盒',
      typeId: 2
   }, {
      goodId: 12,
      goodImg: 'https://image-c.weimobwmc.com/wrz/b3049971c469489f97ba883323ce7800.png',
      goodPrice: 31,
      selectedNum: 0,
      title: '手剥橙子生鲜薄皮橙子新西兰产',
      des: '手剥橙子生鲜薄皮橙子新西兰产',
      unit: '盒',
      typeId: 1
   }, {
      goodId: 13,
      goodImg: 'https://image-c.weimobwmc.com/wrz/b3049971c469489f97ba883323ce7800.png',
      goodPrice: 31,
      selectedNum: 0,
      title: '手剥橙子生鲜薄皮橙子新西兰产',
      des: '手剥橙子生鲜薄皮橙子新西兰产',
      unit: '盒',
      typeId: 2
   }, {
      goodId: 14,
      goodImg: 'https://image-c.weimobwmc.com/wrz/b3049971c469489f97ba883323ce7800.png',
      goodPrice: 31,
      selectedNum: 0,
      title: '手剥橙子生鲜薄皮橙子新西兰产',
      des: '手剥橙子生鲜薄皮橙子新西兰产',
      unit: '盒',
      typeId: 2
   }, {
      goodId: 15,
      goodImg: 'https://image-c.weimobwmc.com/wrz/b3049971c469489f97ba883323ce7800.png',
      goodPrice: 31,
      selectedNum: 0,
      title: '手剥橙子生鲜薄皮橙子新西兰产',
      des: '手剥橙子生鲜薄皮橙子新西兰产',
      unit: '盒',
      typeId: 1
   }, {
      goodId: 16,
      goodImg: 'https://image-c.weimobwmc.com/wrz/b3049971c469489f97ba883323ce7800.png',
      goodPrice: 31,
      selectedNum: 0,
      title: '手剥橙子生鲜薄皮橙子新西兰产',
      des: '手剥橙子生鲜薄皮橙子新西兰产',
      unit: '盒',
      typeId: 1
   }, {
      goodId: 17,
      goodImg: 'https://image-c.weimobwmc.com/wrz/b3049971c469489f97ba883323ce7800.png',
      goodPrice: 31,
      selectedNum: 0,
      title: '手剥橙子生鲜薄皮橙子新西兰产',
      des: '手剥橙子生鲜薄皮橙子新西兰产',
      unit: '盒',
      typeId: 3
   }, {
      goodId: 18,
      goodImg: 'https://image-c.weimobwmc.com/wrz/b3049971c469489f97ba883323ce7800.png',
      goodPrice: 31,
      selectedNum: 0,
      title: '手剥橙子生鲜薄皮橙子新西兰产',
      des: '手剥橙子生鲜薄皮橙子新西兰产',
      unit: '盒',
      typeId: 3
   }, {
      goodId: 19,
      goodImg: 'https://image-c.weimobwmc.com/wrz/b3049971c469489f97ba883323ce7800.png',
      goodPrice: 31,
      selectedNum: 0,
      title: '手剥橙子生鲜薄皮橙子新西兰产',
      des: '手剥橙子生鲜薄皮橙子新西兰产',
      unit: '盒',
      typeId: 4
   }, {
      goodId: 20,
      goodImg: 'https://image-c.weimobwmc.com/wrz/b3049971c469489f97ba883323ce7800.png',
      goodPrice: 31,
      selectedNum: 0,
      title: '手剥橙子生鲜薄皮橙子新西兰产',
      des: '手剥橙子生鲜薄皮橙子新西兰产',
      unit: '盒',
      typeId: 1
   }, {
      goodId: 21,
      goodImg: 'https://image-c.weimobwmc.com/wrz/b3049971c469489f97ba883323ce7800.png',
      goodPrice: 31,
      selectedNum: 0,
      title: '手剥橙子生鲜薄皮橙子新西兰产',
      des: '手剥橙子生鲜薄皮橙子新西兰产',
      unit: '盒',
      typeId: 1
   }, {
      goodId: 22,
      goodImg: 'https://image-c.weimobwmc.com/wrz/b3049971c469489f97ba883323ce7800.png',
      goodPrice: 31,
      selectedNum: 0,
      title: '手剥橙子生鲜薄皮橙子新西兰产',
      des: '手剥橙子生鲜薄皮橙子新西兰产',
      unit: '盒',
      typeId: 1
   }, {
      goodId: 23,
      goodImg: 'https://image-c.weimobwmc.com/wrz/b3049971c469489f97ba883323ce7800.png',
      goodPrice: 31,
      selectedNum: 0,
      title: '手剥橙子生鲜薄皮橙子新西兰产',
      des: '手剥橙子生鲜薄皮橙子新西兰产',
      unit: '盒',
      typeId: 1
   }, {
      goodId: 24,
      goodImg: 'https://image-c.weimobwmc.com/wrz/b3049971c469489f97ba883323ce7800.png',
      goodPrice: 31,
      selectedNum: 0,
      title: '手剥橙子生鲜薄皮橙子新西兰产',
      des: '手剥橙子生鲜薄皮橙子新西兰产',
      unit: '盒',
      typeId: 1
   }, {
      goodId: 25,
      goodImg: 'https://image-c.weimobwmc.com/wrz/b3049971c469489f97ba883323ce7800.png',
      goodPrice: 31,
      selectedNum: 0,
      title: '手剥橙子生鲜薄皮橙子新西兰产',
      des: '手剥橙子生鲜薄皮橙子新西兰产',
      unit: '盒',
      typeId: 1
   }, {
      goodId: 26,
      goodImg: 'https://image-c.weimobwmc.com/wrz/b3049971c469489f97ba883323ce7800.png',
      goodPrice: 31,
      selectedNum: 0,
      title: '手剥橙子生鲜薄皮橙子新西兰产',
      des: '手剥橙子生鲜薄皮橙子新西兰产',
      unit: '盒',
      typeId: 1
   }, {
      goodId: 27,
      goodImg: 'https://image-c.weimobwmc.com/wrz/b3049971c469489f97ba883323ce7800.png',
      goodPrice: 31,
      selectedNum: 0,
      title: '手剥橙子生鲜薄皮橙子新西兰产',
      des: '手剥橙子生鲜薄皮橙子新西兰产',
      unit: '盒',
      typeId: 3
   }, {
      goodId: 28,
      goodImg: 'https://image-c.weimobwmc.com/wrz/b3049971c469489f97ba883323ce7800.png',
      goodPrice: 31,
      selectedNum: 0,
      title: '手剥橙子生鲜薄皮橙子新西兰产',
      des: '手剥橙子生鲜薄皮橙子新西兰产',
      unit: '盒',
      typeId: 3
   }, {
      goodId: 29,
      goodImg: 'https://image-c.weimobwmc.com/wrz/b3049971c469489f97ba883323ce7800.png',
      goodPrice: 31,
      selectedNum: 0,
      title: '手剥橙子生鲜薄皮橙子新西兰产',
      des: '手剥橙子生鲜薄皮橙子新西兰产',
      unit: '盒',
      typeId: 1
   }, {
      goodId: 30,
      goodImg: 'https://image-c.weimobwmc.com/wrz/b3049971c469489f97ba883323ce7800.png',
      goodPrice: 31,
      selectedNum: 0,
      title: '手剥橙子生鲜薄皮橙子新西兰产',
      des: '手剥橙子生鲜薄皮橙子新西兰产',
      unit: '盒',
      typeId: 2
   }];
   @observable orderInfo: Array<{ // 订单所有信息
      goodId: number,
      goodImg: string,
      goodPrice: number,
      selectedNum: number,
      title: string,
      des: string,
      unit: string,
      isSelected?: boolean
   }> = []
   @observable checkoutInfo: Array<{ // 结算的商品信息
      goodId: number,
      goodImg: string,
      goodPrice: number,
      selectedNum: number,
      title: string,
      des: string,
      unit: string,
      isSelected?: boolean;
   }> = []
   @computed get goodTypeCount() {
      return this.orderInfo.length;
   };
   @computed get checkoutTypeCount() {
      return this.checkoutInfo.length;
   };
   @computed get getTotal() {
      let total = 0;
      this.checkoutInfo.forEach((item) => {
         const num = item.selectedNum;
         const price = item.goodPrice;
         total += num * price
      })
      return total
   }
}
const store = new Store
export default store;
