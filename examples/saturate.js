speed=.8
var v0 = ()=>Math.sin(time)
osc(10,.1,4).out(o0)
src(o0).saturate(v0).out(o1)
render()
