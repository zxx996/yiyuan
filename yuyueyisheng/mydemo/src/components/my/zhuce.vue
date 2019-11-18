<template>
        <div id='dl'>
             <img class='a1' src='../../assets/my/tb1.png'>
             <img class='a2' src='../../assets/my/tb2.png'>
             <div class='d2'>
               <div class='d3'>
               <img src='../../assets/my/tx.png'>
               <span @click="login">登陆</span>
               </div>
               <p class='p1'>注册</p>
               <div class='d4'>
                 <input type='text' placeholder='请输入用户名' @change="regs" v-model="iphone">
                 <input type='password' placeholder='请设置密码' v-model="upwd">
               </div>
               <button @click="reg">注册</button>
             </div>
           </div> 
</template>
<script>
    export default{
        data(){
            return{ isreg:true,
            iphone:"",
            upwd:""

            }
        },
     methods:{
          login(){
              this.$router.push("login")
          },
         regs(){
                var iphone=this.iphone;
                var upwd=this.upwd;
                var obj={iphone,upwd}
                this.axios.get("regs",{params:obj}).then(res=>{
                var regs=res.data.code;
                if(regs==1){
                    this.isreg=false;
                    this.$messagebox("消息","电话已注册");
                    return;
                }
                });
            },
            reg(){
                if(!this.isreg){
                    return
                    }else{
                        var iphone=this.iphone;
                        var upwd=this.upwd;
                        var obj={iphone,upwd};
                      this.axios.get("reg",{params:obj}).then(res=>{
                          if(res.data.code==1){
                              this.$toast("注册成功")
                              this.$router.push("login")
                          }else{
                              this.$toast("消息","注册失败")
                          }
                      })  
                    }
            }
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