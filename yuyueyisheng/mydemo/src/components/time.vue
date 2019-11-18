<template>
    <div>
        <button @click="time1">时期</button>
        <mt-datetime-picker
            ref="picker"
            v-model="pickerVisible"
            type="date"
            year-format="{value} 年"
            month-format="{value} 月"
            date-format="{value} 日"
            @confirm="open">
        </mt-datetime-picker>
    </div>
</template>
<script>
export default {
    data(){
        return{
            year:"",
            month:"",
            data:"",
            pickerVisible:""
        }
    },
    methods:{
        time1(){
            this.$refs.picker.open();
        },
        open(value){
            console.log(value);
            this.year=value.getFullYear();
            this.month=value.getMonth()+1;
            this.data=value.getDate();
            console.log(this.year,this.month,this.data);
            
        }
    }
}
</script>

