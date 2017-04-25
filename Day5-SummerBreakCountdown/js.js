var countdowndate= new Date("May 12, 2017 13:00:00").getTime();
var x= setInterval(function() {
	var now= new Date().getTime();
	var dist= countdowndate - now;
	var days=Math.floor(dist/(60*60*24*1000)); //1000 for ms
	var hours=Math.floor((dist%(60*60*24*1000))/(1000*60*60));
	var mins=Math.floor((dist%(60*60*1000))/(60*1000));
	var secs=Math.floor((dist%(1000*60))/(1000));
	document.getElementById("down").innerHTML=days+"d "+hours+"h "+mins+"m "+secs+"s ";
	if (dist<0)
	{
		clearInterval(x);
		document.getElementById("down").innerHTML="Woohoo, Summer Holidays !!";
	}
},1000);