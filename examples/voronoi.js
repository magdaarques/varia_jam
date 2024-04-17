// voronoi + feedback
voronoi(10,1).out(o0)
voronoi(1,.5).out(o1)
src(o0).mask(src(o1).thresh()).out(o2)
src(o2).modulate(o1,.2).modulate(o3,.7).hue(.2,1).scale(1.06,1).contrast(2).out(o3)
render()
