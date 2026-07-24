export default class Arash{
    constructor(){}
    sum (coins,ratio) {
        let total = Number(coins) + Number(ratio)
        coinValue.innerHTML = total
        localStorage.setItem("coins", total)

    }

// the function show 2 number, total on the page and saved in localstorage
}