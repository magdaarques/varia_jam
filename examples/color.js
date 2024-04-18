speed=.8
osc(10,.1,4).color([1,0,0],[0,1,0],[0,0,1]).out(o0)
src(o0).invert().posterize(2).out(o1)
render()
