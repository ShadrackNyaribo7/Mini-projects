function inputSpeed(speed) {
    const speed = document.getElementById('speed');
 
 const x = document.createElement("INPUT");
 let demerits = 0;
 let speed = 0;
 //added demerits variable 
   x.setAttribute("type", "number");
   x.setAttribute(speed);
   if (speed < 70){
    return "ok";
   }
   const speedlimit = 70;
   //added speedlimitvariable
   elseif (speed > speedlimit.stepUp(5) ){
    let totaldemerits = demerits++;
    return totaldemerits;
   }
}