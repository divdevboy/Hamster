const hamsterBtn = document.querySelector("#hamsterBtn")
hamsterBtn.addEventListener("click",function () {
    console.log(5)
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

function sum (coins,ratio){
    let total = coins+ratio
    coinValeu.innerHTML= total

}




