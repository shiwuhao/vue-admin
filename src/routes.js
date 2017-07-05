import main from './layout/main.vue'
import topbar from './layout/topbar.vue'
import sidebar from './layout/sidebar.vue'
import viewarea from './layout/viewarea.vue'


//表单和表格
import temTable  from './template/tem-table.vue'
import temTable2 from './template/tem-table2.vue'
import temTable3 from './template/tem-table3.vue'
//组件
import editor from './components/editor.vue'
import drag from './components/drag.vue'
import pic from './components/userpic.vue'
import popup from './components/pop-up.vue'
import pages from  './template/pagination.vue'
//图表
import line from './chart/linechart.vue'
import bar from './chart/barchart.vue'

import login from './layout/login.vue'
const routes=[
    {
        path:'',
        component:main,
        children:[
                {path:'',components:{topbar:topbar,sidebar:sidebar,viewarea:viewarea},
                    children:[
                        {path:'/table/tables',components:{views:temTable}},
                        {path:'/table/form',components:{views:temTable2}},
                        {path:'/table/selftable',components:{views:temTable3}},
                        {path:'/theme/editor',components:{views:editor}},
                        {path:'/theme/drag',components:{views:drag}},
                        {path:'/theme/pages',components:{views:pages}},
                        {path:'/theme/picupload',components:{views:pic}},
                        {path:'/theme/popin',components:{views:popup}},
                        {path:'/chart/line',components:{views:line}},
                        {path:'/chart/bar',components:{views:bar}}
                    ]
                }
        ]
    },
    {
        path:'/login',
        component:login
    }
]
export default routes;