 //shape, scroll i modulates
//@magdaarques
shape([4,3,999]).scrollY(1,[-.1,.1]).out(o0)
shape([4,3,999]).scrollX(1,[.1,-.1]).out(o1)
src(o0).diff(o1,.1).modulate(osc(20),.01).out(o2)
src(o2).modulateScale(o3,1.5,1.1).mult(o3,.19).modulate(o2,.1).scale(1.1,1.01).out(o3)
render(o3)
