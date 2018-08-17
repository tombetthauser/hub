var t = (Math.random() * 600) + 100;
var a = ["http://www.tombetthauser.com/numbers", "http://www.tombetthauser.com/sad", "http://www.tombetthauser.com/greenbank"];
var l = (a.length) - 1;
var x = Math.round(Math.random() * l);
var ca = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];
var cal = ca.length - 1;
var cs = "#";

colors();

setTimeout(function(){
	window.location = a[x];
},t)

function colors(){
	setInterval(function(){
		cs = "#";
		ctf();
		cp();
		document.getElementById("bod").style.backgroundColor = cs;
		colors();
	}, ctf());
}

function ctf(){
	var i = 0;
	i =+ Math.round(Math.random() * 100) + 25;
	return i;
}

function cp(){
	for(i=0;i<6;i++){
		var y = Math.round(Math.random() * cal)
		cs += ca[y];
	}
}