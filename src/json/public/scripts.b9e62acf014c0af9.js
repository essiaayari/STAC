var countDownDate=new Date("Jan 5, 2024 15:37:25").getTime(),x=setInterval(function(){var t=(new Date).getTime(),e=countDownDate-t,a=Math.floor(e/864e5),n=Math.floor(e%864e5/36e5),o=Math.floor(e%36e5/6e4),r=Math.floor(e%6e4/1e3);document.getElementById("demo").innerHTML=a+"d "+n+"h "+o+"m "+r+"s ",e<0&&(clearInterval(x),document.getElementById("demo").innerHTML="EXPIRED")},1e3);