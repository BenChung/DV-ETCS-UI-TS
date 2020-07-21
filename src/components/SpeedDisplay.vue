<template>
	<div id="B" class="etcs-border">
		<SpeedDial id="dial" :Vtrain="Vtrain" :Vperm="Vperm" :Vtarget="Vtarget" :Vint="Vint" :mode="mode" :status="status" :state="state"></SpeedDial>
		<div id="B3" class="etcs-border">{{notification1}}</div>
		<div id="B4" class="etcs-border">{{notification2}}</div>
		<div id="B5" class="etcs-border">{{notification3}}</div>
		<div id="B6" class="etcs-border">{{Vrelease}}</div>
		<div id="B7" class="etcs-border"><img :src="modeIcon"/></div>
	</div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import SpeedDial from '@/components/SpeedDial.vue'
import {Mode} from '../etcsdefns';

@Component({
	components: { SpeedDial },
})
export default class SpeedDisplay extends Vue {
	@Prop()
	private Vtrain = 0;
	@Prop()
	private Vtarget = 0;
	@Prop()
	private Vperm = 0;
	@Prop()
	private Vint = 0;
	@Prop()
	private Vrelease = "";
    @Prop()
    private mode = "";
    @Prop()
    private status = "";
    @Prop()
	private state = "";
	@Prop()
	private conditions: Array<any> = [];
	get notification1() {
		return "";
	}
	get notification2() {
		return "";
	}
	get notification3() {
		return "";
	}
	get modeIcon() {
		switch (this.mode) {
			case Mode.SH:
			return require("@/assets/symbols/Mode/MO_01.png");
			case Mode.TR:
			return require("@/assets/symbols/Mode/MO_04.png");
			case Mode.PT:
			return require("@/assets/symbols/Mode/MO_06.png");
			case Mode.OS:
			return require("@/assets/symbols/Mode/MO_07.png");
			case Mode.SR:
			return require("@/assets/symbols/Mode/MO_09.png");
			case Mode.FS:
			return require("@/assets/symbols/Mode/MO_11.png");
			case Mode.NL:
			return require("@/assets/symbols/Mode/MO_12.png");
			case Mode.SB:
			return require("@/assets/symbols/Mode/MO_13.png");
			case Mode.RV:
			return require("@/assets/symbols/Mode/MO_14.png");
			case Mode.UN:
			return require("@/assets/symbols/Mode/MO_16.png");
			case Mode.LS:
			return require("@/assets/symbols/Mode/MO_21.png");
		}
		return require("@/assets/symbols/Mode/MO_18.png")
	}
}
</script>

<style>
div#B {
	color: white;
}
#dial {
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	width: 274px;
	height: 274px;
}
#B > div {
	text-align: center;
}
#B > #B3 {
	position: absolute;
	left: 86px;
	bottom: 8px;
	height: 36px;
	width: 36px;
}
#B > #B4 {
	position: absolute;
	left: 122px;
	bottom: 8px;
	height: 36px;
	width: 36px;
}
#B > #B5 {
	position: absolute;
	left: 158px;
	bottom: 8px;
	height: 36px;
	width: 36px;
}
#B > #B6 {
	position: absolute;
	left: 8px;
	bottom: 8px;
	height: 36px;
	width: 36px;
}
#B > #B7 {
	position: absolute;
	right: 8px;
	bottom: 8px;
	height: 36px;
	width: 36px;
}
</style>