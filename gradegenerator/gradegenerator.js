
function inputMarks(value) {
   const studentMarks = document.getElementById('points');

const value = document.createElement("INPUT");
  value.setAttribute("type", "number");
  value.setAttribute(value);
  if (value > 79){
    return "A";
  }
  else if(value > 60 || 79){
    return "B";
  }
  else if(value > 49 || 59){
    return "C";
  }
  else if(value > 40 || 49){
    return "D";
  }
  else if(value < 40){
    return "E";
  }

}

