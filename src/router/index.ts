
import AsyncComponent from 'src/components/AsyncComponent'
let RouteConfig: Array<{
   path: string,
   component: any
}> = [
      {
         path: '/home',
         component: AsyncComponent(() => import('src/pages/Home')),
      },
      {
         path: '/login',
         component: AsyncComponent(() => import('src/pages/Login'))
      },
      {
         path: '/orders',
         component: AsyncComponent(() => import('src/pages/Orders'))
      },
      {
         path: '/balance',
         component: AsyncComponent(() => import('src/pages/Balance'))
      },
      {
         path: '/confirmOrder',
         component: AsyncComponent(() => import('src/pages/ConfirmOrder'))
      },
      {
         path: '/stores',
         component: AsyncComponent(() => import('src/pages/Stores'))
      }
   ];

const Routes = RouteConfig.map((item) => {
   return {
      // exact: true,
      ...item
   }
})

Routes.push({
   path: '*',
   // exact: false,
   component: AsyncComponent(() => import('src/pages/Login'))
})

export default Routes
