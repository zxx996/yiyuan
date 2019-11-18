<template>
        <div id='kywz'>
             <img class='a1' src='../assets/tb1.png'>
             <img class='a2' src='../assets/tb2.png'>
             <mt-header class='a3' >
               <router-link to="/" slot="left">
                 <mt-button icon="back">开药问诊</mt-button>
               </router-link>
            </mt-header>
            <div class="a4" v-for="(item,index) of el" :key="index">
                <img :src="item.imgs" alt="">
                <span>{{item.name}}</span>
                <span>{{item.ks}}</span>
                <span>{{item.zt}}</span>
                <span>{{item.zz}}</span>
                <span>{{item.sj}}</span>
            </div>
        </div> 
</template>
<script>
    export default{
        data(){
            return{
               el:[
                   {name:'张清风',ks:'消化内科',zt:'待接诊',zz:'主诉：最近总是腹泻  腹泻时肚子疼',sj:'2017-09-02 10:33',imgs:require('../assets/ystx.png')},
                   {name:'张清风',ks:'消化内科',zt:'已开药待审核',zz:'主诉：最近总是腹泻  腹泻时肚子疼',sj:'2017-09-02 10:33',imgs:require('../assets/ystx.png')},
                   {name:'张清风',ks:'消化内科',zt:'处方审核通过',zz:'主诉：最近总是腹泻  腹泻时肚子疼',sj:'2017-09-02 10:33',imgs:require('../assets/ystx.png')},
                   {name:'张清风',ks:'消化内科',zt:'处方未通过审核',zz:'主诉：最近总是腹泻  腹泻时肚子疼',sj:'2017-09-02 10:33',imgs:require('../assets/ystx.png')}
                   ]
            }
        },
      props:{
        
      }
    }
</script>
<style scoped>
    #kywz{
        position: relative;
    }
      .a1{
          width:100%;height:44px;
      }
      .a2{
          position:absolute;
          top:-1px;left:50%;
          margin-left:-90px;
      }
      .a3{
          background: #ffffff;
      }
      .mint-header-title{
          color: black;
      }
      .a4{
          position: relative;
          width: 335px;height:120px;
          top: 12px;
          margin-bottom: 15px;
          left: 12px;
      }
      .a4>img{
          position: absolute;
          left:10px;
      }
      .a4>span:nth-child(2){
          position: absolute;
          left:70px;top:5px;
          font-family: '思源黑体 Bold', '思源黑体';
          font-weight: 700;
          color: #1E1E1E;
          font-size: 12px;
      }
       .a4>span:nth-child(3){
           position: absolute;
            left:120px;top:5px;
           font-family: '思源黑体';
           font-weight: 400;
           color: #999999;
            font-size: 12px;
       }
        .a4>span:nth-child(4){
          position: absolute;
          right: 0;
          font-size: 12px;
          font-family: '思源黑体';
          font-weight: 400;
          font-style: normal;
          font-size: 14px;
          text-align: left;
          color: #FFCC00;
        }
       .a4>span:nth-child(5){
           position: absolute;
           left:20px;top:60px;
           font-family: '思源黑体';
           font-weight: 400;
           font-style: normal;
           font-size: 14px;
           text-align: left;
       }
       .a4>span:nth-child(6){
           position: absolute;
          left:20px;
          top: 100px;
         font-size: 12px;
        color: #CCCCCC;
       }
</style>