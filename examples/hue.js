s0.initCam()
src(s0).invert(()=>Math.sin(time)).thresh(.5).posterize().color(()=>Math.sin(time)).sub(o0,.03).modulate(o0,.3).hue(()=>Math.sin(time)).out(o0)
