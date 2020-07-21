<template>   <div id="dmi">
    <div id="A">
      <div id="A1" class="etcs-border"></div>
      <DistanceToTarget :mode="mode" :status="status" :state="state" v-bind:distance="500"></DistanceToTarget>
    </div>
    <SpeedDisplay id="B" :Vtrain="Vtrain" :Vperm="Vperm" :Vtarget="Vtarget" :Vint="Vint" :mode="mode" :status="status" :state="state"></SpeedDisplay>
    <div id="C"></div>
    <div id="D" class="etcs-border"></div>
    <div id="E"></div>
    <div id="F"></div>
    <div id="G"></div>
    <div id="Z"></div>
    <div id="Y"></div>
    {{ message }}
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import SpeedDisplay from '@/components/SpeedDisplay.vue'
import DistanceToTarget from '@/components/DistanceToTarget.vue'

@Component({
  components: {
    SpeedDisplay,
    DistanceToTarget
  },
})
export default class App extends Vue {
  // eslint-disable-next-line
  private connection: any; 
  private Vtrain=0;
  private Vperm=0;
  private Vtarget=0;
  private Vint=0;
  private mode="";
  private status="";
  private state="";
  created() {
      console.log("opening connection to ETCS server");
      this.connection = new WebSocket("ws://localhost:8088/etcs");
      const that = this;
      this.connection.onmessage = function (evt: any) {
        const data = JSON.parse(evt.data);
        console.log(data);
        that.Vtrain = data.speed;
        that.Vperm = data.speedLimit;
      }
      this.connection.onopen = function (evt: any) {
          console.log(evt);
          console.log("connected");
      }
  }
}
</script>

<style>
#dmi {
  position: absolute;
  width: 640px;
  height: 480px;
  background-color: rgb(3, 17, 34);
}
#dmi > div {
  font-family: sans-serif;
}
#dmi > #A {
  position: absolute;
  width: 54px;
  height: 300px;
  top: 15px;
  left: 0px;
}
#dmi > #B {
  position: absolute;
  width: 278px;
  height: 298px;
  top: 15px;
  left: 54px;
}
#dmi > #C {
  position: absolute;
  width: 334px;
  height: 50px;
  top: 315px;
  left: 0px;
}
#dmi > #D {
  position: absolute;
  width: 244px;
  height: 298px;
  top: 15px;
  left: 334px;
}
#dmi > #E {
  position: absolute;
  width: 334px;
  height: 100px;
  top: 365px;
  left: 0px;
}
#dmi > #F {
  position: absolute;
  width: 60px;
  height: 450px;
  top: 15px;
  left: 580px;
}
#dmi > #G {
  position: absolute;
  width: 246px;
  height: 150px;
  top: 315px;
  left: 334px;
}
#dmi > #Z {
  position: absolute;
  width: 640px;
  height: 15px;
  top: 0px;
  left: 0px;
}
#dmi > #Y {
  position: absolute;
  width: 640px;
  height: 15px;
  top: 465px;
  left: 0px;
}
#A1 {
  position: absolute;
  top: 0;
  left: 0;
  width: 52px;
  height: 52px;
}
.etcs-border {
  border-top: 1px solid black;
  border-left: 1px solid black;
  border-right: 1px solid rgb(8, 24, 57);
  border-bottom: 1px solid rgb(8, 24, 57);
  border-top: 1px solid black;
  border-left: 1px solid black;
  border-right: 1px solid rgb(8, 24, 57);
  border-bottom: 1px solid rgb(8, 24, 57);
}
</style>
