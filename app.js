//实例化VUE
new Vue({
	el:"#vue-app",
	data:{
		age:30,
		X:0,
		Y:0
	},
	methods:{
		// greet:function(time){
		// 	return "Good " + time + " " + this.name + " !" ;
		// }
		add:function(){
			this.age++;
		},
		substract:function(){
			this.age--;
		},
		upateXY:function(event){
			this.X = event.offsetX;
			this.Y = event.offsetY;
		},
		StopMove:function(event){
			event.stopPropagation();
		}
	}
});