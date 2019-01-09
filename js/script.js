/* Вытащим в переменную значения id color and clock
 для динамического изменения того, что находиться под
 данными id*/
var clock = document.getElementById('clock');
var color = document.getElementById('color');

function clockStart() {
    var time = new Date();
    var h = time.getHours().toString(); // т.к getHours - int преобразовываем в строку
    var m = time.getMinutes().toString();
    var s = time.getSeconds().toString();
    /* наш формат подрузамевает вывод в 24ч формате.
    Например:09:02:01 а будет выводить 9:2:1
    Поэтому проверим длину и поставим 0 если < 2*/
    if (h.length < 2) {
        h = '0' + h;
    }
    if (m.length < 2) {
        m = '0' + m;
    }
    if (s.length < 2) {
        s = '0' + s;
    }

    var clockString = h + ':' + m + ':' + s;
    var colorString = '#' + h + m + s;
    // заменяем статичные данные в наших переменных
    clock.textContent = clockString;
    color.textContent = colorString;
    //меняем цвет экрана
    document.body.style.background = colorString;
}
// повторение функции каждую секунду.Пишем 1000мс = 1с т.к setInterval(function, milliseconds)
clockStart();
setInterval(clockStart,1000);
