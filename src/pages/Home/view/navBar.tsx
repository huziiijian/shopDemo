import React, { useState } from 'react'
import style from '../style/index.less'
import { Link } from 'react-router-dom'

const navBar: React.FC<{
}> = (props) => {

   const [route, setRoute] = useState('intro');
   const imgURL: {unSelected:string,isSelected:string}[] = [
      {unSelected:'https://image-c.weimobwmc.com/wrz/9d0a34ccc1cb486da936a85c89c0e243.png',
      isSelected:'https://image-c.weimobwmc.com/wrz/06627fb59fb9452683d4c33f92d28866.png'},
      {unSelected:'https://image-c.weimobwmc.com/wrz/aaabbdaade274c118f5a8f1d655b09d1.png',
      isSelected:'https://image-c.weimobwmc.com/wrz/ea99fbf1b74e4a73a48aefedf5fabf09.png'},
      {unSelected:'https://image-c.weimobwmc.com/wrz/94b164e3e2e5452aaf523774fc10a21d.png',
      isSelected:'https://image-c.weimobwmc.com/wrz/ac1ee8f5cd0e4c0dbd77278259eaf429.png'},
      {unSelected:'https://image-c.weimobwmc.com/wrz/8c53d57d4afb4088971c7a95a74c83ea.png',
      isSelected:'https://image-c.weimobwmc.com/wrz/d28e4e8b0a9642528eaf461043afdd12.png'},
      {unSelected:'https://image-c.weimobwmc.com/wrz/d86acecf531b407a99abb3286bdb60ca.png',
      isSelected:'https://image-c.weimobwmc.com/wrz/c42482c5622e45e7a812058157483f59.png'}
   ]

   return (
      <div className={style.navBar}>
         <Link onClick={() => setRoute('intro')}
            className={route != 'intro' ? style.navItem : style.isSelected} to="/home/intro">
            <img src={route != 'intro' ? imgURL[0].unSelected : imgURL[0].isSelected }/>
            <p>首页</p>
         </Link>
         <Link onClick={() => setRoute('sort')}
            className={route != 'sort' ? style.navItem : style.isSelected} to="/home/Sort">
            <img src={route != 'sort' ? imgURL[1].unSelected : imgURL[1].isSelected }/>
            <p>分类</p>
         </Link>
         <Link onClick={() => setRoute('find')}
            className={route != 'find' ? style.navItem : style.isSelected} to="/home/find">
            <img src={route != 'find' ? imgURL[2].unSelected : imgURL[2].isSelected }/>
            <p>发现</p>
         </Link>
         <Link onClick={() => setRoute('cart')}
            className={route != 'cart' ? style.navItem : style.isSelected} to="/home/cart">
            <img src={route != 'cart' ? imgURL[3].unSelected : imgURL[3].isSelected }/>
            <p>购物车</p>
         </Link>
         <Link onClick={() => setRoute('mine')}
            className={route != 'mine' ? style.navItem : style.isSelected} to="/home/mine">
            <img src={route != 'mine' ? imgURL[4].unSelected : imgURL[4].isSelected }/>
            <p>我的</p>
         </Link>
      </div>
   )
}

export default navBar
