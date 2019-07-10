<template>
    <div class="todolist">
        <ul>
            <li v-for="(item,index) in list" :key="index">
                <div class="todolistall">
                    <span class="todolistmain">{{item.main}}</span>
                    <img src="../assets/baseline-play_circle_outline-24px.svg"/>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            list:[
                {main:'the second thing to do today',id:1},
                {main:'the third thing to do today',id:2},
                {main:'the forth thing to do today',id:3},
            ]
        }
    },
}
</script>
<style>
.todolistmain{
    font-size: 16px;
    font-weight: bold;
}
.todolist ul{
    list-style-type:circle;
    font-size:24px;
}
.todolist li{
    border-bottom:1px #E1D7E6 solid; 
}
.todolist{
    width: 445px;
    position:relative;
}
.todolist img{
    position: absolute;
    right:0px;
    margin-top: 10px;
}
</style>
