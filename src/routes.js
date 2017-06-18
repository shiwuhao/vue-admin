import sidenav  from './nav/sidenav.vue'
import temTable  from './template/tem-table.vue'
import pages from  './template/pagination.vue'
const routes=[
    {
        path:'/',
        components:{
            sidenav:sidenav,
            views:temTable,
            page:pages
        }
    }
]
export default routes;