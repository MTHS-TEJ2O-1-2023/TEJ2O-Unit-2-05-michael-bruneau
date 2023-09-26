/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Michael B
 * Created on: Sep 2023
 * This program shows temperture in Kelvin
*/

// Variables
let temperatureCelsius: number
let temperatureKelvin: number

basic.clearScreen()
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function () {
  temperatureCelsius = input.temperature()
  temperatureKelvin = temperatureCelsius + 273.15
  basic.showString('Temperature is:')
  basic.showNumber(temperatureKelvin)
  basic.showString('K.')
})
