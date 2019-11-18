<template>
<div>
	<div class="neike">
		<img src="../../assets/zhaoyiyuan/fanhui.png" @click="fanhui"><p>医院</p>
	</div>
	<header class="header">
         <div class="mint-searchbar head">
            <div class="mint-searchbar-inner ">
               <i class="mintui mintui-search img"></i> 
               <input type="search" placeholder="搜索医院、医院、疾病、知识" class="mint-searchbar-core">
            </div>
       </div>
	   <div class="xuanxiang">
	   		<div class="cs"><p>北京</p><img src="../../assets/zhaoyiyuan/s.png"></div>
			<div class="zh"><p>综合排序</p> <img src="../../assets/zhaoyiyuan/s.png"></div>
	   </div>
	  
    </header> 
	   <div style="margin-top:200px;">
		   <div class="ysjs" v-for="(item,index) of list" :key="index">
				<div><img src="../../assets/zhaoyiyuan/001.jpg" alt=""></div>
				<div>
					<div>{{item.yyname}}}</div>
					<div class="zhuzhi">{{item.dengji}}<span>{{item.leixing}}</span></div>
					<div>&lt; 1.2km</div>
				</div>
			</div>
			
	   </div>
</div>
	
	
</template>
<script>
export default {
	data(){
		return{list:[""]}
	},
	created:function(){
		this.select()
	},
	methods:{
		select(){
			this.axios.get("yiyuan")
			.then(res=>{
				this.list=res.data.data
			})
			.catch(err=>{console.log(err)})
		},
		fanhui(){
			window.history.go(-1);
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
	.xuanxiang{
		width: 100%;
		margin-left:-35px;
		height: 50px;
		padding: 0 50px;
		font-size:15px;
		border:1px solid#f6f8fa;  
	}	
	.cs{		
		display:flex;
		float: left;
		padding-left: 5%;		
	}
	.zh{		
		display:flex;	
		float: right;
		padding-right: 15%;   
	}
	.xuanxiang>div>img{
		width:10px;
		height:10px;
		margin:25px 0 0 8px;
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
		color: red;	
	}
	.ysjs>div:nth-child(2)>div:nth-child(2)>span{
		color: #000;
		margin-left: 15px;	
	}
	.ysjs>div:nth-child(2)>div:nth-child(3){
		position: absolute;
		top:18px;
		right:15px;
		font-size: 10px;
	}
	</style>