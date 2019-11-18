<template>
        <div id='lb'>
                <p>一流的服务</p>
                 <div class='zx'>
                  <span>详情咨询</span>
                 </div>
             <mt-swipe id="lb1" :auto="4000">
                  <mt-swipe-item  class='lb2'>
                     <img :src='a'>
                       <span>张清北</span>
                       <span>儿科</span>
                       <span>最后就诊时间:2019-10-16</span>
                  </mt-swipe-item>
                  <mt-swipe-item  class='lb2'> 
                     <img :src='b'>
                       <span>张清北</span>
                        <span>儿科</span>
                         <span>最后就诊时间:2019-10-16</span>
                  </mt-swipe-item>
                  <mt-swipe-item  class='lb2'>
                     <img :src='c'> 
                       <span>张清北</span> 
                        <span>儿科</span>
                         <span>最后就诊时间:2019-10-16</span>
                   </mt-swipe-item>
            </mt-swipe>
           </div> 
</template>
<script>
    export default{
        data(){
            return{

            }
        },
      props:{
          a:{default:''},
          b:{default:''},
          c:{default:''}
      }
    }
</script>
<style scoped>
       #lb{
           position:absolute;
           width:315px;height:132px;
           background:rgba(255, 255, 255, 1);
             top:215px;left:30px;
          border-radius: 12px;     
       }
       #lb>p{
           font-size:14px;
           font-family: '思源黑体 Bold', '思源黑体';
           font-weight: 700;
           margin-bottom:0px;
       }
       #lb1{
           width:310px;height:112px;
       }
       .lb2>img{
           position:absolute;
           left:20px;top:20px;
       }
      .zx{
          position:absolute;
          width:68px;height:22px;
          right:15px;top:65px;
          border-radius:44px;
          background:rgb(0, 200, 170);
      }
      .zx>span{
          font-family: '思源黑体';
          font-weight: 400;
          font-style: normal;
          font-size: 14px;
          color: #FFFFFF;
          font-size:12px;
      }
      .lb2>span:nth-child(2){
          position: absolute;
          font-size: 14px;
          left:80px;top:20px;
      }
      .lb2>span:nth-child(3){
          position: absolute;
          font-size: 12px;
          left:135px;top: 23px;
          color: #999999;
      }
      .lb2>span:nth-child(4){
          position: absolute;
          font-size: 12px;
          color: #999999;
          left:80px;top:45px;
      }
</style>