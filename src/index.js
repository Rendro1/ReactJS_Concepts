import React from 'react'
import ReactDOM from 'react-dom'

let currDate = new Date(2023,10,25,8);
currDate = currDate.getHours();
let greet;
const cssStyle = {
  color:'green'
}

if(currDate>=1 && currDate<12){
  greet = " Good Morning!";
  cssStyle.color="green";
}
else if(currDate>=12 && currDate<19){
  greet = " Good AfterNoon!";
  cssStyle.color="orange";
}
else{
  greet = " Good Night!";
  cssStyle.color="black";
}



ReactDOM.render(
  <h1>Hii Arka, <span style={cssStyle}>{greet}</span></h1>,
  document.getElementById('root')
); 