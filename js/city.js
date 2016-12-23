var cities = [
	{"id":"01","name":"北京"},
	{"id":"02","name":"上海"},
	{"id":"03","name":"天津"},
	{"id":"04","name":"重庆"},
	{"id":"05","name":"黑龙江"},
	{"id":"06","name":"吉林"},
	{"id":"07","name":"辽宁"},
	{"id":"08","name":"内蒙古"},
	{"id":"09","name":"河北"},
	{"id":"10","name":"山西"},
	{"id":"11","name":"陕西"},
	{"id":"12","name":"山东"},
	{"id":"13","name":"新疆"},
	{"id":"14","name":"西藏"},
	{"id":"15","name":"青海"},
	{"id":"16","name":"甘肃"},
	{"id":"17","name":"宁夏"},
	{"id":"18","name":"河南"},
	{"id":"19","name":"江苏"},
	{"id":"20","name":"湖北"},
	{"id":"21","name":"浙江"},
	{"id":"22","name":"安徽"},
	{"id":"23","name":"福建"},
	{"id":"24","name":"江西"},
	{"id":"25","name":"湖南"},
	{"id":"26","name":"贵州"},
	{"id":"27","name":"四川"},
	{"id":"28","name":"广东"},
	{"id":"29","name":"云南"},
	{"id":"30","name":"广西"},
	{"id":"31","name":"海南"},
	{"id":"32","name":"香港"},
	{"id":"33","name":"澳门"},
	{"id":"34","name":"台湾"}
];

var cityMenu = (function() {
	var cityMenu = function(){
	};
	cityMenu.prototype = {
		depth: 4,
		groups: new Array(),
		init:function(){
			var self = this;
			self.build();
			self.load();
		},
		build:function(){
			var self = this;
			for(var i=0;i<self.depth;i++){
				var flag=document.createElement("select");
				flag.id="city"+(i+1);
				flag.name="city"+(i+1);
				self.groups.push(flag);
				flag.style.width="80px";
				$("#city").append(flag);
			}
			self.groups[self.depth-1].style.display="none";
		},
		load:function(){
			var self = this;
			var city1 = document.getElementById('city1');
			self.clear(city1.options);
			for(var i=0;i<cities.length;i++){
				city1.options.add(new Option(cities[i].name,cities[i].id));
			}
			city1.onchange = function(){
				var id = this.value;
				var xmlhttp = new XMLHttpRequest();
				xmlhttp.open("GET", "city/"+id+".json", false);
				xmlhttp.onreadystatechange = function() {
					if (xmlhttp.readyState == 4) {
						var data = JSON.parse(xmlhttp.responseText);
						self.clear(document.getElementById('city2').options);
						self.clear(document.getElementById('city3').options);
						self.clear(document.getElementById('city4').options);
						self.loadChild2(data[id].data);
					}
				};
				try {
					xmlhttp.send(null);
				} catch (e) {
					console.error("error");
				}
			};
			city1.options[0].selected = true;
			city1.onchange();
		},
		loadChild2:function(data){
			var self = this;
			var city2 = document.getElementById('city2');
			self.clear(city2.options);
			for(i in data){
				city2.options.add(new Option(data[i].name,i));
			}
			city2.onchange = function(){
				var id = this.value;
				self.loadChild3(data[id].data);
			};
			city2.options[0].selected = true;
			city2.onchange();
		},
		loadChild3:function(data){
			var self = this;
			var city3 = document.getElementById('city3');
			self.clear(city3.options);
			for(i in data){
				city3.options.add(new Option(data[i].name,i));
			}
			city3.onchange = function(){
				var id = this.value;
				var city4 = document.getElementById('city4');
				self.clear(city4.options);
				city4.options.add(new Option(data[id].data,id));
			};
			city3.options[0].selected = true;
			city3.onchange();
		},
		clear:function(colls){
			var length = colls.length;
			for(var i=length-1;i>=0;i--){
				colls.remove(i);
			}
		},
	};
	return cityMenu;
})();