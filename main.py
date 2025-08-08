def on_forever():
    led.toggle(randint(0, 4), randint(0, 4))
basic.forever(on_forever)
