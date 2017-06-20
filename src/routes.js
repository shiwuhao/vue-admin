import main from './components/main.vue'
import temTable  from './template/tem-table.vue'
import pages from  './template/pagination.vue'
import temTable2 from './template/tem-table2.vue'
import temTable3 from './template/tem-table3.vue'
const routes=[
    {
        path:'',
        component:main,
        children:[
                {path:'/table/fo',components:{views:temTable,page:pages}},
                {path:'/table/fo2',components:{views:temTable2,page:pages}},
                {path:'/table/fo3',components:{views:temTable3,page:pages}},
                {path:'/theme/fo3',components:{views:temTable2,page:pages}},
                {path:'/theme/fo3',components:{views:temTable2,page:pages}},
                {path:'/theme/fo3',components:{views:temTable2,page:pages}}
        ]
    }
]
export default routes;