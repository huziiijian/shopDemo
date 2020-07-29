
import AsyncComponent from 'src/components/AsyncComponent'
let RouteConfig: Array<{
   path: string,
   component: any,
   routes: any
}> = [
      
      {
         path: '/home',
         component: AsyncComponent(() => import('src/pages/Home')),
         routes:[{
               path: '/about/history',
               model: [],
               component: 0
         }]
      },
      {
         path: '/login',
         component: AsyncComponent(() => import('src/pages/Login')),
         routes:[]
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
   component: AsyncComponent(() => import('src/pages/Login')),
   routes:[]
})

export default Routes
