import Service from '../service'
import Mock from 'mockjs'

var data = Mock.mock('api/goodlist', {
   status: 200,
   message: 'success',
   data: [1, 2, 3, 4]
})

console.log(JSON.stringify(data, null, 4))


export default Mock;