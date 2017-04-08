function setDate() {
  const now = new Date();
  var seconds,mins,hour,dayNames,day,tz;
  seconds = now.getSeconds();
  mins = now.getMinutes();
  hour = now.getHours();
  tz="AM";
  if (hour>12) {
    hour-=12;
    tz="PM";
  }
  if (hour===0) {
    hour=12;
  }
  if (seconds<10) {
    seconds='0'+seconds;
  }
  if (hour<10) {
    hour='0'+hour;
  }
  if (mins<10) {
    mins='0'+mins;
  }
  document.getElementById("time").innerHTML = hour+':'+mins+':'+seconds+' '+tz;
  dayNames = ["Monday", "Tuesday", "Wednesday", "Thurday", "Friday", "Saturday", "Sunday"];
  day = dayNames[now.getDay()-1];
  document.getElementById("day").innerHTML = day;
}

setInterval(setDate, 1000);  /* 1000 ms */
setDate();