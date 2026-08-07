import Omd from "./Omd.js";

export default class Eisa {
    constructor() {
    }

    updateNutPriceText(number) {
        const nutPriceText = document.querySelector("#nutPriceText")
            nutPriceText.innerHTML = number

    }

 updateNutPrice1() {
    let nutPrice = localStorage.getItem("nutPrice")
    let result = nutPrice*1.5
     let a = Math.round(result)
     this.updateNutPriceText(a)
    localStorage.setItem("nutPrice",a.toString())
}
    reduceEnergy(energyText) {
        let energy = localStorage.getItem("EnergyValue") //100coin
        let resulte = energy-1 //99resulte
        localStorage.setItem("EnergyValue",resulte)
let omd = new Omd()
        omd.showTheHunderd(energyText,resulte)
    }





}





