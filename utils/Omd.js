import Eisa from "./Eisa.js";

export default class Omd{
    constructor() {}
     eisa = new Eisa()

    getRatio () {
        let ratio = localStorage.getItem("ratio")
        return ratio}
    setDefaultNutPrice (){
        let nutPrice =  localStorage.getItem("nutPrice")
        if (nutPrice===null){
            localStorage.setItem("nutPrice","100")
            this.eisa.updateNutPriceText(100)
        } else {
            this.eisa.updateNutPriceText(nutPrice)

        }
    }








}
