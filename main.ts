/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Michael B
 * Created on: Sep 2023
 * This program shows temperture in Kelvin
*/

// Variables
let temperature: number

basic.clearScreen()
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function () {
  temperature = input.temperature()
  basic.showString('Temperature is:')
  basic.showNumber(temperature)
})
