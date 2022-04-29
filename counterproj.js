var counter = document.querySelector(".counter");
var notification = document.querySelector(".notification");

 let count = 0;

 setInterval( ()=>
 {
     if(count<60){
         count++;
        counter.innerHTML = count;
     }
 }
 ,900);

 setTimeout(()=>
 {
     notification.innerHTML ="you're time's up";
 },55558)
