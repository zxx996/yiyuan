<template>
    <div>
        <div class="kswy" @click="wz">
            <img :src="require('../../assets/shouye/kswy.png')" alt="">
            <span class="kswy2">快速问医  无需等待</span>
            <span class="kswy3">2W+名义在线问诊</span>
            <a>去咨询</a>
        </div>
        <h3>健康知识</h3>
        <div class="jkzs">
            <ul
                v-infinite-scroll="loadMore"
                infinite-scroll-disabled="loading"
                infinite-scroll-distance="10">
                <li v-for="(item,index) of list" :key="index"  @click="inz(index)">
                    <div class="jkzs2">
                         <div class="jkzs_title">
                             <span>{{item.title}}</span>
                             <span>9999浏览次数</span>
                         </div>
                         <div class="jkzs_img">
                             <img :src="require('../../assets/shouye/kftx.png')" alt="" >
                         </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{list:[]}
    },
    created:function(){
        this.zhishi();
        
    },
    methods:{
        wz(){
            this.$router.push("Home2")
        },
        zhishi(){
            this.axios.get("zhishi").then(res=>{
			//console.log(res)
			var list=res.data.data;
            this.list=list;
            })
        },
        loadMore() {
            this.loading = true;
            setTimeout(() => {
                
                let last = this.list[this.list.length - 1];
                for (let i = 1; i <= 6; i++) {
                    if(i==this.list.length){return}
                //this.list.push(last + i);
                }
                this.loading = false;
            }, 2500);
            },
            inz(index){
			index++
			console.log(index);
			this.$router.push({name:"zhishi",params:{id:index}})
		}
                }
            }
</script>
<style scoped>
    .kswy{position: relative; width:80%;margin: 0 auto;background: #eee;height:80px; cursor: pointer;}
    .kswy>img{width:48px;height: 48px;position: absolute;margin-left: -125px;margin-top: 15px; }
    .kswy2{position: absolute;margin-top: 15px;margin-left: -55px;}
    .kswy3{position: absolute;margin-top: 38px;margin-left: -53px;}
    .kswy>a{position: absolute;margin-top: 25px;margin-left: 85px;text-decoration: none;background: orange;color: papayawhip;padding: 2px;border-radius: 5px;}
    h3{text-align: left;margin-left: 20px;}
    .jkzs{
        
        width: 80%;
        margin: 0 auto;
    }
    .jkzs>ul{
        list-style: none;
        padding: 0;
        }
    .jkzs>ul>li{
        cursor: pointer;
        border-bottom: 1px solid #ccc
    }
    .jkzs2{display: flex;width: 100%;margin-bottom: 1rem;}
    .jkzs_title{
        width: 70%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;}
    .jkzs_title span{text-align: left; font-size: 14px;margin-bottom:0.5rem;  }
    .jkzs_img{
        width: 30%;
    }
    .jkzs_img>img{
        margin-top:1rem;
    }
</style>

