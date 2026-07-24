import Eisa from "./Eisa.js";
import Omd from "./Omd.js";
export default class Arash{
    constructor(){}
    eisa = new Eisa()
    omd = new Omd()
    sum (coins,ratio) {
        let total = Number(coins) + Number(ratio)
        coinValue.innerHTML = total
        localStorage.setItem("coins", total)

    }

// the function show 2 number, total on the page and saved in localstorage
buyIfAfford (coins,nutPrice) {
        if (coins>=nutPrice) {
            let result = Number(coins) - Number(nutPrice)
           this.eisa.updateNutPriceText(result)
            this.omd.setDefaultNutPrice(result)
        }
        else {
            window.alert("سکه کافی نمیباشد")
        }
}

}