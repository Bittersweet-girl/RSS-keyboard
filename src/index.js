const text = document.createElement("div");
text.className = "text";
text.innerHTML = `<h1>Виртуальная клавиатура</h1>
    <p>Клавиатура создана в операционной системе Windows<br>
    Для переключения языка комбинация: ctrl + shift</p>`;
document.body.append(text);

const display = document.createElement("div");
display.className = "display";
display.innerHTML = '<textarea class="display-textarea"></textarea>';
document.body.append(display);

const keysArray = {
  en: [
    ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "BackSP"],
    ["Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\"],
    ["CapsLK", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "Enter"],
    ["Shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "&uparrow;", "Shift"],
    ["Ctrl", "Win", "Alt", " ", "Ctrl", "Alt", "&leftarrow;", "&downarrow;", "&rightarrow;"]
  ],
  ru: [
    ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "BackSP"],
    ["Tab", "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ", "/"],
    ["CapsLK", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", "Enter"],
    ["Shift", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", "ё", ".", "&uparrow;", "Shift"],
    ["Ctrl", "Win", "Alt", " ", "Ctrl", "Alt", "&leftarrow;", "&downarrow;", "&rightarrow;"]
  ],
};
function createKeyboard() {
  const keyboard = document.createElement("div");
  keyboard.className = "keyboard";
  for (let j = 0; j < keysArray.en.length; j++){
    const line = document.createElement("div");
    line.className = `line-${j} line`;
    keyboard.append(line);
    for (let i = 0; i < keysArray.en[j].length; i++){
      const btn = document.createElement("span");
      btn.innerHTML = keysArray.en[j][i];
      switch (keysArray.en[j][i]) {
        case "BackSP":
          btn.className = "button-style backspace";
          break;
        case "Tab":
          btn.className = "button-style tab";
          break;
        case "CapsLK":
          btn.className = "button-style capsLock";
          btn.innerHTML += '<span class="light"></span>';
          break;
        case "Enter":
          btn.className = "button-style enter";
          break;
        case "Shift":
          btn.className = "button-style shift";
          break;
        case "&uparrow;":
          btn.className = "button-style up-arrow";
          break;
        case "Ctrl":
          btn.className = "button-style ctrl";
          break;
        case "Win":
          btn.className = "button-style window";
          break;
        case "Alt":
          btn.className = "button-style alt";
          break;
        case "&nbsp;":
          btn.className = "button-style button space";
          break;
        case "&leftarrow;":
          btn.className = "button-style left-arrow";
          break;
        case "&downarrow;":
          btn.className = "button-style down-arrow";
          break;
        case "&rightarrow;":
          btn.className = "button-style right-arrow";
          break;
        default:
          btn.className = "button-style button";
      }
      line.append(btn);
    }
}
document.body.append(keyboard);
}
createKeyboard();


const keys = document.querySelectorAll(".button-style");

window.addEventListener("keydown", (e) => {
  let codeName = e.key; 
  keys.forEach((key) => {
    switch (codeName) {
      case "Control":
        if (key.innerHTML === "Ctrl") {
          key.classList.add("button-press");
        }
        break;
      case "Meta":
        if (key.innerHTML === "Win") {
          key.classList.add("button-press");
        }
        break;
      case "Backspace":
        if (key.innerHTML === "BackSP") {
          key.classList.add("button-press");
        }
        break;
      case "ArrowUp":
        if (key.innerHTML === "↑") {
          key.classList.add("button-press");
        }
        break;
      case "ArrowLeft":
        if (key.innerHTML === "←") {
          key.classList.add("button-press");
        }
        break;
      case "ArrowDown":
        if (key.innerHTML === "↓") {
          key.classList.add("button-press");
        }
        break;
      case "ArrowRight":
        if (key.innerHTML === "→") {
          key.classList.add("button-press");
        }
        break;
      case "CapsLock":
        if (key.innerHTML === 'CapsLK<span class="light"></span>') {
          key.classList.add("button-press");
          key.classList.toggle("capsLock-on");
        }
        break;
    }
    if (key.innerHTML === codeName) {
      key.classList.add("button-press");
    }
  });
});

window.addEventListener("keyup", () => {
  keys.forEach((key) => {
    if (key.classList.contains("button-press")) {
      key.classList.remove("button-press");
    }
  })
})