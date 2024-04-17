//osc i feedback
//@magdaarques
osc(6.23,.1,4).out(o0)
src(o0).rotate(1.6).out(o1)
src(o0).layer(src(o1).mask(shape(4))).modulateScale(o2,2.3).scale(1.01,1.01).out(o2)
render(o2)
