const hamsterBtn = document.querySelector("#hamsterBtn")
hamsterBtn.addEventListener("click",function () {
    sum(getCoins(),getRatio())
})


const coinValeu= document.querySelector("#coinValue")
console.log(coinValeu)


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

}


