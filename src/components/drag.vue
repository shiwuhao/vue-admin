<template>
    <div>
        <h4 class="title">列表拖拽排序</h4>
        <ul id="items" class="items">
           <li v-for="item in newslist">{{item}}</li>
        </ul>
    </div>
</template>
<script>
    import Sortable from 'sortablejs'
    export default{
        data(){
            return{
                newslist:['item1','item2','item3','item4','item5']
            }
        },
        mounted(){
        var el = document.getElementById('items');
                Sortable.create(el);
        }
    }
</script>
<style scoped>
    .items li{padding:4px 10px;line-height: 24px;border-radius: 4px;border:1px solid #dfdfdf;}
    .items li::selection{background: #fff;}
</style>