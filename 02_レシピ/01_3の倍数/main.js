//24までの値
// const number = 24
// for (let n = 1; n <= number; n++) {
//   if (n % 3 == 0) {
//     console.log(n + "!!!!!!!")
//   } else {
//     console.log(n)
//   }
// }

//関数での定義
// const genkiFunction = function (number) {
//   for (let n = 1; n <= number; n++) {
//     if (n % 3 == 0) {
//       console.log(n + "!!!!!!!")
//     } else {
//       console.log(n)
//     }
//   }
// }

//3,5,15の倍数判断：FizzBuzz
// const FizzBuzz = function (number) {
//   for (let i = 1; i <= number; i++) {
//     if (i % 15 == 0) {
//       console.log("FizzBuzz")
//     } else if (i % 5 == 0) {
//       console.log("Buzz")
//     } else if (i % 3 == 0) {
//       console.log("Fizz")
//     } else {
//       console.log(i)
//     }
//   }
// }

//3が含まれるものも元気に(未完成)
// const genkiFunction = function (number) {
//   for (let n = 1; n <= number; n++) {
//     if (n % 3 == 0) {
//       console.log(n + "!!!!!!!")
//     } else {
//       console.log(n)
//     }
//   }
// }

//元気な秒針（setInterval）
const display = document.getElementById("display")
const button = document.getElementById("button")

let count = 0

const countUp = function () {
  count += 1
  if (count % 3 == 0) {
    display.textContent = count + "!!!!!!!"
  } else {
    display.textContent = count
  }
}

let id = null

button.onclick = function () {
  if (id === null) {
    // start
    id = setInterval(countUp, 1000)
    button.textContent = "stop"
  } else {
    // stop
    clearInterval(id)
    id = null
    button.textContent = "start"
  }
}
