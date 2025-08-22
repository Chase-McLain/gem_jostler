console.log('rat')

function buttonTest() {
  console.log('rat')
}



// -----------------Gem Counter--------------------------------------


let totalGems = 0
let gemCounter = document.getElementById('gem-counter')

function gemTotal() {
  totalGems += 1
  // console.log(totalGems)
  gemDisplay()
}

function gemDisplay() {
  gemCounter.innerHTML = `<h4> Gems: ${totalGems} </h4>`
}



















