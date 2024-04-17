//Feedback shape,gradient,solid
//@magdaarques
shape([2,3,4,999]).out(o0)
gradient(1).out(o1)
solid([1,0,0],[0,1,0],[0,0,1]).out(o2)
//here the feedback calling the same output
src(o3)
.layer(src(o2).diff(o0,.9))
  .modulate(osc(40,.04,2),0.005).diff(src(o3),.9)
  .modulateScale(src(o1),0.01,1.01)
  .out(o3)
render(o3)
