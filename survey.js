const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(`What's your name? Nicknames are also acceptable :)  `, (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`)
   usrname = answer;

  rl.question(`What's an activity you like doing?  `, (answer2) => {
    activity = answer2;

    rl.question('What do you listen to while doing that?  ', (answer4) => {
      listen = answer4
        
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)  ', (answer5) => {
        meal = answer5

        rl.question(`What's your favourite thing to eat for that meal?  `, (answer6) => {
          favInMeal = answer6

          rl.question(`Which sport is your absolute favourite?  `, (answer7) => {
          favSport = answer7
           
            rl.question('What is your superpower? In a few words, tell us what you are amazing at!  ', (answer8) => {
            superPwr = answer8


            console.log(`${usrname} loves ${activity} while listening to ${listen} , and eating ${favInMeal} for ${meal}, their favorite sport is ${favSport}, and they are AMAZING at ${superPwr}!`)
              
            rl.close();

            });
          });
        });
      });
    });
  });
});

