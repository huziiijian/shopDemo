import React from 'react'
import style from '../style/index.less'
import { Link } from 'react-router-dom'

const navBar: React.FC<{
   route: string,
   goodTypes: number,
   goodTypeCount: number
   setRoute: (route: string) => void
}> = (props) => {

   const imgURL: { unSelected: string, isSelected: string }[] = [
      {
         unSelected: 'https://image-c.weimobwmc.com/wrz/9d0a34ccc1cb486da936a85c89c0e243.png',
         isSelected: 'https://image-c.weimobwmc.com/wrz/06627fb59fb9452683d4c33f92d28866.png'
      },
      {
         unSelected: 'https://image-c.weimobwmc.com/wrz/aaabbdaade274c118f5a8f1d655b09d1.png',
         isSelected: 'https://image-c.weimobwmc.com/wrz/ea99fbf1b74e4a73a48aefedf5fabf09.png'
      },
      {
         unSelected: 'https://image-c.weimobwmc.com/wrz/94b164e3e2e5452aaf523774fc10a21d.png',
         isSelected: 'https://image-c.weimobwmc.com/wrz/ac1ee8f5cd0e4c0dbd77278259eaf429.png'
      },
      {
         unSelected: 'https://image-c.weimobwmc.com/wrz/8c53d57d4afb4088971c7a95a74c83ea.png',
         isSelected: 'https://image-c.weimobwmc.com/wrz/d28e4e8b0a9642528eaf461043afdd12.png'
      },
      {
         unSelected: 'https://image-c.weimobwmc.com/wrz/d86acecf531b407a99abb3286bdb60ca.png',
         isSelected: 'https://image-c.weimobwmc.com/wrz/c42482c5622e45e7a812058157483f59.png'
      }
   ]

   return (
      <div className={style.navBar}>
         <Link onClick={() => props.setRoute('/home/intro')}
            className={props.route != '/home/intro' ? style.navItem : style.isSelected} to="/home/intro">
            <img src={props.route != '/home/intro' ? imgURL[0].unSelected : imgURL[0].isSelected} />
            <p>首页</p>
         </Link>
         <Link onClick={() => props.setRoute('/home/Sort')}
            className={props.route != '/home/Sort' ? style.navItem : style.isSelected} to="/home/Sort">
            <img src={props.route != '/home/Sort' ? imgURL[1].unSelected : imgURL[1].isSelected} />
            <p>分类</p>
         </Link>
         <Link onClick={() => props.setRoute('/home/find')}
            className={props.route != '/home/find' ? style.navItem : style.isSelected} to="/home/find">
            <img src={props.route != '/home/find' ? imgURL[2].unSelected : imgURL[2].isSelected} />
            <p>发现</p>
         </Link>
         <Link onClick={() => props.setRoute('/home/cart')}
            className={props.route != '/home/cart' ? style.navItem : style.isSelected} to="/home/cart">
            <div className={props.goodTypeCount ? style.count : style.noCount}>
               {props.goodTypeCount}
               </div>
            <img src={props.route != '/home/cart' ? imgURL[3].unSelected : imgURL[3].isSelected} />
            <p>购物车</p>
         </Link>
         <Link onClick={() => props.setRoute('/home/mine')}
            className={props.route != '/home/mine' ? style.navItem : style.isSelected} to="/home/mine">
            <img src={props.route != '/home/mine' ? imgURL[4].unSelected : imgURL[4].isSelected} />
            <p>我的</p>
         </Link>
      </div>
   )
}

export default navBar
