const boxes = document.querySelectorAll('.box')
const box = document.querySelector('.box')
const countEl = document.querySelector('.count-el')
const startBtn = document.querySelector('#start-btn')
const endBtn = document.querySelector("#end-btn")
const container = document.querySelector('.container')
const score = document.querySelector('.score')
const containerCount = document.querySelector('.container-count')
const startContainer = document.querySelector('.start-container')


let count = 0

startBtn.addEventListener('click', () => {
  container.style.display = 'flex'
  startBtn.style.display = 'none'
  endBtn.style.display = 'block'
  containerCount.style.display = 'block'
  startContainer.style.display = 'none'
})

endBtn.addEventListener('click', () => {
  container.style.display = 'none'
  startBtn.style.display = 'block'
  endBtn.style.display = 'none'
  containerCount.style.display = 'none'
  startContainer.style.display = 'flex'
  score.textContent = 'Score: 0'
  count = 0
})

document.addEventListener("DOMContentLoaded", function() {
  setInterval(autoRefreshDiv, 1000);

  boxes.forEach((box, idx) => box.addEventListener("click", () => {
    if (box.style.backgroundImage === 'url("img/mole2.png")') {
      increment()
      box.style.backgroundImage = 'url("img/boom.png")'
      console.log("hit")
    } else {
      console.log("missed")
    }
  }))
})

function increment() {
    count += 1
    score.textContent = 'Score: ' + count
}

function autoRefreshDiv() {
  const randomMole = getRandomMole(boxes.length)

  boxes.forEach(box => box.style.backgroundImage = '')

  boxes[randomMole].style.backgroundImage = 'url(img/mole2.png)'
}

function getRandomMole(length) {
  let min = 0
  let max = length - 1
  return Math.floor(Math.random() * (max - min + 1))
}
