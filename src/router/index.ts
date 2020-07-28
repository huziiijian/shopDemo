
import AsyncComponent from 'src/components/AsyncComponent'
let RouteConfig: Array<{
   path: string,
   component: any
}> = [
      {
         path: '/error',
         component: AsyncComponent(() => import('src/pages/error'))
      },
      {
         path: '/home',
         component: AsyncComponent(() => import('src/pages/Home'))
      }
   ];

const Routes = RouteConfig.map((item) => {
   return {
      exact: true,
      ...item
   }
})

Routes.push({
   path: '*',
   exact: false,
   component: AsyncComponent(() => import('src/pages/Home'))
})

export default Routes
