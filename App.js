//add to click for coin//
import Mbn from "./utils/Mbn.js";

const hamsterBtn = document.querySelector("#hamsterBtn")
const mbn = new Mbn()  // defin new mbn class
hamsterBtn.addEventListener("click",function () {
    sum(mbn.getCoins(),getRatio())
})


const coinValeu= document.querySelector("#coinValue")
console.log(coinValeu)

//This code finds the coinValue element and prints it in the console//
mbn.setDefaultRatio()


// function set default coins 0 if there aren't saved coins
    mbn. setDefaultCoins()



function getRatio () {
    let ratio = localStorage.getItem("ratio")
    return ratio
}//This code get ratio from localstorage and return it//
function sum (coins,ratio) {
    let total = Number(coins) + Number(ratio)
    coinValeu.innerHTML = total
    localStorage.setItem("coins", total)

}

// the function show 2 number, total on the page and saved in localstorage //




