var Driver = prompt("Hello Driver, welcome to the Nurburgring! What car would you like to drive today -- Ferrari LaFerrari, a McLaren P1, or a 918 Spider?");

switch (Driver) {
  case 'Ferrari LaFerrari':
    var sebastian = prompt("Sebastian Vettel loves Ferrari's fastest car ever- have you driven a Ferrari before (yes or no)?");
    var kimi = prompt("Do you think you can drive it in anger and still be cool like Kimi Raikkonen (yes or no)?");
    if (sebastian === 'yes' && kimi === 'yes') {
      console.log("You are very brave, paisano. Enjoy your drive and good luck!");
    } else {
      console.log("Remember, they are professional F1 drivers for Ferrari. Just don't try to be like them and you should be safe!");
    }
    break;

  case 'McLaren P1':
    var jenson = prompt("Do you think you can drive it smooth like how Jenson Button does (yes or no)?");
    var fernando = prompt("Can you drive crazy like Fernando Alonso (yes or no)?");
    if (jenson === 'yes' && fernando === 'yes') {
      console.log("Great! They're two great drivers who love this car. Go drive like them and enjoy!");
    } else {
      console.log("Its a technologically advanced but forgiving car so don't worry, it's limit is likely farther than yours!");
    }
    break;

  case '918 Spider':
    var webber = prompt("Do you think you can drive it like how Mark Webber drives his LMP car (yes or no)?");
    var rorhl = prompt("Do you know who the legenday Porsche test driver, Walter Rorhl, is?");
    if (webber === 'yes' && rorhl === 'yes') {
      console.log("They are great Porsche drivers. Its best to emulate their driving for maximum enjoyment. Good luck!");
    } else {
      console.log("They are great Porsche drivers. Look them up and maybe you can learn a thing or two!");
    }
    break;

  default:
      console.log("Maybe you spelled it wrong. Please choose again.");
}
