<template>
    <div>
        <ul class="clearfix poplist">
            <li>
                <el-button type="info" @click="alertbg=!alertbg;affirm=!affirm">确认弹框</el-button>
            </li>
            <li>
                <el-button type="info" @click="geterror()">失败弹框</el-button>
            </li>
            <li>
                <el-button type="info" @click="alertbg=!alertbg;success=!success">成功弹框</el-button>
            </li>
            <li>
                <el-button type="info" @click="alertbg=!alertbg;typeInfo=!typeInfo">填写信息弹框</el-button>
            </li>
        </ul>

        <el-row class="fullscreen" v-show="alertbg">
            <el-col :xs="12" :sm="6" :md="6" :lg="6" class="fullcont" v-show="affirm">
                <div class="tipword gap">确认删除吗？</div>
                <div class="auditbtn">
                    <el-button type="warning">确认</el-button>
                    <el-button type="danger" @click="alertbg=!alertbg;affirm=!affirm">取消</el-button>
                </div>
            </el-col>
            <el-col :xs="12" :sm="6" :md="6" :lg="6" class="fullcont" v-show="error">
                <div class="tipword gap2 errortip"><span class="el-icon-close"></span>失败提示</div>
            </el-col>
            <el-col :xs="12" :sm="6" :md="6" :lg="6" class="fullcont" v-show="success">
                <div class="tipword gap2 oktip"><span class="el-icon-check"></span>成功提示</div>
            </el-col>
            <el-col :xs="12" :sm="6" :md="6" :lg="6" class="fullcont" v-show="typeInfo">
                <h6>
                    <span>填写信息</span>
                    <span class="el-icon-circle-cross close" @click="alertbg=!alertbg;typeInfo=!typeInfo"></span>
                </h6>
                <ul class="datalist">
                    <el-row tag="li">
                        <el-col :xs="5" :sm="5" :md="5" :lg="5" class="item-name">姓名:</el-col>
                        <el-col :xs="16" :sm="16" :md="16" :lg="16"><el-input v-model="input"></el-input></el-col>
                    </el-row>
                    <el-row tag="li">
                        <el-col :xs="5" :sm="5" :md="5" :lg="5" class="item-name">性别:</el-col>
                        <el-col :xs="16" :sm="16" :md="16" :lg="16">
                            <el-radio class="radio" v-model="radio" label="1">男</el-radio>
                            <el-radio class="radio" v-model="radio" label="2">女</el-radio>
                        </el-col>
                    </el-row>
                    <el-row tag="li">
                        <el-col :xs="5" :sm="5" :md="5" :lg="5" class="item-name">出生年月:</el-col>
                        <el-col :xs="16" :sm="16" :md="16" :lg="16">
                            <el-date-picker
                                    v-model="value1"
                                    type="date"
                                    placeholder="选择日期"
                                    >
                            </el-date-picker>
                        </el-col>
                    </el-row>
                </ul>
                <div class="auditbtn">
                    <el-button type="warning">确认</el-button>
                    <el-button type="danger" @click="alertbg=!alertbg;typeInfo=!typeInfo">取消</el-button>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                radio:'',
                input:'',
                value1:'',
                alertbg:false,
                affirm:false,
                error:false,
                success:false,
                typeInfo:false
            }
         },
        methods:{
            geterror(){
                this.alertbg=true;
                this.error=true;
                let self=this;
               if(this.alertbg){
                    setTimeout(() => {
                       self.alertbg = false;
                       self.error = false;
                   }, 1000)
               }

            }
        }
    }
</script>
<style scoped>
    .fullscreen{position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.7);}
    .fullcont{position: absolute;top:50%;left:50%;transform: translate(-50%,-50%);background: #fff;border-radius: 6px;padding-bottom:20px;}
    .tipword{line-height: 50px;text-align: center;font-size: 20px;font-weight: bold;}
    .errortip{color:#FF4949;}
    .oktip{color: #13CE66;}
    .tipword span{margin-right: 6px;}
    .auditbtn{text-align: center;}
    .auditbtn button{margin:0 20px;padding:8px 20px;}
    .fullcont h6{padding-left:10px;line-height: 36px;font-size: 18px;font-weight:normal;position: relative;background: #20A0FF;color: #fff;border-top-left-radius:6px;border-top-right-radius:6px;}
    .fullcont .close{position: absolute;top:6px;right: 6px;cursor: pointer;font-size: 22px;}
    .datalist{margin:20px;}
    .datalist .item-name,.datalist label{line-height: 30px;}
    .datalist input{height: 30px;line-height: 30px;}
    .datalist li{padding:6px 0;}
    .poplist li{float: left;margin:20px;}
</stylescoped>