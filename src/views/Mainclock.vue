<template>
<div class="Mainclock">
    <div class="Mainclockleft">
        <div class="leftblock1">
            <Mainleft></Mainleft>
        </div>
        <div class="leftblock2">
            <circletime></circletime>
        </div>
    </div>
    
    <div class="Mainclockright">
        <Mainright></Mainright>
    </div>
</div>
</template>
<script>
import Mainright from '../components/Mainclockright'
import Mainleft from '../components/Mainclockleft'
import circletime from '../components/circletime'
export default {
    components:{
        Mainright,
        Mainleft,
        circletime
    }
}
</script>
<style>
.Mainclock{
    display: flex;
}
.Mainclockleft{
    width: 64%;
    background-color: #FFEDF7;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display:flex;
    z-index: 100;
}
.Mainclockright{
    width: 36%;
    background-color: #003164;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    display: flex;
    justify-content:flex-end;
}
.leftblock1{
    margin-left: 8%;
    margin-top: 48px;
    vertical-align: middle;
}
.leftblock2{
    margin-top: 5%;
     margin-left: 8%;
}
</style>
