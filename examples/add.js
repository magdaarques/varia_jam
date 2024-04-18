// Type some code on a new line (such as "osc().out()"), and press CTRL+shift+enter
s0.initImage("https://upload.wikimedia.org/wikipedia/commons/0/0c/Stop_the_genocide%2C_Free_Palestine_023_Mielenosoitus_palestiinalaisten_tueksi_%2853274234547%29.jpg")
src(s0).color(1,1,0).thresh().color(0,1,1).modulateScale(o0,1.01,1).scale(.9,.8).add(o0,.91).hue(()=>Math.cos(time)).out(o0)
