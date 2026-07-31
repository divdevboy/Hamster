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
    console.log("تازه وارد فانکشن شدیم" , coins, nutPrice)
    if (Number(coins)>=Number(nutPrice)){
            console.log("تازه اول if", coins, nutPrice)
            let result = Number(coins) - Number(nutPrice)
        console.log("نتیجه تفریق" , result)
           this.eisa.updateNutPriceText(result)
            this.omd.setDefaultNutPrice(result)
            localStorage.setItem("coins",result.toString())

        } else {
            window.alert("سکه کافی نمیباشد")
        }
}

}