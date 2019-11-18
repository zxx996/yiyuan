<template>
    <div>
        <!--底部导航条-->
    <!--将图片复制指定目录 assets-->
    <!--底部导航条父元素-->
    <mt-tabbar fixed v-model="active">
    <!--添加三个按钮-->
      <mt-tab-item id="tab1" @click.native="changeState(0)">
         <icon 
         :normalIamge="require('../../assets/img/11.png')"
         :selectedImage="require('../../assets/img/1.png')"
         :focused="currentIndex[0].isSelect"></icon>
         首页
      </mt-tab-item>
      <mt-tab-item id="tab2" @click.native="changeState(1)">
         <icon 
         :normalIamge="require('../../assets/img/22.png')"
         :selectedImage="require('../../assets/img/2.png')"
         :focused="currentIndex[1].isSelect"></icon>
         找医生
      </mt-tab-item>
      <mt-tab-item id="tab3" @click.native="changeState(2)">
         <icon 
         :normalIamge="require('../../assets/img/3.png')"
         :selectedImage="require('../../assets/img/3.png')"
         :focused="currentIndex[2].isSelect"></icon>
         知识
      </mt-tab-item>
      <mt-tab-item id="tab4" @click.native="changeState(3)">
         <icon 
         :normalIamge="require('../../assets/img/44.png')"
         :selectedImage="require('../../assets/img/4.png')"
         :focused="currentIndex[3].isSelect"></icon>
         我的
      </mt-tab-item>
    </mt-tabbar>
    </div>  
</template>
<script>
import icon from "./icon.vue";
export default {
     data(){
    return {
      //(1)保存用户选中按钮id
      active:"tab1",
      currentIndex:[
         {isSelect:true},
         {isSelect:false},
         {isSelect:false},
         {isSelect:false},

      ]
    }
  },
  methods:{
     changeState(n){
        for(var i=0;i<this.currentIndex.length;i++){
               if(n==i){
                  this.currentIndex[i].isSelect=true;
               }else{
                  this.currentIndex[i].isSelect=false;
               }
        }
     }
  },
  components:{
     "icon":icon
  }
}
</script>

<style scoped>
   .page-tabbar{
      overflow: hidden;
   }
   .mint-tabbar>.mint-tab-item{
       color: #666;
    }
   .mint-tabbar>.mint-tab-item.is-selected{
      background-color:transparent;
      color: #45c018;
   }
</style>

