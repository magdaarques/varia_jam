speed=.8
var v0 = ()=>Math.sin(time)
osc(10,.1,4).out(o0)
src(o0).saturate(v0).out(o1)
osc(10,.2,8).layer(o1).add(o0,v0).out(o2)
src(o2).mask(shape(4,1).scale(.5,.5)).layer(o2).modulate(o3,.2).scale(1.01,1).out(o3)
render(o3)
