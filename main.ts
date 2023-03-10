let nummer = 0;
input.onButtonPressed(Button.A, function () {
    basic.clearScreen();
    led.plot(1, 4);
    led.plot(3, 4);
    led.plot(2, 1);
    led.plot(2, 2);
    led.plot(2, 3);
    nummer++;
});
input.onButtonPressed(Button.B, function () {
    basic.clearScreen();
    led.plot(1, 3);
    led.plot(3, 3);
    led.plot(2, 0);
    led.plot(2, 1);
    led.plot(2, 2);
    nummer++;
});
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen();
    if (nummer < 1) {
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.sad), SoundExpressionPlayMode.InBackground);
        basic.clearScreen();
        basic.showNumber(0);
        basic.pause(500);
        basic.showIcon(IconNames.Sad);
        basic.pause(500);
        basic.showNumber(0);
    } else {
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.happy), SoundExpressionPlayMode.InBackground);
        basic.showNumber(nummer);
    }
});