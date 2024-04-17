
 
// Type some code on a new line (such as "osc().out()"), and press CTRL+shift+enter
// licensed with CC BY-NC-SA 4.0 https://creativecommons.org/licenses/by-nc-sa/4.0/
height = window.innerHeight*0.06
paraula = "var|a.z0n3"
p5 = new P5();

p5.draw = () => {
  //p5.font=loadFont("https://github.com/magdaarques/varia_jam/blob/main/examples/fonts/Roberte-Regular.otf");
  p5.background(200,200,220);
  p5.fill(0,0,0);
  p5.textSize(height*3);
  p5.textLeading(height * 10.5);
  p5.textFont("serif");
  //p5.textFont(font);
  for(let y=0; y<p5.windowWidth; y=y+80){
  p5.text(paraula,y+80,y,p5.windowWidth, p5.windowHeight);
  }
} 

p5.hide();

s0.init({ src: p5.canvas });
render(o1)

txt = () => src(s0)
o = () => osc(6,0.06,0)
txt().modulate(osc(6,.1,3),.4).out(o0);
gradient(8).diff(o0,.2).modulateHue(o1,.8).posterize(7).modulate(o0,.3).hue(.02,.01).out(o1);
