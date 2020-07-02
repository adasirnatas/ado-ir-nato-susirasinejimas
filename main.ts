input.onButtonPressed(Button.A, function () {
    radio.sendString("")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("KADA EISI I LAUKA")
})
basic.showIcon(IconNames.Happy)
