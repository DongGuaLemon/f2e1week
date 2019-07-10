<template>
    <div class="Mainrighticons">
        <div class="icons" @click="gotodo">
            <img src="../assets/baseline_list_white_36dp.png" width="36px" height="36px">
            <img src="../assets/baseline_assessment_white_36dp.png" width="36px" height="36px">
            <img src="../assets/baseline_music_video_white_36dp.png" width="36px" height="36px">
        </div>
        <div class="undertxt">
            <span>POMODORO</span>
        </div>
    </div>
</template>
<script>
export default {
    methods:{
        gotodo(){
            this.$router.push({path:'/todopage'})
        }
    }
}
</script>
<style>
.Mainrighticons{
    display: flex;
    flex-direction: column;
    justify-content:space-between;
    margin-right: 5rem;
}
.icons{
    display: flex;
    flex-direction: column;
}
.icons img{
    margin-top: 30px;
}
.undertxt{
    color: white;
    font-size: 24px;
    font-weight: bold; 
    writing-mode: vertical-lr;
    text-orientation: mixed;
}
</style>
