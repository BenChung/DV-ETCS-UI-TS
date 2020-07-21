<template>
	<div id="A23" class="etcs-border">
		<div id="A2">{{distance}}</div>
		<div id="A3">
			<svg id="dtti">
				<path v-for="marker in dashes" v-bind:key="marker.distance" :d="marker.path" class="distance-dash" :stroke-width="marker.width"></path>
				<path stroke="#fff" stroke-width="10" :d="analogpath"></path>
			</svg>
		</div>
	</div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

function mapHeight(distance: number): number {
	if (distance > 1000) distance = 1000;
	if (distance <= 100) {
		const covered = 185-152;
		const amount = (1 - distance/100)*covered;
		return 152 + amount;
	}
    const maxVal = Math.log(1000); 
    const minVal = Math.log(97);
    const top = 1; const bottom = 152; 
    const height = bottom - top;
	const pca = (Math.log(distance) - minVal)/(maxVal - minVal);
	return (1 - pca)*height + top;

}
function dashInfo(distance: number): {distance: number; path: string; width: number} {
	const vdist = mapHeight(distance);
	return {distance:distance,
			path:`M ${distance % 500 == 0 ? 12 : 16} ${vdist} L 25 ${vdist}`,
			width: distance % 500 == 0 ? 2 : 1};
}
@Component({

})
export default class DistanceToTarget extends Vue {
    @Prop()
    private mode = "";
    @Prop()
    private status = "";
    @Prop()
    private state = "";
    @Prop()
    private distance = 0;
    private dashes: {distance: number; path: string; width: number}[] = [];
    created() {
		for (let distance = 0; distance <= 1000; distance += 100) {
			this.dashes.push(dashInfo(distance));
		}
    }
    get analogpath() {
        return "M 34 186 L 34 " + mapHeight(this.distance);
    }
}
</script>
<style>
#A23 {
	position: absolute;
	left: 0;
	top:55px;
	height: 219px;
	width: 52px;
}
#A2 {
	position: absolute;
	top: 0px;
	width: 51px;
	height: 30px;
	text-align: right;
	vertical-align: middle;
	line-height: 30px;
	color: rgb(195,195,195);
	font-size: 10px;
	padding-right: 3px;
}
#A3 > svg {
	position: absolute;
	top: 28px;
	width: 54px;
	height: 193px;
}
.distance-dash {
	stroke: #fff;
}
</style>