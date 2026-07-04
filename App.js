const hamsterBtn = document.querySelector("#hamsterBtn")
hamsterBtn.addEventListener("click",function () {
    sum(getCoins(),getRatio())
})


const coinValeu= document.querySelector("#coinValue")
console.log(coinValeu)

//This code finds the coinValue element and prints it in the console//
function setDefaultRatio() {
    if (localStorage.getItem("ratio") === null) {
        localStorage.setItem("ratio", "1")
    }
}
setDefaultRatio()

function setDefaultCoins () {
    if (localStorage.getItem("coins") === null) {
        localStorage.setItem("coins" , "0")
    }}
    setDefaultCoins()
// function set default coins 0 if there arnt saved coins ///
function getCoins () {
     let coins = localStorage.getItem("coins")
  return coins
}


function getRatio () {
    let ratio = localStorage.getItem("ratio")
    return ratio
}
function sum (coins,ratio){
    let total =Number(coins+ratio)
    coinValeu.innerHTML= total
    localStorage.setItem("coins",total)

}

// the function show 2 number, total on the page and saved in localstorage //