<template>
    <div class="tb">
        <div class="bg">
        <mt-search 
        placeholder="搜索医院 医生 疾病 知识" class="mr">
        <img :src="require('../../assets/my/ld.png')" alt="">
        </mt-search>
        </div>
        <div class="wz"> 
             <div class="wz_1">
                 <div class="wz_img">
                     <img :src="require('../../assets/shouye/zjwz.png')" alt="" style="width:100%">
                 </div>
                 <span>专家问诊</span>
                 <span class="text_color">按科室查找医生</span>
             </div>
             <div class="wz_1">
                  <div class="wz_img">
                     <img :src="require('../../assets/shouye/jswz.png')" alt="" style="width:100%">
                 </div>
                 <span>急速问诊</span>
                 <span class="text_color">20s医生急速回答</span>
             </div>
        </div>
    </div>
    
</template> 
<script>
export default {
    
}
</script>
<style scoped>
    .bg{background: #00c8aa;width: 100%;height: 160px; overflow: hidden;}
    .mr{padding-top: 30px;width: 80%;padding-left: 10px; margin: auto;}
    .wz{width:80%; display: flex; margin:-50px  auto ;justify-content: space-between;background: #fff;box-shadow: 9px 7px 16px #ddd;
    border-radius: 10px;}
    .wz_1{width: 45%; display: flex;flex-direction: column; justify-content:space-around; height: 118px;cursor: pointer;}
    /* .wz_1:hover{cursor: pointer;} */
    .text_color{color:#ddd; font-size: 14px;}
    .wz_img{width:28px; height:26px;margin: 0 auto;}
    .wz::after{content: "";display: table;clear: both;}
   
</style>


