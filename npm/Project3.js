var readlineSync = require("readline-sync");

var name = readlineSync.question("May I have your name? ");
const welcomeMesssage = `Welcome, ${name}, to the Escape Room Simulation!`;
console.log(welcomeMesssage);

var isAlive = true;
var hasKey = false;
while (isAlive == true) {
  const menuOptions = readlineSync.keyIn(
    `Click 1 to Put hand in hole, Click 2 Find the key, or Click 3 Open the door `,
    { limit: "$<1-3>" }
  );

  switch (menuOptions) {
    case "1":
      console.log(`${name} game over.`);

      isAlive = false;

      break;
    case "2":
      switch (hasKey) {
        case true:
          console.log(`${name}, you have already the key.`);
          break;
        case false:
          console.log(`${name}, you find the key.`);
          hasKey = true;
          break;
      }
      break;
    case "3":
      switch (hasKey) {
        case true:
          console.log(`${name}, congrats you can open the door.`);
          isAlive = false;
          break;
        case false:
          console.log(
            `${name}, you have not found the key. Use the option to find the key first.`
          );
          break;
      }
      break;
    //     console.log(`$(name),well done, your found the key, please proceed to next menu option to exit the game room successfully.`)
    // hasKey=true;
    //     break;
    //     case("manuOptions==2 && hasKey=true"):

    //     console.loh(`$(name), you have already found the key, stop wasting your time go to the next option.`);

    //     break;
    //     case("manuOptions==3 && hasKey==false"):
    // console.log(`$(name), you have not found the key. Use the option to find the key first.` )
  }
}

// menuOptions("Click 1, Click 2, Click 3")
