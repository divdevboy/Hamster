import Eisa from "./Eisa.js";
export default class Arash{
    constructor(){}
    sum (coins,ratio) {
        let total = Number(coins) + Number(ratio)
        coinValue.innerHTML = total
        localStorage.setItem("coins", total)

    }

// the function show 2 number, total on the page and saved in localstorage
buyIfAfford (coins,nutPrice) {
        if (coins>=nutPrice) {
            let result = Number(coins) - Number(nutPrice)
            (result)
            setDefaultNutPrice()
        }
        else {
            window.alert("سکه کافی نمیباشد")
        }
}
    eisa = new Eisa()
}