solid(0,1,[1,0,.5]).hue().out(o0)
gradient(1).color(1,2,.8).hue(.8,()=>time%1+1).posterize(10).out(o1)
shape().scale(()=>time%1+.1).invert([0,1].smooth()).out(o2)
src(o3).layer(src(o3).posterize(2).hue(()=>time%1+10)).mask(o2).posterize(3).diff(o1,9).out(o3)
render()
