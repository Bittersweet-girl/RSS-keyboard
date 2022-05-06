const text = document.createElement("div");
text.className = "text";
text.innerHTML = `<h1>Виртуальная клавиатура</h1>
    <p>Клавиатура создана в операционной системе Windows<br>
    Для переключения языка комбинация: левыe ctrl + shift</p>`;
document.body.append(text);

const display = document.createElement("div");
display.className = "display";
display.innerHTML = '<textarea class="display-textarea"></textarea>';
document.body.append(display);

const keyboard = document.createElement("div");
keyboard.className = "keyboard";
document.body.append(keyboard);