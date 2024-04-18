// Type some code on a new line (such as "osc().out()"), and press CTRL+shift+enter
s0.initImage("https://upload.wikimedia.org/wikipedia/commons/0/0c/Stop_the_genocide%2C_Free_Palestine_023_Mielenosoitus_palestiinalaisten_tueksi_%2853274234547%29.jpg")
src(s0).blend(src(o0),.4).modulate(o0,.02).hue(()=>Math.cos(time)).scale(1.08,1).contrast(2).posterize(4).out(o0)
