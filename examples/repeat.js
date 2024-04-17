shape([4,3,999]).repeat(({time}) => Math.cos(time)+3,({time}) => Math.sin(time)+3).out(o0)
