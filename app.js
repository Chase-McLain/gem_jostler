console.log('rat')

function buttonTest() {
  console.log('rat')
}

let clickUpgrades = [
  {
    name: 'pickaxe',
    price: 10,
    qty: 0.,
    bonus: 0
  },
  {
    name: 'drill',
    price: 100,
    qty: 0,
    bonus: 0
  }
]

let autoUpgrades = [
  {
    name: 'excavator',
    price: 1000,
    qty: 0,
    bonus: 0
  },
  {
    name: 'TNTdetonator',
    price: 10000,
    qty: 0,
    bonus: 0
  }
]


// -----------------Gem Counter--------------------------------------


let totalGems = 0
let clickPower = 1
let autoGems = 0
let autoPower = 0
let gemCounter = document.getElementById('gem-counter')
let clickPowerCounter = document.getElementById('click-counter')
let autoPowerCounter = document.getElementById('auto-power')
let pickaxeLevelDisplay = document.getElementById('pickaxe-level')
let pickaxeBonusDisplay = document.getElementById('pickaxe-bonus')
let pickaxePriceDisplay = document.getElementById('pickaxe-price')
let drillLevelDisplay = document.getElementById('drill-level')
let drillBonusDisplay = document.getElementById('drill-bonus')
let drillPriceDisplay = document.getElementById('drill-price')
let excavatorLevelDisplay = document.getElementById('excavator-level')
let excavatorBonusDisplay = document.getElementById('excavator-bonus')
let excavatorPriceDisplay = document.getElementById('excavator-price')
let tntLevelDisplay = document.getElementById('tnt-level')
let tntBonusDisplay = document.getElementById('tnt-bonus')
let tntPriceDisplay = document.getElementById('tnt-price')


function gemTotal() {
  totalGems += clickPower
  // console.log(totalGems)
  gemDisplay()
}

function gemDisplay() {
  gemCounter.innerHTML = `<h4> Gems: ${totalGems} </h4>`
}

function clickPowerDisplay() {
  clickPowerCounter.innerHTML = `<h4> Gems per Click: ${clickPower}</h4>`
}

function autoPowerDisplay() {
  autoPowerCounter.innerHTML = `<h4> Gems per Cycle: ${autoPower}</h4>`
}


// ------------------Click Upgrade Purchases---------------------------

function PickaxeLevelCounter() {
  pickaxeLevelDisplay.innerHTML = `<p> LvL: ${clickUpgrades[0].qty} </p>`
  pickaxeBonusDisplay.innerHTML = `<p> Bonus: ${clickUpgrades[0].bonus}</p> `
  pickaxePriceDisplay.innerHTML = `<p id = "pickaxe-price" class="m-0"> Pickaxe Upgrade: ${clickUpgrades[0].price} </p> `
}


function buyPickaxe() {
  if (totalGems < clickUpgrades[0].price) return
  totalGems -= clickUpgrades[0].price
  clickPower += 2
  clickUpgrades[0].qty += 1
  clickUpgrades[0].bonus += 2
  clickUpgrades[0].price += 1
  // console.log('rat')
  gemDisplay()
  clickPowerDisplay()
  PickaxeLevelCounter()
}


function drillLevelCounter() {
  drillLevelDisplay.innerHTML = `<p> LvL: ${clickUpgrades[1].qty} </p> `
  drillBonusDisplay.innerHTML = `<p> Bonus: ${clickUpgrades[1].bonus}</p> `
  drillPriceDisplay.innerHTML = `<p id = "drill-price" class="m-0"> Drill Upgrade: ${clickUpgrades[1].price} </p> `
}

function buyDrill() {
  if (totalGems < clickUpgrades[1].price) return
  totalGems -= clickUpgrades[1].price
  clickPower += 20
  clickUpgrades[1].qty += 1
  clickUpgrades[1].bonus += 20
  clickUpgrades[1].price += 50
  // console.log('rat')
  gemDisplay()
  clickPowerDisplay()
  drillLevelCounter()
}


// -------------- Auto Upgrade Purchases -----------------------


function excavatorLevelCounter() {
  excavatorLevelDisplay.innerHTML = `<p> LvL: ${autoUpgrades[0].qty} </p> `
  excavatorBonusDisplay.innerHTML = `<p> Bonus: ${autoUpgrades[0].bonus}</p> `
  excavatorPriceDisplay.innerHTML = `<p id = "excavator-price" class="m-0"> Excavator Upgrade: ${autoUpgrades[0].price} </p> `
}


function buyExcavator() {
  if (totalGems < autoUpgrades[0].price) return
  totalGems -= autoUpgrades[0].price
  autoPower += 100
  autoUpgrades[0].qty += 1
  autoUpgrades[0].bonus += 100
  autoUpgrades[0].price += 500
  // console.log('rat')
  gemDisplay()
  autoPowerDisplay()
  excavatorLevelCounter()
}


function excavatorCollect() {
  totalGems += autoUpgrades[0].bonus
  gemDisplay()
}


function tntLevelCounter() {
  tntLevelDisplay.innerHTML = `<p> LvL: ${autoUpgrades[1].qty} </p> `
  tntBonusDisplay.innerHTML = `<p> Bonus: ${autoUpgrades[1].bonus}</p> `
  tntPriceDisplay.innerHTML = `<p id = "tnt-price" class="m-0"> TNT Detonator: ${autoUpgrades[1].price} </p> `
}


function buyDetonator() {
  if (totalGems < autoUpgrades[1].price) return
  totalGems -= autoUpgrades[1].price
  autoPower += 1000
  autoUpgrades[1].qty += 1
  autoUpgrades[1].bonus += 1000
  autoUpgrades[1].price += 5000
  gemDisplay()
  autoPowerDisplay()
  tntLevelCounter()
}


function tntCollect() {
  totalGems += autoUpgrades[1].bonus
  gemDisplay()
}


setInterval(excavatorCollect, 1000 * 3)

setInterval(tntCollect, 1000 * 3)


// ------------- TEST----------------------

function manyGems() {
  totalGems += 100000
  gemDisplay()
}





