<template>
    <div class="Todopage">
        <div class="Todopagelsit margin">
            <div>
                <todopagelist></todopagelist>
            </div>
            <div class="circletodo">
                <div class="flex">
                    <div class="todocirclebutton">
                        <div class="todobutton">
                            <div class="todoplay">
                                <div class="todoplaybutton">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <span class="time">25:00</span>
                    </div>
                    <div style="margin-top:-8px;">
                        <span style="font-size:16px;color:#003164;font-weight:bold;">the First thing to do today</span>
                    </div>
                </div>
            </div>
        </div>
        <div  class="Todopageview margin">
            <router-view></router-view> 
        </div>
        <div  class="Todopagemark margin">
            <div class="back">
                <h3 @click="backhome">X</h3>
            </div>
            <div class="undertxt">
                <span>POMODORO</span>
            </div>
        </div>
    </div>
</template>
<script>
import todopagelist from '../components/todopagelist'
export default {
    components:{
        todopagelist
    },
    methods:{
        backhome(){
            this.$router.push({path:'/'})
        }
    }
}
</script>
<style>
.Todopage{
    width: 100%;
    background-color: #003164;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    justify-content:space-around;
}
.back{
    color: #ffffff;
    cursor: pointer;
}
.Todopagemark{
    display: flex;
    flex-direction: column;
    justify-content:space-between;
}
.margin{
    margin-top:40px; 
}
.circletodo{
    width: 350px;
    height: 175px;
	border-radius: 350px 350px 0 0;
    background-color: #FFEDF7;
    /* position: relative; */
}
.flex{
    margin-top: -50px;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
}
.Todopagelsit{
    display: flex;
    flex-direction: column;
    justify-content:space-between;
}
.todobutton{
    border-radius: 96px;
    width: 96px;
    height: 96px;
    background-color:#FF4384 ;
    z-index: 10;
    display: flex;
    justify-content:center;
    align-items: center; 
}
.todocirclebutton{
    /* position:absolute;
    top: -20%;
    left:35%; */
    border-radius: 106px;
    width: 106px;
    height: 106px;
    border: 2px #FF4384 solid;
    background-color:#003164 ;
    display: flex;
    justify-content:center;
    align-items: center; 
}
.todoplay{
    background-color: white;
    border-radius: 30px;
    width: 30px;
    height: 30px;
    display:  flex;
    align-items: center;
    justify-content:  center;
}
.todoplaybutton{
    margin-left:4px;
     width: 0;
     height: 0;
     border-style: solid;
     border-width: 8px 0 8px 12.6px;
     border-color: transparent transparent transparent #FF4384;
}
.time{
    font-size: 64px;
    color: #FF4384;
}
</style>
