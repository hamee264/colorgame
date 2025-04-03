const squares = document.querySelectorAll(".square");
// let colors = [
//   "rgb(255, 0, 0)",
//   "rgb(255, 255, 0)",
//   "rgb(0, 255, 0)",
//   "rgb(0, 255, 255)",
//   "rgb(0, 0, 255)",
//   "rgb(225, 0, 225)",
// ];

let colors = generateRandomColor(9)
let winningColor = pickColor();
let colorDisplay = document.querySelector("#colordisplay");
let messageDisplay = document.querySelector(".message");
let h1Content = document.querySelector("h1")
let wrap = document.querySelector(".wrap");
colorDisplay.innerHTML = winningColor;
let reset = document.getElementById('Reset-Btn')
let easy = document.getElementById('easy')
let normal = document.getElementById('normal')
let hard = document.getElementById('hard')
normalFunc()



reset.addEventListener("click", resetFunc)
easy.addEventListener("click", easyFunc)
normal.addEventListener("click", normalFunc)
hard.addEventListener("click", hardFunc)

function easyFunc() {
    colors = generateRandomColor(3)
    winningColor = pickColor()
    colorDisplay.innerHTML = winningColor;
     wrap.style.background = "steelblue";
     messageDisplay.textContent = "";
    for (let index = 0; index < squares.length; index++) {
       if (colors[index]) {
         squares[index].style.background = colors[index]
       } else {
           squares[index].style.display = "none"
       }
    }
}

function normalFunc() {
   colors = generateRandomColor(6);
   winningColor = pickColor();
   colorDisplay.innerHTML = winningColor;
   wrap.style.background = "steelblue";
   messageDisplay.textContent = "";
   for (let index = 0; index < squares.length; index++) {
     if (colors[index]) {
         squares[index].style.background = colors[index];
          squares[index].style.display = "flex";
     } else {
        squares[index].style.display = "none";
     }
   }  
}

function hardFunc(params) {
     colors = generateRandomColor(9);
     winningColor = pickColor();
     colorDisplay.innerHTML = winningColor;
     wrap.style.background = "steelblue";
     messageDisplay.textContent = "";
     for (let index = 0; index < squares.length; index++) {
       if (colors[index]) {
         squares[index].style.background = colors[index];
         squares[index].style.display = "flex";
       } else {
        
       }
     }  
}
function resetFunc() {
    wrap.style.background = "steelblue";
    colors = generateRandomColor(6);
    messageDisplay.textContent = ""
    reset.textContent = "New colors"
    colorDisplay.innerHTML = winningColor
    normalFunc();
   
}
for (let index = 0; index < squares.length; index++) {
    squares[index].style.background = colors[index]
    // adding event listener to each square
    squares[index].addEventListener("click", function () {
        let clickedColor = this.style.background;


        if (clickedColor === winningColor) {
            // alert('correct')
            changeColor(clickedColor)
            messageDisplay.textContent = "gba sibe orie pe";
            wrap.style.background = winningColor
            reset.textContent = "play again";
        } else {
            messageDisplay.textContent = "olodo rabata go and sidown";
            this.style.background = "#232323";
            reset.textContent = "play again";
        }
    })

}

function changeColor(colors) {
    for (let index = 0; index < squares.length; index++) {
        squares[index].style.background = colors;
    }
}

function pickColor() {
    let randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}


function generateRandomColor(num) {
    let arr = []
    for (let index = 0; index < num; index++) {
        randomColor();
        arr.push(randomColor())
    }
    return arr
}


function randomColor() {
    // pick red color from Zero to 255
    let r = Math.floor(Math.random() * 255);
    // pick green color
    let g = Math.floor(Math.random() * 255);
    // pick blue color
    let b = Math.floor(Math.random() * 255);


    return `rgb(${r}, ${g}, ${b})`
}