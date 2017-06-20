import main from './components/main.vue'
import temTable  from './template/tem-table.vue'
import pages from  './template/pagination.vue'
import temTable2 from './template/tem-table2.vue'
import temTable3 from './template/tem-table3.vue'
import editor from './components/editor.vue'
import charts from './components/charts.vue'
import drag from './components/drag.vue'
import pic from './components/drag.vue'

const routes=[
    {
        path:'',
        component:main,
        children:[
                {path:'/table/fo',components:{views:temTable}},
                {path:'/table/fo2',components:{views:temTable2}},
                {path:'/table/fo3',components:{views:temTable3}},
                {path:'/theme/fo',components:{views:editor}},
                {path:'/theme/fo2',components:{views:charts}},
                {path:'/theme/fo3',components:{views:drag}},
                {path:'/theme/fo4',components:{views:pages}},
                {path:'/theme/fo5',components:{views:pic}}


        ]
    }
]
export default routes;