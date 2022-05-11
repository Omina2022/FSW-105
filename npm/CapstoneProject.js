var readlineSync = require("readline-sync");

var name = readlineSync.question("May I have your name ? ");
readlineSync.question(`Welcome` + name + `are you ready for the game? Click enter to start the game.`);
let actorsName = [`Will Smith`, `Leonardo DiCaprio`, `Ryan Reynolds`, `Chris Pratt`];
const awards = [`Academy Awards`, `Golden Globe Awards`, `Emmy Awards`, `AACTA Awards`];
let chanseToPlay = 30;
var prize = [];
const steps = [`Walk`, `Exit`, `Print`];
let receive = awards[Math.floor(Math.random() * awards.length)];
let userPlay = 30;
function game() {
    const attackPower = Math.floor(Math.random() * (6 - 3 + 5) + 4);
    actorsName = actorsName[Math.floor(Math.random() * actorsName.length)];

    const actorsNamePower = Math.floor(Math.random() * (6 - 1 + 5) + 4);
    const index = readlineSync.keyInSelect(steps, `What will you do next?`);

    console.log(index)
    if (steps[index] == `Exit`) {
        return userPlay = 0;
    } else if (steps[index] == `Print`) {
        console.log(name + `\n` + chanseToPlay + `\n awards` + receive);
    } else if (steps[index] == `Walk`) {

        let key = Math.random();
        console.log(key)
        if (key <= .3) {

            console.log(`Walking`);
        } else if (key > .3) {
            const actor = Math.floor(Math.random() * 4);
            console.log(actorsName[actor] + `showed up`);
            let actorsNamePlay = 30

            while (userPlay > 0 && actorsNamePlay > 0) {
                // const user= readlineSync.question (`What do you want to do? Enter "r" to run or "a" attack:`);
                var user = readlineSync.question('What do you want to do? Enter "r" to run or "a" attack: ');
                switch (user) {
                    case `r`:
                        let run = Math.random();
                        if (run < .5) {
                            console.log(`Before you run away` + actorsName + `attacks you with:` + actorsNamePower);
                            break;
                        } else {
                            console.log(`You run away!`);
                            actorsNamePlay = 0
                            break;
                        }
                    case `a`:
                        actorsNamePlay = actorsNamePlay - attackPower;
                        console.log(`You attacked` + actorsName + `with` + attackPower + `attack power`);
                        userPlay = userPlay - actorsNamePower;
                        console.log(`Enemy just attacked yo with:` + actorsNamePower + `attack power`);
                        if (actorsNamePlay <= 0) {
                            console.log(`You killed` + actorsName + `\n` + actorsName + `left` + receive);
                            let loot = Math.random();
                            if (loot <= .3) {
                                prize.push(receive);
                            }
                            break;
                        } else if (userPlay <= 0) {
                            console.log(actorsName + `has defeated you. You are dead.`);
                            break;
                        }
                }
            }
        }

    }

}
while (userPlay > 0) {

    game()
}




