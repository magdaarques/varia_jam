speed = .3
noise(1.2,.01).color(0,0,2).posterize(100).invert([0,1].smooth()).out(o0)
render(o0)
