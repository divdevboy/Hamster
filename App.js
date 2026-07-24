import Mbn from "./utils/Mbn.js";
import Omd from "./utils/Omd.js";
import Arash from "./utils/Arash.js";
import Eisa from "./utils/Eisa.js";
const coinValue= document.querySelector("#coinValue")
const hamsterBtn = document.querySelector("#hamsterBtn")
const nut = document.querySelector("#nut")
const mbn = new Mbn()  // define new mbn class
const omd = new Omd ()
const arash = new Arash()
const eisa = new Eisa()
hamsterBtn.addEventListener("click",function () {
    arash.sum(mbn.getCoins(),omd.getRatio())
})
nut.addEventListener("click",function (){
    let nutPrice =  localStorage.getItem("nutPrice")
   arash.buyIfAfford(mbn.getCoins(),nutPrice)
})
//This code finds the coinValue element and prints it in the console//
mbn.setDefaultRatio()
// function set default coins 0 if there aren't saved coins
    mbn. setDefaultCoins()
// show saved price for nut
arash.sum(mbn.getCoins(),"0")
// set default price for nut
omd.setDefaultNutPrice()







