<template>
    <div class="Mainleft">
        <div class="leftinput">
            <i class="plus">+</i>
            <b-form-input v-model="text" placeholder="ADD A NEW MISSION…"></b-form-input>        
        </div>
        <div class="leftitle">
            <div class="circle"></div>
            <div style="margin-top:-3px;">
                <span class="title">{{title}}</span>
                <div class="smallcircle"></div>
            </div>
        </div>
        <div class="leftime">
            <span>{{Times}}</span>
        </div>
        <div class="leftodolist">
            <todolist></todolist>
        </div>
    </div>
</template>
<script>
import bus from './bus.js'
import todolist from './todolist'
export default {
    data() {
        return {
            text:'',
            title:'The First thing to do today',
            time:1500,
            data:true
        }
    },
    components:{
        todolist
    },
    methods:{
        Time(){
            let vm =this; 
        },
        Timepic(){
            console.log(123) 
        }
        },
    mounted(){
        // this.Time()
    },
    computed:{
        Times(){
            var min=Math.floor(this.time/60)
            var sec=this.time%60
            if(sec<10){
                sec='0'+sec
            }
            return min+':'+sec
        }
    },
    created(){
        let vm =this
        bus.$on('Event',data=>{
             this.data=data.msg
            vm.Time()
        })
  },
   beforeDestroy: function() {
        // [銷毀監聽事件]
        // 最好在组件銷毀前，清除 Event 所有監聽 
        // 如果要指定哪個監聽對應方法，就需要傳入第二個參數(對應$on設定的方法)
        bus.$off('Event');
    }
}
</script>
<style>
.Mainleft{
    display: flex;
    flex-direction: column;
    justify-content:space-between;
    align-items: center;
}
.leftinput{
    width: 445px;
    position: relative;
}
.plus{
    position: absolute;
    top: 0px;
    right: 16px;
    color: #FF4384;
    font-size: 24px;
    font-style:unset;
}
.Mainleft input::placeholder{
    color: #FF4384;
    font-size: 16px;
    font-weight: bold;
    font-style:italic;
}
.leftitle{
    display:flex;
    margin-top: 100px;
}
.title{
    font-size:24px;
    color: #003164;
    font-weight:bold;
    vertical-align: -20%;
}
.circle{
    border-radius: 48px;
    width: 48px;
    height: 48px;
    background-color: #FFEDF7;
    border:2px  #003164 solid;
    margin-right: 15px;
}
.smallcircle{
    border-radius: 12px;
    width: 12px;
    height: 12px;
    background-color: #FFEDF7;
    border:1px  #FF4384 solid;
}
.leftime span{
    font-size: 176px;
    color:#FF4384;
}
.leftime{
    margin-top: -20px;
}
</style>
