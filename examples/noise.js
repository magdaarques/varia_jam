//noise i feedback
//@magdaarques
noise(6.23,.1,4).out(o0)
src(o0).mask(shape(3).thresh(.4).contrast(1)).modulateScale(o0,.10).out(o1)
src(o1).modulatePixelate(o2,10,20).scrollX(.5,.1).modulate(o2,.3,.8).scale(2).out(o2)
render()
