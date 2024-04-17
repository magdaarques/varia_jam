// Type some code on a new line (such as "osc().out()"), and press CTRL+shift+enter
// Declare default variable value
myVar = 100;
r = Math.sin(time)*2;
// Define value on key press
document.addEventListener('keydown', ()=>{
	myVar = 3 ;
  	r =  Math.sin(time)*2;
});
// Return to default value after key press
document.addEventListener('keyup', ()=>{
	myVar = 100;
  	r =  Math.cos(time)*2;
});

// Call variable inside of an arrow function
// to update on each frame refresh
osc(
	()=>myVar , 0.1, 0
).rotate(()=>r).thresh(.1).diff(src(o0)).out(o0);  
