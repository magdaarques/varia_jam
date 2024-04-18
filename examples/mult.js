//color+feedback+modulate+diff
//@magdaarques
speed=.8
var v0 = ()=>Math.abs(time)
var v1 = ()=>Math.sin(time)
osc(10,.1,4).out(o0)
src(o0).saturate(v1).out(o1)
osc(10,.2,8).layer(o1).out(o2)
src(o0).modulateScale(o2,1.1,.05).mult(o0,v1).out(o3)
render()
