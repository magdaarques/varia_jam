//color+hue+shift
//@magdaarques
speed = .3
noise(1.2,.01).contrast(1).color(0,1,2).out(o0)
gradient(1,3).shift(0,.5).add(osc(20,.1,2)).out(o1)
src(o2).shift(.2).layer(src(o0)).add(o1).out(o2)
src(o3).scale(2).diff(o2,2).posterize(1).modulateHue(o2,1).out(o3)
render(o3)
