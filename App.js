//add to click for coin//
import Mbn from "./utils/Mbn.js";
import Omd from "./utils/Omd";
import Arash from "./utils/Arash";

const hamsterBtn = document.querySelector("#hamsterBtn")
const mbn = new Mbn()  // define new mbn class
const omd = new Omd ()
const arash = new Arash()
hamsterBtn.addEventListener("click",function () {
    arash.sum(mbn.getCoins(),omd.getRatio())
})


const coinValue= document.querySelector("#coinValue")
console.log(coinValue)

//This code finds the coinValue element and prints it in the console//
mbn.setDefaultRatio()


// function set default coins 0 if there aren't saved coins
    mbn. setDefaultCoins()



//This code get ratio from localstorage and return it//





