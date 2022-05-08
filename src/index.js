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
  enShift: [
    ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "BackSP"],
    ["Tab", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "{", "}", "|"],
    ["CapsLK", "A", "S", "D", "F", "G", "H", "J", "K", "L", ":", '"', "Enter"],
    ["Shift", "Z", "X", "C", "V", "B", "N", "M", "<", ">", "?", "&uparrow;", "Shift"],
    ["Ctrl", "Win", "Alt", " ", "Ctrl", "Alt", "&leftarrow;", "&downarrow;", "&rightarrow;"]
  ],
  ru: [
    ["ё", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "BackSP"],
    ["Tab", "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ", "\\"],
    ["CapsLK", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", "Enter"],
    ["Shift", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ".", "&uparrow;", "Shift"],
    ["Ctrl", "Win", "Alt", " ", "Ctrl", "Alt", "&leftarrow;", "&downarrow;", "&rightarrow;"]
  ],
  ruShift: [
    ["Ё", "!", '"', "№", ";", "%", ":", "?", "*", "(", ")", "_", "+", "BackSP"],
    ["Tab", "Й", "Ц", "У", "К", "Е", "Н", "Г", "Ш", "Щ", "З", "Х", "Ъ", "/"],
    ["CapsLK", "Ф", "Ы", "В", "А", "П", "Р", "О", "Л", "Д", "Ж", "Э", "Enter"],
    ["Shift", "Я", "Ч", "С", "М", "И", "Т", "Ь", "Б", "Ю", ",", "&uparrow;", "Shift"],
    ["Ctrl", "Win", "Alt", " ", "Ctrl", "Alt", "&leftarrow;", "&downarrow;", "&rightarrow;"]
  ],
};

let changeLang = "en";
let keys;
let isCaps = false;

const keyboard = document.createElement("div");
keyboard.className = "keyboard";
  
function createKeyboard(lang) {
  for (let j = 0; j < keysArray[lang].length; j++){
    const line = document.createElement("div");
    line.className = `line-${j} line`;
    keyboard.append(line);
    for (let i = 0; i < keysArray[lang][j].length; i++){
      const btn = document.createElement("span");
      btn.innerHTML = keysArray[lang][j][i];
      switch (keysArray[lang][j][i]) {
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
  keys = document.querySelectorAll(".button-style");
}

function setLocalStorage() {
  localStorage.setItem("lang", changeLang);
}
window.addEventListener("beforeunload", setLocalStorage);

function getLocalStorage() {
  if (localStorage.getItem("lang")) {
    const lang = localStorage.getItem("lang");
    createKeyboard(lang);
    keysListener();
    buttonListener();
  }
}
window.addEventListener("load", getLocalStorage);

function buttonListener() {
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
            inputText(key.innerHTML);
          }
          break;
        case "ArrowUp":
          if (key.innerHTML === "↑") {
            key.classList.add("button-press");
            inputText(key.innerHTML);
          }
          break;
        case "ArrowLeft":
          if (key.innerHTML === "←") {
            key.classList.add("button-press");
            inputText(key.innerHTML);
          }
          break;
        case "ArrowDown":
          if (key.innerHTML === "↓") {
            key.classList.add("button-press");
            inputText(key.innerHTML);
          }
          break;
        case "ArrowRight":
          if (key.innerHTML === "→") {
            key.classList.add("button-press");
            inputText(key.innerHTML);
          }
          break;
        case "CapsLock":
          if (key.innerHTML === 'CapsLK<span class="light"></span>') {
            key.classList.add("button-press");
            key.classList.toggle("capsLock-on");
            !isCaps ? (isCaps = true) : (isCaps = false);
            toCapitalize();
          }
          break;
        case "Tab":
          if (key.innerHTML === "Tab") {
            inputText(key.innerHTML);
          }
          break;
        case "Shift":
          if (key.innerHTML === "Shift") {
            key.classList.add("button-press");
            shiftPress();
          }
          break;
      }
      if (key.innerHTML === codeName) {
        key.classList.add("button-press");
        inputText(key.innerHTML);
      }
    });
    if (e.ctrlKey && e.shiftKey) {
      changeLang == "en" ? changeLang = "ru" : changeLang = "en";
      localStorage.setItem("lang", changeLang);
      keyboard.innerHTML = "";
      createKeyboard(changeLang);
      keys = document.querySelectorAll(".button-style");
      keysListener();
    }

  });

  window.addEventListener("keyup", (e) => {
    keys.forEach((key) => {
      if (key.classList.contains("button-press")) {
        if (key.innerHTML !== "Shift") {
          key.classList.remove("button-press");
        }
      }
    });
    if (e.key === "Shift") {
      keyboard.innerHTML = "";
      createKeyboard(changeLang);
      keys = document.querySelectorAll(".button-style");
      isCaps = false;
      keysListener();
    }
  });
}


function toCapitalize() {
  let symbols = document.querySelectorAll(".button");
  symbols.forEach((el) => {
    let symb = el.innerHTML;
    if (isCaps) {
      el.innerHTML = "";
      el.innerHTML = symb.toUpperCase();
    } else {
      el.innerHTML = "";
      el.innerHTML = symb.toLowerCase();
    }
  });
}
function keysListener() {
  keys.forEach((el) => {
    el.addEventListener("mousedown", (e) => {
      if (el === "Shift") {
        shiftPress();
      }else {
        let currentSymb = e.target.innerHTML;
        inputText(currentSymb); 
      }
    });
    // el.addEventListener("click", (e) => {
      
        
    el.addEventListener("mouseup", () => {
      if (el === "Shift") {
        keyboard.innerHTML = "";
        createKeyboard(changeLang);
        keys = document.querySelectorAll(".button-style");
        keysListener();
      }
    });
      
    
  });
  
// });
}
  
function inputText(symb) {
  const area = document.querySelector(".display-textarea");
  switch (symb) {
    case "Ctrl":
      break;
    case "Win":
      break;
    case "Alt":
      break;
    case 'CapsLK<span class="light"></span>':
      keys.forEach((key) => {
        if (key.innerHTML === 'CapsLK<span class="light"></span>') {
          key.classList.toggle("capsLock-on");
          !isCaps ? (isCaps = true) : (isCaps = false);
          toCapitalize();
        }
      });
      break;
    case "Shift":
      break;
    case "Tab":
      area.innerHTML += "   ";
      break;
    case "BackSP":
      let someText = area.innerHTML.slice(0, -1);
      area.innerHTML = someText;
      break;
    case "Enter":
      area.innerHTML += "\n";
      break;
    default:
      area.innerHTML += symb;
      break;
  }
}
function shiftPress() {
  if (changeLang == "en") {
    keyboard.innerHTML = "";
    createKeyboard("enShift");
    keys = document.querySelectorAll(".button-style");
    keys.forEach((key) => {
      if (key.innerHTML === "Shift") {
        key.classList.add("button-press");
      }
    });
    isCaps = true;
    keysListener();
  } else {
    keyboard.innerHTML = "";
    createKeyboard("ruShift");
    keys = document.querySelectorAll(".button-style");
    keys.forEach((key) => {
      if (key.innerHTML === "Shift") {
        key.classList.add("button-press");
      }
    });
    isCaps = true;
    keysListener();
  }
}