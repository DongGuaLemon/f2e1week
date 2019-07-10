<template>
    <div class="list">
         <div class="iconslist">
             <ul style="list-style-type:none" v-for="(item,index) in list" :key="index">
                <li @click="changestate(index)" :style="clickstyle(index)"><img :src="item.imgsrc" width="36px" height="35px"><span>{{item.title}}</span></li>
             </ul>
        </div>
    </div>
</template>
<script>
import listImg from '../assets/baseline_list_white_36dp.png';
import analImg from '../assets/baseline_assessment_white_36dp.png';
import ringImg from '../assets/baseline_music_video_white_36dp.png';
export default {
    data() {
        return {
            unclicklist:'color: #ffffff;opacity: 0.2;',
            clicklist:'color: #FF4384;opacity: 1;',
            list:[
                {imgsrc:listImg,title:'TO-DO LIST',click:true},
                {imgsrc:analImg,title:'ANALYTICS',click:false},
                {imgsrc:ringImg,title:'RINGTONES',click:false}
                ]
        }
    },
    methods:{
        clickstyle(index){
            if(this.list[index].click==true){
                return this.clicklist
            }
            else{
                return this.unclicklist
            }
        },
        changestate(i){
            for(let x in this.list){
                if(x==i){
                    this.list[i].click=true
                }
                else{
                    this.list[x].click=false
                }
            }
        }
    }
}
</script>
<style>
.iconslist ul li img{
    vertical-align: middle;
}
.iconslist ul li{
    display: block;
    line-height: 50px;
     height: 80px;
}
.iconslist{
    font-size: 36px;
    padding-top:10px; 
}
.iconslist img{
    margin-top:-6px; 
    cursor: pointer;
}
.iconslist span{
    padding:15px; 
    cursor: pointer;
}
</style>
