<template>
    <div>
        <div class="inputclass">
            <i class="plus">+</i>
            <b-form-input v-model="text" placeholder="ADD A NEW MISSION…"></b-form-input>        
        </div>
        <div class="todo">
            <span class="nav">TO-DO</span>
            <todolist></todolist>
            <span class="nav">DONE</span>
        </div>        
    </div>
</template>
<script>
import todolist from './todolist'
export default {
    components:{
        todolist
    },
    data() {
        return {
            text:''
        }
    },
}
</script>
<style>
.inputclass{
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
.inputclass input::placeholder{
    color: #FF4384;
    font-size: 16px;
    font-weight: bold;
    font-style:italic;
}
.todo .todolist ul{
    font-size: 30px;
    color: #ffffff;
}
.todo .nav{
    width: 445px;
    height: 44px;
    background-color: rgba(255, 255, 255, 0.2);
    padding-top: 1%;
    padding-left: 2%;
    font-size: 23px;
    color: #ffffff;
    font-weight: bold;
}
.todo{
    margin-top: 4rem;
}
</style>
