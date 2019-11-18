<template>
    <div class='bk'>
        <div class='b1'>
          <img class='a1' :src="require('../../assets/my/tb1.png')">
          <img class='a2' :src="require('../../assets/my/tb2.png')">
          <mt-header>
             <router-link to="/index" slot="left">
             <mt-button icon="back">消息</mt-button>
             </router-link>
          </mt-header>
        </div>
       <div class='nr' v-for='(el,i) of lb' :key="i">
             <img :src='el.imga'>
             <span>{{el.name}}</span>
              <span>{{el.sj}}</span>
               <span>{{el.dh}}</span>
       </div>   
    </div>
</template>
<script>
    export default{
        data(){
            return{
              lb:[
                  {name:'张北清',sj:'3分钟前',dh:'建议先服用药物来控制调理，看看效果怎么样...',imga:require('../../assets/my/ystx.png')},
                  {name:'优医客服',sj:'2019-01-12 10：25',dh:'您好，我是优医客服，请问有什么可以帮助您...',imga:require('../../assets/my/kftx.png')},
                  {name:'交易消息',sj:'2019-01-12 10：25',dh:'您刚刚购买了张清北医生咨询服务，可随时与...',imga:require('../../assets/my/jyxx.png')},
                  {name:'通知消息',sj:'2019-01-12 10：25',dh:'5元咨询优惠券已到账，您可进入【我的-优惠...',imga:require('../../assets/my/tzxx.png')},
                  ]    
            }
        },
      props:{
       
      },
      methods:{
          
          }
      }
    
</script>
<style scoped>
   
     /* .bk{
        margin:0px;
        width:369px;height:667px;
        border-radius:40px;
        border:3px solid #000;
        overflow:hidden;
    } */
    .b1{
         position:relative;
        width:100%;height:88px;
        border-bottom:1px solid #f9f9f9;
    }
      .a1{
          width:100%;height:44px;
      }
      .a2{
          position:absolute;
          top:-1px;left:50%;
          margin-left:-90px;
   
      }
      .nr{
          position:relative;
          width:100%;height:70px;
      }
      .nr>img:nth-child(1){
         position:absolute;
         top:10px;left:5px;
      }
      .nr>span:nth-child(2){
         position:absolute;
         font-family: '思源黑体';
         font-weight: 400;
         font-style: normal;
         font-size:14px;
         color: #333333;
         left:60px;top:10px;
      }
      .nr>span:nth-child(3){
         position:absolute;
         font-family: '思源黑体';
         font-weight: 400;
         font-style: normal;
         font-size: 10px;
         color: #CCCCCC; 
         top:10px;right:10px;
      }
      .nr>span:nth-child(4){
         position:absolute;
         font-size: 13px;
         color: #999999;
         font-family: '思源黑体';
         font-weight: 400;
         font-style: normal;
         top:40px;left:60px;
      }
      
</style>