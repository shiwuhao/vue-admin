<template>
   <div>
       <h4 class="title">选择需要添加的表头</h4>
       <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>

       <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange" class="gap">
           <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
       </el-checkbox-group>
       <el-table
               :data="tableData"
               border
               style="width: 100%"
               :default-sort = "{prop: 'date', order: 'descending'}"
               >
           <el-table-column
                   type="selection"
                   width="55">
           </el-table-column>
           <el-table-column
                   prop="date"
                   label="日期"
                   sortable
                   width="180">
           </el-table-column>
           <el-table-column
                   prop="name"
                   label="姓名"
                   sortable
                   width="180">
           </el-table-column>
           <el-table-column
                   prop="address"
                   label="地址"
                   :formatter="formatter">
           </el-table-column>
           <el-table-column label="操作">
               <template scope="scope">
                   <el-button
                           size="small"
                           @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                   <el-button
                           size="small"
                           type="danger"
                           @click="handleDelete(scope.$index, scope.row)">删除</el-button>
               </template>
           </el-table-column>
       </el-table>
   </div>
</template>

<script>
    const cityOptions = ['上海', '北京', '广州', '深圳'];
    export default {
        data() {
            return {
                tableData: [{
                    date: '2016-05-02',
                    name: '王',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }],
                checkAll: true,
                checkedCities: ['上海', '北京'],
                cities: cityOptions,
                isIndeterminate: true
            }
        },
        methods: {
            formatter(row, column) {
                return row.address;
            },
            handleEdit(index, row) {
                console.log(index, row);
            },
            handleDelete(index, row) {
//                console.log(index, row);
                this.tableData.splice(index,1)
            },
            handleCheckAllChange(event) {
                this.checkedCities = event.target.checked ? cityOptions : [];
                this.isIndeterminate = false;
            },
            handleCheckedCitiesChange(value) {
                let checkedCount = value.length;
                this.checkAll = checkedCount === this.cities.length;
                this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
            }
        }
    }
</script>
¶