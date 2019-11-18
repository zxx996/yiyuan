<template>
        <div id='dl'>
             <img class='a1' src='../../assets/my/tb1.png'>
             <img class='a2' src='../../assets/my/tb2.png'>
             <div class='d2'>
               <div class='d3'>
               
               <img src='../../assets/my/tx.png'>
               <span @click="zhuce">注册</span>
               </div>
               <p class='p1'>密码登陆</p>
               <div class='d4'>
                 <input class="inp" label="用户名" placeholder="请输入用户名" v-model="iphone" >
                 <input class="inp" label="密码" placeholder="请输入密码" v-model="upwd">
               </div>
               <button  size="large" @click="login">登陆</button>
             </div>
           </div> 
</template>
<script>
    export default{
        data(){
            return {
            iphone:"",
            upwd:"",
            age:""
        }
        },
        methods:{
            
              login(){
            var reg=/^[a-z0-9]{3,12}$/i;
            if(reg.test(this.iphone)!==true){
                this.$messagebox("消息","用户名 3~12位数字字母");
                return
            }else if(reg.test(this.upwd)!==true){
                this.$messagebox("消息","密码 3~12位数字字母");
                return
            }else{   
                var iphone=this.iphone;
                var  upwd=this.upwd;
                var obj={iphone,upwd};
                
                this.axios.get("login",{params:obj}).then(res=>{
                    var reg=res.data.code;
                   // console.log(res);
                   // console.log(reg);
                    if(reg==1){
                    this.$toast({
                    message:"登录成功",  //消息
                    position:"center",//位置 
                    duration:1000,
                    iconClass:"iconfont icon-gouwucheman",   
                    });
                    this.$router.push("index");
                    }else{
                        this.$messagebox("消息","登录失败")
                    }
                })
            }
        },
        zhuce(){
            this.$router.push("zhuce")
        }
        },
      props:{

      }
    }
</script>
<style scoped>
         #dl{
        
        position:relative;
        width:369px;height:667px;
        border-radius:44px;
        border:3px solid #000;
        overflow:auto;
        box-sizing:border-box;
       }
    .d2{
        position:absolute;
        width:375px;height:200px;
        background:rgba(0, 200, 170, 1);
    }
      .a1{
         position:fixed;
          width:365px;height:44px;
          left:2px;
          z-index:1;
      }
      .a2{
          position:fixed;
          top:-1px;left:95px;
          z-index:1;
   
      }
      .d3{
          display:flex;
          margin-top:44px;
         justify-content:space-around;
      }
      .d3>img{
         border-width: 0px;
         position: absolute;
         left:35px;
         top:44px;
         width: 18px;
         height: 18px;
      }
      .d3>span{
          position:absolute;
          font-family: '思源黑体';
          font-weight: 400;
          font-style: normal;
          font-size: 16px;
          text-align: left;
          color:#ffffff;
          right:50px;
      }
      .p1{
         border-width: 0px;
         position: absolute;
         left: 135px;
         top: 50px;
         width: 97px;
         height: 36px;
         font-family: '思源黑体 Bold', '思源黑体';
         font-weight: 700;
         font-style: normal;
         font-size: 24px;
         color: #FFFFFF;
      }
      .d4{
          position:absolute;
          left:20px;top:120px;
          width:325px;height:281px;
          background:rgba(255, 255, 255, 1);
          border-radius:24px;
      }
      .d4>input:nth-child(1){
         position: absolute;
         left:35px;
         top:30px;
         width: 245px;
         height: 25px;
         background-color: transparent;
         font-family: '思源黑体';
         font-weight: 400;
         font-style: normal;
         font-size: 14px;
         text-decoration: none;
         color: #333333;
         text-align: left;
         border:0px;
         border-bottom:2px solid rgba(0, 200, 170, 1);
         outline-style: none;
         padding:8px;
      }
        .d4>input:nth-child(2){
         position: absolute;
         left:35px;
         top:90px;
         width: 245px;
         height: 25px;
         background-color: transparent;
         font-family: '思源黑体';
         font-weight: 400;
         font-style: normal;
         font-size: 14px;
         text-decoration: none;
         color: #333333;
         text-align: left;
          border:0px;
         border-bottom:2px solid rgba(0, 200, 170, 1);
         outline-style: none;
          padding:8px;
      }
      .d2>button{
          width:235px;height:44px;
          position:absolute;
          top:290px;left:65px;
          background:rgba(0, 200, 170, 1);
          border-radius:24px;
          border:0;
          outline:0;
          color:#FFFFFF;
      }
</style>