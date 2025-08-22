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

let autoUpgrade = [
  {
    name: 'excavator',
    price: 1000,
    qty: 0,
    bonus: 100
  },
  {
    name: 'TNTdetonator',
    price: 10000,
    qty: 0,
    bonus: 1000
  }
]


// -----------------Gem Counter--------------------------------------


let totalGems = 0
let clickPower = 1
let gemCounter = document.getElementById('gem-counter')
let clickPowerCounter = document.getElementById('click-counter')
let pickaxeLevelDisplay = document.getElementById('pickaxe-level')
let pickaxeBonusDisplay = document.getElementById('pickaxe-bonus')
let pickaxePriceDisplay = document.getElementById('pickaxe-price')
let drillLevelDisplay = document.getElementById('drill-level')
let drillBonusDisplay = document.getElementById('drill-bonus')
let drillPriceDisplay = document.getElementById('drill-price')

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


// ------------------Click Upgrade Purchases---------------------------

function PickaxeLevelCounter() {
  pickaxeLevelDisplay.innerHTML = `<p> LvL: ${clickUpgrades[0].qty} </p>`
  pickaxeBonusDisplay.innerHTML = `<p> Bonus: ${clickUpgrades[0].bonus}</p>`
  pickaxePriceDisplay.innerHTML = `<p id="pickaxe-price" class="m-0"> Pickaxe Upgrade: ${clickUpgrades[0].price} </p>`
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
  drillLevelDisplay.innerHTML = `<p> LvL: ${clickUpgrades[1].qty} </p>`
  drillBonusDisplay.innerHTML = `<p> Bonus: ${clickUpgrades[1].bonus}</p>`
  drillPriceDisplay.innerHTML = `<p id="drill-price" class="m-0"> Drill Upgrade: ${clickUpgrades[1].price} </p>`
}

function buyDrill() {
  if (totalGems < clickUpgrades[1].price) return
  totalGems -= clickUpgrades[1].price
  clickPower += 20
  clickUpgrades[1].qty += 1
  clickUpgrades[1].bonus += 20
  clickUpgrades[1].price += 50
  console.log('rat')
  gemDisplay()
  clickPowerDisplay()
  drillLevelCounter()
}


// -------------- Auto Upgrade Purchases -----------------------











