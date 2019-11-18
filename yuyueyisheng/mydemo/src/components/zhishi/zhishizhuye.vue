<template>
<div>
	<div class="neike">
		<img src="../../assets/fanhui.png"><p>知识</p>
	</div>
	<header class="header">
         <div class="mint-searchbar head">
            <div class="mint-searchbar-inner ">
               <i class="mintui mintui-search img"></i> 
               <input type="search" placeholder="医疗百科、疾病、知识、" class="mint-searchbar-core">
            </div>
       </div>  
    </header> 
	   <div style="margin-top:130px;">
		   <div class="ysjs" v-for="(item,index) of list" :key="index" @click="inz(index)">
				<div><img src="../../assets/zhishi/fengshi.jpg" alt=""></div>
				<div>
					<div>{{item.title}}</div>
					<div class="zhuzhi">{{item.body}}}</div>
					<div></div>
				</div>
			</div>					
	   </div>
</div>
	
	
</template>
<script>
export default {
	data(){
		return{list:[]}
	},
	created:function(){
		this.axios.get("zhishi").then(res=>{
			//console.log(res)
			var list=res.data.data;
			this.list=list;
			//onsole.log(this.list)
		})
	},
	methods:{
		inz(index){
			index++
			console.log(index);
			this.$router.push({name:"zhishi",params:{id:index}})
		}
	}
}
</script>

<style scoped>
	.neike{
		position: fixed;
      	top: 0;left: 0;;
		display:flex;
		width:100%;
		height: 70px;
		line-height: 60px;
		text-align: left;
		background-color: rgba(255, 255, 255, 1) !important;
		z-index: 10;
	}
	.neike>p{
		font-size: 18px;
		font-weight: 600;
	}
	.neike>img{
		width:20px;
		height:20px;
		padding:40px 10px 0 15px;
	}
	.header{
       	position: fixed;
		top: 70px;
		left: 0;
		width: 100%;
		background-color: #fff;
		z-index: 10;
   	}
   	.head{
     background-color: #fff; 
   	}
   	.mint-searchbar::before{
   	    border:0px solid red !important; 
   	}
   	.mint-searchbar-inner{
		border:1px solid #f6f8fa;  
		border-radius: 20px;
	}
	.mint-searchbar-core{
		width:90%;
	}
	.mint-searchbar-inner .mintui-search{
		font-size:20px  !important;
		margin-left: 10px;
		margin-right: 10px;
		margin-top: 3px;
	}
	
	.ysjs{
		display: flex;
		font-size: 12px;
		text-align: left;
		margin-top: 15px;
		padding-left:10px
	}
	.ysjs>div>div{
		margin-top: 8px;
		font-size: 14px;
	}
	.zhuzhi{
		width: 80%;
		overflow:hidden; 
		text-overflow:ellipsis;
		display:-webkit-box; 
		-webkit-box-orient:vertical;
		-webkit-line-clamp:1; 
	}
	.ysjs>div>img{
		width: 70%;
	}
	.ysjs>div:nth-child(1){
		width: 30%
	}
	.ysjs>div:nth-child(2){
		width: 80%;
		position: relative;
	}
	.ysjs>div:nth-child(2)>div:nth-child(2){
		font-size: 12px;
	}
	.ysjs>div:nth-child(2)>div:nth-child(3){
		position: absolute;
		top:18px;
		right:25px;
		font-size: 14px;
	}
	</style>