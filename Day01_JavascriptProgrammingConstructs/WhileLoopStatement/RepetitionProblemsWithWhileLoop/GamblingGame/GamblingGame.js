let money = 100;
let goal = 200;
let bets = 0;
let wins = 0;

while (money > 0 && money < goal) {
    bets++;
    let betResult = Math.random() < 0.5; // 50% chance of winning

    if (betResult) {
        money++;
        wins++;
    } else {
        money--;
    }
}

console.log(`Total Bets Made: ${bets}`);
console.log(`Total Wins: ${wins}`);
console.log(money === 0 ? "Gambler went broke!" : "Gambler reached the goal!");