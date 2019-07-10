<template>
    <div class="circletime" >
        <div class="all" style="position:relative;"  @click.capture="change">
        <div id="svgtime" >
            <svg>
                <circle :style="test" id="circle" r="260" cx="270" cy="270"></circle>
            </svg>
        </div>
        <div class="timebutton" :style="timebutton">
            <div class="play" :style="play">
                <div class="playbutton" :style="playbutton">
                </div>
            </div>
        </div>
        </div>
    </div>
</template>
<script>
import bus from './bus.js'
export default {
    data() {
        return {
            timebutton:'background-color: #FF4384;',
            play:'background-color: white;',
            playbutton:'margin-left:10px; width: 0;height: 0;border-style: solid;border-width: 20px 0 20px 34.6px;border-color: transparent transparent transparent #FF4384;',
            open:false,
            test:'animation-play-state:paused;',
            msg:false
        }
    },
    methods:{
        change(){
            var test =document.getElementById('circle')
            console.log(test)
            this.msg=!this.msg
            console.log(this.msg)
            bus.$emit('Event', {
                msg: this.msg
            });
            var timebg="background-color: white;"
            var playbg="background-color: #FF4384;"
            var playbuttonbg=" width: 40px;height: 40px;border-style: double;border-width: 0px 0px 0px 40px;border-color: white;"
            var timebutton='background-color: #FF4384;'
            var play='background-color: white;'
            var playbutton='margin-left:10px; width: 0;height: 0;border-style: solid;border-width: 20px 0 20px 34.6px;border-color: transparent transparent transparent #FF4384;'
            this.open=!this.open
            if(this.open==true){
                this.timebutton=timebg
                this.play=playbg
                this.playbutton=playbuttonbg
                this.test=""
            }
            else{
                this.timebutton=timebutton
                this.play=play
                this.playbutton=playbutton
                this.test="animation-play-state:paused;"
            }
        }
    }
}
</script>
<style>
.circletime{
    border-radius: 540px;
    width: 540px;
    height: 540px;
    border: 4px #FF4384 solid;
    display:  flex;
    align-items: center;
    justify-content:  center;
}
.timebutton{
    border-radius: 500px;
    width: 500px;
    height: 500px;
    border: 4px #FF4384 solid;
    display:  flex;
    align-items: center;
    justify-content:  center;
}
.play{
    border-radius: 100px;
    width: 100px;
    height: 100px;
    display:  flex;
    align-items: center;
    justify-content:  center;
}
#svgtime{
    display:  flex;
    align-items: center;
    justify-content:  center;
}
svg{
    position:absolute;
    left: -4%;
    bottom: 0;
    right: 0;
    top:0;
    margin: auto;
    width: 540px;
    height: 540px;
    transform: rotateY(-180deg) rotateZ(-90deg);
}
svg circle {
  stroke-dasharray: 1651px;
  stroke-dashoffset: 51px;
  stroke-linecap: round;
  stroke-width: 21.5px;
  stroke: #FF4384;
  fill: none;
  animation: countdown 10s linear forwards;
}

@keyframes countdown {
  from{
     stroke-dashoffset: 0px;
  }
  to {
    stroke-dashoffset: 1651px;
  }
}
</style>
