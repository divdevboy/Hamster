const hamsterBtn = document.querySelector("#hamsterBtn")
hamsterBtn.addEventListener("click",function () {
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
    console.log(coins)
}
getCoins()

