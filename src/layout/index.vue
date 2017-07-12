
<template>
  <div>
      index
  </div>
</template>
<style scoped>
    .login{position: fixed;top:50%;left: 50%;transform: translate(-50%,-50%);border-radius: 10px;padding:20px;border:1px solid #0074e0;box-shadow: 12px 16px 23px #999;}
    .login li{overflow: hidden;margin-bottom: 10px;}
    .login span,.login input,.login label{float: left;}
    .login span{width:56px;line-height: 28px;margin-right:6px;color: #0074e0;  }
    .login input[type=checkbox]{width:16px;height:16px;background: #fff;position: relative;top:2px;margin-right: 4px;}
    .login input[type=text]{border:1px solid #0074e0 !important;}
    .btn-item .login-btn{width:100%;padding:2px 20px;float: none;margin-top: 20px;cursor: pointer;color: #fff;background:#0074e0;}
    .btn-item{text-align: center;}
</style>
<script>
    export default {
        data(){
           return{
               user:{
                   name:'',
                   password:''
               }
           }
        },
        methods:{
            tologin(){
                if(this.user.name&&this.user.password){
                    this.$router.push({ path: '/' });
                }else{
                   alert('不能为空')
                }
            }
        }
    }
</script>