"""
Created by: Michael B
Created on: Sep 2023
This module is a Micro:bit MicroPython program
"""

from microbit import *

# our variavbles
temperatureCelsius = 0
temperatureKelvin = 0

display.clear()
display.show(Image.HAPPY)

while True:
    if button_a.is_pressed():
        temperatureCelsius = input.temperature()
        temperatureKelvin = temperatureCelsius + 173.15
        temperatureKelvin = round(temperatureKelvin)
        display.show(("The temperature is:") + (str(temperatureKelvin)) + ("K."))
