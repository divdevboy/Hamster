export default class Mbn {
    constructor() {
    }

    setDefaultRatio() {
        if (localStorage.getItem("ratio") === null) {
            localStorage.setItem("ratio", "1")
        }//This code set ratio in localstorage
    }

    setDefaultCoins() {
        if (localStorage.getItem("coins") === null) {
            localStorage.setItem("coins", "0")
        }
    }

    getCoins() {
        let coins = localStorage.getItem("coins")
        return coins
    }
}