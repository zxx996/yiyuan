<template>
<div>
     <div class="lb">
            <ul>
                <li>
                    <div style="width:25px;height:28px; margin:auto;">
                        <img :src="require('../../assets/shouye/kywz.png')" alt=""  style="width:100%">
                    </div>
                    <span style="font-size:14px;">开药问诊</span>
                </li>
                <li>
                    <div style="width:25px;height:28px; margin:auto;">
                        <img :src="require('../../assets/shouye/zyy.png')" alt=""  style="width:100%">
                    </div>
                    <span style="font-size:14px;" @click="zhaoyiyuan">找医院</span>
                </li>
                <li>
                    <div style="width:25px;height:28px; margin:auto;">
                        <img :src="require('../../assets/shouye/blcz.png')" alt=""  style="width:100%">
                    </div>
                    <span style="font-size:14px;">疾病查找</span>
                </li>
                <li>
                    <div style="width:25px;height:28px; margin:auto;">
                        <img :src="require('../../assets/shouye/jkzs.png')" alt=""  style="width:100%">
                    </div>
                    <span style="font-size:14px;">健康知识</span>
                </li>
            </ul>
        </div>
        </div>
</template>
<script>
export default {
        methods:{
            zhaoyiyuan(){
                this.$router.push("zhaoyiyuan")
            }
            
        }
}
</script>
<style scoped>
.lb>ul{list-style: none; display: flex; justify-content: space-between;padding: 0;}
.lb>ul>li{display: flex;flex-direction: column;justify-content: space-between; cursor: pointer;}
 .lb{width: 80%; margin: 0 auto;margin-top: 70px;}
</style>

